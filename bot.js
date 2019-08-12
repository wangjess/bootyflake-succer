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
    setInterval(funnyMessage, 300);
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
        message.reply(getProductivityQuote());
    }
    else if (detectBadWords === true ) {
        for (var i = 0; i < forbiddenWords.length; i++) {
            if (message.content.toLowerCase().includes(forbiddenWords[i])) {
                if (message.author.id === client.user.id) return;
                message.reply('Stop cursing or I\'m going to suck your bootyflakes!');
                // message.delete();
                break;
            }
        }
    }
});

// Function that gives you a dad joke
const getDadJoke = async () => {
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
// Works by reading all the lines of a file into array, randomly pulls quote from the array
const getProductivityQuote = () => {
    console.log('Getting productive quote!');
    var text = fs.readFileSync("./productivity_quotes.txt").toString('utf-8');
    var textByLine = text.split("\n");
    var item = textByLine[Math.floor(Math.random()*textByLine.length)];
    return item;
}

// Function that sends funny check-in message
const funnyMessage = () => {
    message.send("Are you spending your time the way you really want to?....");
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
