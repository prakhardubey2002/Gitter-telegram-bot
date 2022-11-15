const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
    // send a message to the chat acknowledging receipt of their message
    let word = msg.text.includes("git")
    console.log(word);
    const wordex = (msg.text.replace(' ', '+'))
    console.log(wordex);
    if (word) {

        var a = nightmare
            // .goto(`https://stackoverflow.com/questions/tagged/${msg.text}`)
            .goto(`https://stackoverflow.com/search?q=${wordex}`)
            .wait('.s-post-summary--content-excerpt')
            // .evaluate(() => document.querySelector('.mb24').innerText)
            .evaluate(() => document.querySelector('.s-post-summary--content-excerpt').innerText)
            .then(
                console.log

            )
            .catch(error => {
                console.log(error);
            })


        if (typeof a === "string") {

            bot.sendMessage(chatId, `HI ${msg.chat.first_name} for you question ${msg.text} opening relavent question on stackoverflow${a}`);
        }


    }

});