1//codigo hola
const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Arina");
});

client.on('message', (message) => {
    if(message.content.endsWith('ola')) {
        message.channel.send('Hola!');
       }
     
     
     });
     
client.login('Nzg2NzIxNzY2Njc1NzEwMDAy.X9KhvQ.-tnd8L7I9NFvmd7JKBso8s4v8uQ');