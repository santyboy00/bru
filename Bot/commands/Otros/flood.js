const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token} = require("./config.json");
client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.once('message', (message) => {
  if(message.content.startsWith(`${prefix}flood`)) {
    message.channel.send(`${prefix}flood`);
  }

});



























client.login(token);