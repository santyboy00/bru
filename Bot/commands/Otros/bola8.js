const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token} = require('./config.json');
let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"];
var random = respuesta[Math.floor(Math.random() * respuesta.length)];

client.on('message', (message) => {
    if(message.content.startsWith(`${prefix}bola8`)) {
    message.channel.send(`${random}`);
    }
});

console.log('bola8');
client.login(token);