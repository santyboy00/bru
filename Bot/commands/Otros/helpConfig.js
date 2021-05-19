const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');
var ayuda = ("Hola, para configurar el archivo config, crea un archivo en la carpeta del bot llamado config.json, despues escribe lo siguiente.Psdt. Ignora el undefined");
var signo = ('{');
var prefixnt = ('"prefix": "!"');
var toke = ('"token": "tu token entrelas comillas"');
var signotwo = ('}');

client.on('message', (message) => {
    if (message.content.startsWith(`${prefix}help config`)) {
        
        const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .addField(ayuda, signo)
        .addField(prefixnt, toke)
        .addField(signotwo);
        message.channel.send(embed)
        
    }
});

console.log('ayuda lista');

client.login(token);