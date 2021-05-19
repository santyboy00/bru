const Discord = require("discord.js");
const client = new Discord.Client();
const {token} = require('./config.json');

client.on('message', message => {
    if (message.content === (':sisi:')) {
        message.channel.send('<:ranapensando:830172610334556180>')
    }
});

client.login(token);