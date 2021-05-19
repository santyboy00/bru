module.exports = {
  name: "ping!",
  aliases: [],
  usage: "ping",
  description: "Pong!",
  
  run: async (client, message, args) => {
    message.channel.send('Pong!');
  }
};