// So can use fetch for API calls
const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();
const forbiddenWords = ['fuck', 'bitch', 'ass', 'dumbass', 'cunt']
const detectBadWords = true; // Toggle me for bad word screening!

// Needed for getProductivityQuote
var fs = require("fs");

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
    else if (message.content === '!encourageme') {
        getProductivityQuote();
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
const getProductivityQuote = () => {
    console.log('Getting productive quote!');
    var text = fs.readFileSync("./productivity_quotes.txt");
    var textByLine = text.split("\n");
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
