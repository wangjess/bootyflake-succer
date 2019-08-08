// So can use fetch goddamnit
const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();
const forbiddenWords = ['fuck', 'bitch', 'asshole', 'dumbass', 'cunt']
const detectBadWords = false; // Toggle me for bad word screening!

client.on('ready', () => {
    console.log('I am ready!');
});

// Will recognize commands to generate various quotes
client.on('message', async message => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }
    else if (message.content === '!dadjoke') {
        var dadJoke = await getDadJoke();
        message.reply(dadJoke);
    }
    else if (message.content === '!happy') {
        message.reply('');
    }
    else if (message.content === '!love') {
        message.reply('');
    }
    // TODO: Add something that will detect common bad words and tell you to stop fucking cursing or Bootyflake Succer will lick your anus
    // bug check that i cant do "ping fuck" or "!dadjoke fuck"
    else if (detectBadWords === true ) {
        for (var i = 0; i < forbiddenWords.length; i++) {
            if (message.content.toLowerCase().includes(forbiddenWords[i])) {
                if (message.author.id === client.user.id) return;
                // message.content contains a forbidden word;
                // delete message, log, etc.
                message.reply('Stop fucking cursing or I\'m going to suck your bootyflakes! I\'m sorry, I shouldn\'t say that...');
                break;
            }
        }
    }
});

// Function that gives you a dad joke
const getDadJoke = async () => {
    console.log('Getting dad joke');
    try {
        const response = await fetch('https://icanhazdadjoke.com/',
        {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            },
        });
        const myJson = await response.json();
        return myJson["joke"];
    }
    catch {
        console.log("FoOk mEh uP DeE BuMh0l3. Caught an error in getDadJoke.");
    }
}

// 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
