const Botkit = require('botkit');

const controller = Botkit.twiliosmsbot({
  account_sid: process.env.TWILIO_SID,
  auth_token: process.env.TWILIO_AUTH,
  twilio_number: process.env.TWILIO_NUMBER,
});

const bot = controller.spawn({});

module.exports = { controller, bot };
