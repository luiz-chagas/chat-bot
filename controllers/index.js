const twilioConfig = require('./twilio');
const webConfig = require('./webserver');
const { actions } = require('../core');

const twilioBot = twilioConfig.bot;
const twilioController = twilioConfig.controller;

const setupTwilio = () => {
  twilioController.createWebhookEndpoints(webConfig.server, twilioBot);

  twilioController.hears(['.*'], 'message_received', actions.sayHello(twilioController, 'Twilio'));
};

const setupWebsocket = () => {
  const webController = webConfig.initialize();

  webController.hears(['.*'], 'message_received', actions.sayHello(webController, 'Socket'));
};

const initialize = () => {
  setupTwilio();
  setupWebsocket();
};

module.exports = { initialize };
