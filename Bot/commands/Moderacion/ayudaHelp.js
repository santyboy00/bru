module.exports = {
  name: "help",
  aliases: [],
  usage: "d!help",
  description: "```Aun no tengo Comandos nuevos```",
  run: async (client, message, args) => {
  
const Discord = require("discord.js");  
const embed = new Discord.MessageEmbed()
        
        .setColor(`RANDOM`)
        .setTitle('Froggie Bot')
        .setDescription('Hola!, estos son mis comandos')
        .addField('d!emoji = emoji a png!')
        
       .addField('d!bola8 = preguntale a Froggie')
       
      .addField('d!help = obten ayuda sobre los comandos')
      
     .addField('d!avatar = imagen del perfil de un usuario')
     
        .setFooter("pagina 1 de 2, d!help 2");
        
       
  
message.channel.send(embed);
  
  
  }
}