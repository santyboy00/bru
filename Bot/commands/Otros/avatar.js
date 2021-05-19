const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json')

client.on('message', (message) => {
    if (message.content === (`${prefix}avatar`)) {
        const user = message.mentions.users.first() || message.author
        const em = new Discord.MessageEmbed()
        .setImage(user.avatarURL())
        message.channel.send(em)
    };
});

client.login(token);