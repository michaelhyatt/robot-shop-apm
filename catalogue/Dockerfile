FROM node:8

EXPOSE 8080

WORKDIR /opt/server

COPY package.json /opt/server/

RUN npm install

RUN npm install elastic-apm-node --save

COPY server.js /opt/server/

CMD ["node", "server.js"]
