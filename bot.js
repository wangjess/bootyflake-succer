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
              'Content-Type': 'text/plain;charset=UTF-8'
            },
        }
        );
    }
    catch {
        console.log("fuck me up the bumhole");
    }
    const text = await response; //extract JSON from the http response
    // do something with myJson
    console.log(text);
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
