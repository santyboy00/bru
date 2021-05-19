module.exports = {
  name: "mute",
  aliases: [],
  usage: "d!mute",
  description: "mutea",
  run: async (client, message, args) => {
const Discord = require('discord.js');
if(message.content.startsWith('d!mute')) { //Definimos el comando.
const db = require("megadb") //Definimos megadb.
let db_muterole = new db.crearDB("canal_rolemute"); //Obtenemos la db.

let permiso = message.member.hasPermission("MANAGE_GUILD");
let mencionado = message.mentions.members.first();
let razon = args.slice(1).join(' ');

if(!permiso) return message.reply("No tienes los permisos necesarios. \n`Gestionar_Servidor`");
if(!mencionado) return message.reply('Especifica a un miembro.');
if(!razon) return message.channel.send('Especifica el motivo.');
  
if(!db_muterole.tiene(message.guild.id)) return message.channel.send("En este servidor no esta el rol mute Establecido, Uso: **setmuterole [@rol]**") //Aquí vemos si tienen el rol mute establecido, por eso es importante que vean la parte del setmuterole en mi perfil.

let rol = await
db_muterole.obtener(message.guild.id) //Definimos el rol

if(mencionado.roles.cache.has(rol)) return message.channel.send("Este miembro ya esta muteado.") //aquí veremos si el usuario ya está muteado, si el usuario está muteado se enviara este mensaje y si no se enviara el Embed directamente

mencionado.roles.add(rol)
  
const embedmute = new Discord.MessageEmbed() //creamos un Embed.
.setTitle(`Modslogs | Mute`)
.addField(`Moderator:`, `${message.author.username}`)
.addField(`Miembro:`, `${mencionado}`)
.addField(`Razon:`, `${razon}`)
message.channel.send(embedmute); //enviamos
  
}//Cerramos
    
    
  }
}