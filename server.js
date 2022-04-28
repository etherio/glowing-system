const { PORT, TELEGRAM_BOT, TELEGRAM_USER } = process.env;

const { default: axios } = require('axios');
const express = require('express');

const app = express();

const report = (text) => axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT}/sendMessage`, {
  chat_id: TELEGRAM_USER,
  text,
  reply_markup: 'markdown',
}).catch((err) => null);

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
  report('server is up and running on port: `' + PORT + '`');
});

process.on('SIGTERM', () => {
  report('server recieved signal `SIGTERM`');
});
