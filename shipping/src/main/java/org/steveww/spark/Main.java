package org.steveww.spark;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;
import com.mchange.v2.c3p0.ComboPooledDataSource;

import co.elastic.apm.opentracing.ElasticApmTracer;
import io.opentracing.Scope;
import io.opentracing.Span;
import io.opentracing.SpanContext;
import io.opentracing.Tracer;
import io.opentracing.propagation.Format;
import io.opentracing.propagation.TextMap;
import io.opentracing.propagation.TextMapExtractAdapter;
import io.opentracing.tag.Tags;
import spark.Request;
import spark.Response;
import spark.Spark;

@SuppressWarnings("deprecation")
public class Main {
	private static String CART_URL = null;
	private static String JDBC_URL = null;
	private static Logger logger = LoggerFactory.getLogger(Main.class);
	private static ComboPooledDataSource cpds = null;

	public static void main(String[] args) {
		// Get ENV configuration values
		CART_URL = String.format("http://%s/shipping/",
				System.getenv("CART_ENDPOINT") != null ? System.getenv("CART_ENDPOINT") : "cart");
		JDBC_URL = String.format("jdbc:mysql://%s/cities?useSSL=false&autoReconnect=true",
				System.getenv("DB_HOST") != null ? System.getenv("DB_HOST") : "mysql");

		Tracer tracer = new ElasticApmTracer();

		//
		// Create database connector
		// TODO - might need a retry loop here
		//
		try {
			cpds = new ComboPooledDataSource();
			cpds.setDriverClass("com.mysql.jdbc.Driver"); // loads the jdbc driver
			cpds.setJdbcUrl(JDBC_URL);
			cpds.setUser("shipping");
			cpds.setPassword("secret");
			// some config
			cpds.setMinPoolSize(5);
			cpds.setAcquireIncrement(5);
			cpds.setMaxPoolSize(20);
			cpds.setMaxStatements(180);
		} catch (Exception e) {
			logger.error("Database Exception", e);
		}

		// Spark
		Spark.port(8080);

		Spark.get("/health", (req, res) -> "OK");

		Spark.get("/count", (req, res) -> {
			String data;

			Scope scope = startServerSpan(tracer, req, "/count");

			try {

				data = queryToJson("select count(*) as count from cities");
				res.header("Content-Type", "application/json");
			} catch (Exception e) {

				logger.error("count", e);
				res.status(500);
				data = "ERROR";
			} finally {
				finish(scope, res);
			}

			return data;
		});

		Spark.get("/codes", (req, res) -> {
			String data;

			Scope scope = startServerSpan(tracer, req, "/codes");

			try {

				String query = "select code, name from codes order by name asc";
				data = queryToJson(query);
				res.header("Content-Type", "application/json");
			} catch (Exception e) {
				logger.error("codes", e);
				res.status(500);
				data = "ERROR";
			} finally {
				finish(scope, res);
			}

			return data;
		});

		// needed for load gen script
		Spark.get("/cities/:code", (req, res) -> {
			String data = "";

			Scope scope = startServerSpan(tracer, req, "/cities/:code");

			try {

				String query = "select uuid, name from cities where country_code = ?";
				logger.info("Query " + query);
				res.header("Content-Type", "application/json");
			} catch (Exception e) {
				logger.error("cities", e);
				res.status(500);
				data = "ERROR";
			} finally {
				finish(scope, res);
			}

			return data;
		});

		Spark.get("/match/:code/:text", (req, res) -> {
			String data;

			Scope scope = startServerSpan(tracer, req, "/match/:code/:text");

			try {
				String query = "select uuid, name from cities where country_code = ? and city like ? order by name asc limit 10";
				logger.info("Query " + query);
				data = queryToJson(query, req.params(":code"), req.params(":text") + "%");
				res.header("Content-Type", "application/json");
			} catch (Exception e) {
				logger.error("match", e);
				res.status(500);
				data = "ERROR";
			} finally {
				finish(scope, res);
			}

			return data;
		});

		Spark.get("/calc/:uuid", (req, res) -> {

			Scope scope = startServerSpan(tracer, req, "/calc/:uuid");

			double homeLat = 51.164896;
			double homeLong = 7.068792;

			res.header("Content-Type", "application/json");
			Location location = getLocation(req.params(":uuid"));
			Ship ship = new Ship();
			if (location != null) {
				long distance = location.getDistance(homeLat, homeLong);
				// charge 0.05 Euro per km
				// try to avoid rounding errors
				double cost = Math.rint(distance * 5) / 100.0;
				ship.setDistance(distance);
				ship.setCost(cost);
			} else {
				res.status(500);
			}

			finish(scope, res);

			return new Gson().toJson(ship);
		});

		Spark.post("/confirm/:id", (req, res) -> {

			Scope scope = startServerSpan(tracer, req, "/confirm/:id");

			logger.info("confirm " + req.params(":id") + " - " + req.body());
			String cart = addToCart(req.params(":id"), req.body(), tracer, scope.span());
			logger.info("new cart " + cart);

			if (cart.equals("")) {
				res.status(404);
			} else {
				res.header("Content-Type", "application/json");
			}

			finish(scope, res);

			return cart;
		});

		logger.info("Ready");
	}

