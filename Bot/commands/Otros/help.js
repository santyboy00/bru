const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token} = require("./config.json");

client.on('ready', () => {
    console.log('comando d!help ejecutandose con exito');
});

client.on('message', (message) => {
   if(message.content === (`${prefix}help`)) {
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Hola, estos son mis comandos')
        .addField('d!help' + ' = este comando')
        .addField('d!flood = haz flood con el bot en un canal')
        .addField('d!bola8 = esta lgo bug pero funciona')
        .addField('d!avatar = convierte tu foto de perfil en imagen para descargar')
        .addField('por ahora estos son mis unicos comandos pero se agregaran mas');
        
        message.channel.send(embed)
        
        
    }
});    

client.login(token);