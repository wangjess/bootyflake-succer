// So can use fetch goddamnit
const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }
    else if (message.content === '!dadjoke') {
        message.reply('Here\'s a dad joke...')
        var dadJoke = await userAction();
        message.reply(dadJoke);
    }
});

const userAction = async () => {
    console.log('Getting dad joke');
    try {
        console.log("try to make call");
        const response = await fetch('https://icanhazdadjoke.com/',
        {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            },
        });
        const myJson = await response.json();
        // do something with myJson
        console.log(myJson);
        console.log(myJson["joke"])
        return myJson["joke"];
    }
    catch {
        console.log("fuck me up the bumhole");
    }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