	private static void finish(Scope scope, Response res) {
		Span span = scope.span();

		// add headers
		HttpServletResponse raw = res.raw();
		for (String key : raw.getHeaderNames()) {
			span.setTag("resp:" + key, raw.getHeader(key));
		}

		span.finish();
	}

	private static Scope startServerSpan(Tracer tracer, Request req, String operationName) {

		Set<String> rawHeaders = req.headers();
		final HashMap<String, String> headers = new HashMap<String, String>();

		for (String key : rawHeaders) {
			headers.put(key, req.headers(key));
		}

		Tracer.SpanBuilder spanBuilder;
		try {
			SpanContext parentSpan = tracer.extract(Format.Builtin.HTTP_HEADERS, new TextMapExtractAdapter(headers));
			if (parentSpan == null) {
				spanBuilder = tracer.buildSpan(operationName);
			} else {
				spanBuilder = tracer.buildSpan(operationName).asChildOf(parentSpan);
			}
		} catch (IllegalArgumentException e) {
			spanBuilder = tracer.buildSpan(operationName);
		}

		// add headers
		for (String key : rawHeaders) {
			spanBuilder.withTag("req:" + key, req.headers(key));
		}

		spanBuilder.withTag(Tags.SPAN_KIND.getKey(), Tags.SPAN_KIND_SERVER);

		return spanBuilder.startActive(true);
	}

	/**
	 * Query to Json - QED
	 **/
	private static String queryToJson(String query, Object... args) {

		List<Map<String, Object>> listOfMaps = null;
		try {
			QueryRunner queryRunner = new QueryRunner(cpds);
			listOfMaps = queryRunner.query(query, new MapListHandler(), args);
		} catch (SQLException se) {

			throw new RuntimeException("Couldn't query the database.", se);
		}

		return new Gson().toJson(listOfMaps);
	}

	/**
	 * Special case for location, dont want Json
	 **/
	private static Location getLocation(String uuid) {
		Location location = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query = "select latitude, longitude from cities where uuid = " + uuid;

		try {

			conn = cpds.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);
			while (rs.next()) {
				location = new Location(rs.getDouble(1), rs.getDouble(2));
				break;
			}
		} catch (Exception e) {

			logger.error("Query exception", e);
		} finally {
			DbUtils.closeQuietly(conn, stmt, rs);

		}

		return location;
	}

	private static String addToCart(String id, String data, Tracer tracer, Span span) {
		StringBuilder buffer = new StringBuilder();

		DefaultHttpClient httpClient = null;
		try {

			// set timeout to 5 secs
			HttpParams httpParams = new BasicHttpParams();
			HttpConnectionParams.setConnectionTimeout(httpParams, 5000);

			httpClient = new DefaultHttpClient(httpParams);
			HttpPost postRequest = new HttpPost(CART_URL + id);

			tracer.inject(span.context(), Format.Builtin.TEXT_MAP, new TextMap() {

				@Override
				public void put(String key, String value) {
					postRequest.addHeader(key, value);
				}

				@Override
				public Iterator<Map.Entry<String, String>> iterator() {
					throw new UnsupportedOperationException(
							"TextMapInjectAdapter should only be used with Tracer.inject()");
				}
			});

			StringEntity payload = new StringEntity(data);
			payload.setContentType("application/json");
			postRequest.setEntity(payload);
			HttpResponse res = httpClient.execute(postRequest);

			if (res.getStatusLine().getStatusCode() == 200) {
				BufferedReader in = new BufferedReader(new InputStreamReader(res.getEntity().getContent()));
				String line;
				while ((line = in.readLine()) != null) {
					buffer.append(line);
				}
			} else {
				logger.warn("Failed with code: " + res.getStatusLine().getStatusCode());
			}
		} catch (Exception e) {
			logger.error("http client exception", e);
		} finally {
			if (httpClient != null) {
				httpClient.getConnectionManager().shutdown();
			}
		}

		return buffer.toString();
	}
}
