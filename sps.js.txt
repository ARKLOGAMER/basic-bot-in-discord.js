const discord = require("discord.js")
const {MessageEmbed} = require('discord.js')
module.exports.run = async (bot, message, args) => {
  const replies = ["rock", "papper", "scissors"]
  const reply = replies[Math.floor(Math.random() * replies.length)]; 
  if(!args.slice(1).join(" ")) return message.channel.send("rock, paper or scissors? mention it -_-")

  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("RPS")
    .addField(`My Answer`, `${reply}`)
    .addField('Your Answer', `${args.slice(1).join(" ")}`)
    .setFooter(`This command was used by this guy here -> ${message.author.tag}`)
    message.channel.send(embed);
}

module.exports.config = {
    name: "rps",
    description: "Rock, Paper & Scissors game.",
    usage: ">>rps",
    accessableby: "Members",
    aliases: ["N/A"]
}