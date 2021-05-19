module.exports = {
	name: "jumbo",
	aliases: ["emoji"],
	usage: "emoji",
  description: "emoji",

  run: async (client, message, args) => {


 const Discord = require ("discord.js");

 

	if(!args[0]) return message.channel.send("debes poner un emoji")

	let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
	if(!emoji) return-message.channel.send("Ese emoji no es valido")

	const embed = new Discord.MessageEmbed()
	
	.setTitle("Emoji")
	.setImage(emoji.url)
	.setColor("RANDOM")

	message.channel.send
(embed)

   }

}