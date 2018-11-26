#
# Build
#
FROM openjdk:8-jdk AS build

RUN apt-get update && apt-get -y install maven

WORKDIR /opt/shipping

COPY pom.xml /opt/shipping/
RUN mvn install

COPY src /opt/shipping/src/
RUN mvn package

#
# Run
#
FROM openjdk:8-jdk

EXPOSE 8080

WORKDIR /opt/shipping

ENV CART_ENDPOINT=cart:8080
ENV DB_HOST=mysql

COPY --from=build /opt/shipping/target/shipping-1.0-jar-with-dependencies.jar shipping.jar

COPY lib/elastic-apm-agent-1.0.1.jar elastic-apm-agent-1.0.1.jar

CMD [ "java", \
      "-javaagent:elastic-apm-agent-1.0.1.jar", \
      "-Delastic.apm.service_name=shipping-java", \
      "-Delastic.apm.application_packages=org.steveww.spark", \
#      "-Delastic.apm.log_level=debug", \
      "-Delastic.apm.active=true", \
      "-Delastic.apm.disable_instrumentations=jdbc", \
      "-Delastic.apm.server_urls=http://apm-server:8200", \
      "-Xmn256m", "-Xmx768m", \
      "-jar", "shipping.jar" \
]
