const TelegramBot = require('node-telegram-bot-api');

const token = '1281298468:AAGZspDwNIZxZOzC1n9ie7hEmVPvA-gnjPc';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Расскажи о проблеме.');
  });