const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    if(msg.text=="/start"){
    
        bot.sendMessage(chatId, `HI ${msg.chat.first_name}  Enter Site you want to search 
        1.Stack Overflow
        2.W3c School
        3.Google Search  `);
    }
        


});