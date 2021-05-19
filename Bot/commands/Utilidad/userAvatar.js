module.exports = {
    name: "avatar",
    aliases: [],
    usage: "avatar",
    description: "avatar del usuario",
    run: async (client, message, args) => {
        
        const Discord = require('discord.js');
        if (message.content.startsWith("d!avatar")) {
        const user = message.mentions.users.first() || message.author
        const em = new Discord.MessageEmbed()
        .setImage(user.avatarURL())
        message.channel.send(em)
    }
  } 
}