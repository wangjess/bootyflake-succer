const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    console.log('hello');
});

client.on('message', message, async () => {
    if (message.content === 'ping') {
    	message.reply('pong');
    }
    else if (message.content === '!dadjoke!') {
        await userAction();
    }
});

const userAction = async () => {
    console.log('Getting dad joke');
    try {
        const response = await fetch('http://icanhazdadjoke.com/', 
        {
            method: 'GET',
            headers: {
              'Content-Type': 'text/plain'
            },
        }
        );
        const text = await response;
        // do something with myJson
        console.log(text);
    }
    catch {
        console.log("fuck me up the bumhole");
        message.reply('sorry it aint work');
    }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
