module.exports = {
  name: "fortnite",
  aliases: [],
  usage: "fortnite-text <text>",
  description: "escribe con letra de fortnite",
  run: async (client, message, args) => {
    
    const {MessageAttachment} = require("discord.js")


 let texto = args.slice(1).join(" ")

 if(!texto) return message.channel.send("Necesitas poner una letra al azar y despues el texto")

 let imagen = new MessageAttachment(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=0804FE&text=${texto}`, "fortnite.png") // Creamos la imagen

  message.channel.send(imagen)


    
  }
}