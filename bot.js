// So can use fetch for API calls
const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();
const forbiddenWords = ['fuck', 'bitch', 'ass', 'dumbass', 'cunt']
const detectBadWords = true; // Toggle me for bad word screening!

client.on('ready', () => {
    console.log('I am ready!');
    // setInterval(getProductivityQuote, 30000);
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
    else if (message.content === '!productivity') {
        message.reply(getProductivityQuote);
    }
    // bug check that i cant do "ping fuck" or "!dadjoke fuck"
    else if (detectBadWords === true ) {
        for (var i = 0; i < forbiddenWords.length; i++) {
            if (message.content.toLowerCase().includes(forbiddenWords[i])) {
                if (message.author.id === client.user.id) return;
                message.reply('Stop cursing or I\'m going to suck your bootyflakes! Message DELETED!');
                message.delete();
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

// Function that encouragingly nudges you 
const getProductivityQuote = async () => {
    console.log('Getting productive quote!');
    var fs = require("fs");
    fs.readFile("./productivity_quotes.txt", function(text){
        var textByLine = text.split("\n")
    });
    console.log(textByLine);
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
