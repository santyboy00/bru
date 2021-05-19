const ms = require("ms");
const Discord = require("discord.js");
const db = require("mongodb");

module.exports = {
  name: "stopwatch",
  aliases: [],
  usage: `stopwatch <time> <second / minute / hour / day>`,
  description: "arina",
  run: async (client, message, args) => {
    const input = args[0];
    const input2 = args[1];
    const reply =
      1500 ||
      input2
        .replace(`s` || `second`|| `detik`, 1500)
        .replace(`m` || `minute`|| `menit`, 50000)
        .replace(`h` || `hour`|| `jam`, 3500000)
        .replace(`d` || `day`|| `hari`, 86300000);
    const Ss = reply;
    var remainingTime = input,
      remainingCount = 1,
      status = "⏱️";
    var countdown = await message.channel.send(
      new Discord.MessageEmbed()
        .addField(
          "Loading-Time",
          `Started! **${remainingTime}${input2 || "s"}** ${status}`
        )
        .setColor("RANDOM")
    );
    let clock = setInterval(() => {
      remainingTime--;
      countdown.edit(
        new Discord.MessageEmbed()
          .addField(
            "Start-Time",
            `**${remainingTime}${input2 || "s"}** remain ${status}`
          )
          .setColor("RANDOM")
      );
      if (remainingTime == 0) {
        status = "⏱️";
        clearInterval(clock);
        countdown.delete();
        message.channel.send(
          new Discord.MessageEmbed()
            .addField(
              "Done-Time",
              `Done **${input}${input2 || "s"}** ${status}`
            )
            .setColor("RANDOM")
        );
      }
    }, Ss);
  }
};