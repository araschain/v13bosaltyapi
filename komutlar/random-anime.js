const Discord = require('discord.js');

const randomanime = require("random-anime")

module.exports = {
  calistir: async(client, message, args) => {

    const anime = randomanime.anime();

    const embed = new Discord.MessageEmbed().setImage(anime).setColor("RANDOM");

    message.channel.send({embeds: [embed]});

  },

  name: "random-anime",
  description: "",
  aliases: [],
  usage: "",
  }