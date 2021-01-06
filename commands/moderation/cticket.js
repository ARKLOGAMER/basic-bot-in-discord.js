const Discord = require('discord.js')


module.exports = {
    name: 'cticket',
    description: "ends the ticket",
    category: "TICKET",
    execute(client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only a moderator can end a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channnel.delete()
    }

}