const Botkit = require('botkit');
const express = require('express');
const http = require('http');

const initialize = () => {
  const controller = Botkit.socketbot({});

  const webserver = express();
  const server = http.createServer(webserver);
  server.listen(process.env.SOCKET_PORT || 4000);

  controller.openSocketServer(server);
  controller.startTicking();

  return controller;
};

module.exports = { initialize };
