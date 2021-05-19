const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.on('message', (message) => {
  if (message.content === (`${prefix}ayuda comandos`)) {
    message.channel.send('Que comando quieres saber? Usa d!help "comando"')
  }
});

client.login(token);