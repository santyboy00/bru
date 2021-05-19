module.exports = {
    name: "ping",
    aliases: [],
    usage: "myping",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {
const discord = require('discord.js');
     let start = Date.now();
  
  message.channel.send({embed: {description: "Tu ping es de...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("Latencia del Api", Math.round(client.ws.ping) + "ms", true)
    .addField("Latencia del mensage", end - start + "ms", true)
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e))
    
  })

    }
};
