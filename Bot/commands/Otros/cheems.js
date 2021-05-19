const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.on('message', (message) => {
    if (message.content.startsWith('c')) {
        message.channel.send('Cheems')
    }
});


console.log('cheems');
client.login(token);