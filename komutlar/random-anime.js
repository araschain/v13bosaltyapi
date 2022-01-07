const Discord = require('discord.js');

const randomanime = require("random-anime")

exports.run = async (client, message, args) => {

    const anime = randomanime.anime();

    const embed = new Discord.MessageEmbed().setImage(anime).setColor("RANDOM");

    message.channel.send({embeds: [embed]});

  }
  
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'random-anime'

};
