const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log('I am ready!');
    console.log('hello');
    await userAction();
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

const userAction = async () => {
    console.log('Getting dad joke');
    try {
        const response = await fetch('http://icanhazdadjoke.com/', 
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
          }
        );
    }
    catch {
        console.log("fuck me up the bumhole");
    }
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    message.reply('myJson');
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
