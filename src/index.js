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
    // let word = msg.text.includes("git")
    // console.log(word);
    const wordex = (msg.text.replace(' ', '+'))
    console.log(wordex);
    if (wordex) {

        // var a = nightmare
        //     // .goto(`https://stackoverflow.com/questions/tagged/${msg.text}`)
        //     .goto(`https://stackoverflow.com/search?q=${wordex}`)
        //     .wait('.s-post-summary--content-excerpt')
        //     // .evaluate(() => document.querySelector('.mb24').innerText)
        //     .evaluate(() => document.querySelector('.s-post-summary--content-excerpt').innerText)
        //     .then(
        //         (res) => {

        //             bot.sendMessage(chatId, `HI ${msg.chat.first_name} for you question ${msg.text}  relavent question on stackoverflow is : ${res}`);
                    
        //         }

        //         // console.log

        //     )
        //     .catch(error => {
        //         console.log(error);
        //     })
            // var b = nightmare.goto(`https://duckduckgo.com/?q=${wordex}&t=h_&ia=web`)
            // .wait('.js-about-item-abstr')
            // .evaluate(() => document.querySelector('.js-about-item-abstr').innerText)
            // .then(
            //     (res) => {
            //         console.log("res2")

            //         bot.sendMessage(chatId, `HI ${msg.chat.first_name} for you question ${msg.text}  relavent answer is : ${res}`);
                    
            //     }

            // )
            // .catch(error => {
            //     console.log(error);
            // })
            var b = nightmare.goto(`https://duckduckgo.com/?q=${wordex}&t=h_&ia=web`)
            .wait('.js-about-item-abstr')
            .evaluate(() => document.querySelector('.OgdwYG6KE2qthn9XQWFC').innerText)
            .then(
                (res) => {
                    console.log("res2")

                    bot.sendMessage(chatId, `HI ${msg.chat.first_name} your relavent answer is : ${res}`);
                    
                }

            )
            .catch(error => {
                console.log(error);
            })



    }

});