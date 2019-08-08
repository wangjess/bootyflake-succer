const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

const userAction = async () => {
    console.log('Getting dad joke');
    const response = await fetch('https://icanhazdadjoke.com/');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    message.reply('myJson');
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
