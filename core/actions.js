const sayHello = (controller, channel) => (bot, message) => bot.reply(message, `You sent a message via ${channel}`);

module.exports = { sayHello };
