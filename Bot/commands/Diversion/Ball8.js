module.exports = {
  name: "bola8",
  aliases: [],
  usage: "bola8",
  description: "bola8",
  run: async (client, message, args) => {
  
  if(message.content.startsWith(`d!bola8`)) {
  let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"];
var random = respuesta[Math.floor(Math.random() * respuesta.length)];
  message.channel.send(`${random}`)
  
      }
    }
}    