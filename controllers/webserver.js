const Botkit = require('botkit');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const server = express();

server.use((req, res, next) => {
  req.rawBody = '';

  req.on('data', (chunk) => {
    req.rawBody += chunk;
  });

  next();
});
server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const httpServer = http.createServer(server);
httpServer.listen(process.env.SERVER_PORT || 3000);

server.get('/', (req, res) => {
  res.send('Server is running');
});

const initialize = () => {
  const controller = Botkit.socketbot({});

  controller.openSocketServer(httpServer);
  controller.startTicking();

  return controller;
};

module.exports = { initialize, server };
