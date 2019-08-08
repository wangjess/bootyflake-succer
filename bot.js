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
        await userAction();
    }
});

const userAction = async () => {
    console.log('Getting dad joke');
    const response = await fetch('http://icanhazdadjoke.com/',
    try {
        console.log("try to make call");
        const response = await fetch('http://icanhazdadjoke.com/',
        {
            method: 'GET',
            headers: {
              'Content-Type': 'text/plain'
            },
        });
        const text = await response.text();
        console.log("what does response say..");
        console.log(response);
        console.log("pritned rewsponse");
        // do something with myJson
        console.log(text);
    }
    catch {
        console.log("fuck me up the bumhole");
    }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
