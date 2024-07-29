const Discord = require('discord.js')
const db = require('quick.db')

module.exports = { 
  name:"afk",
  run: async (client, message, args) => {
  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
const embed = new Discord.MessageEmbed().setColor(0xffffff)
    
  if (!afk) {
    embed.setDescription(`**${message.author.tag}** entrou em AFK. \nPara sua conveniência o afk será desativado quando você falar no chat`)
    embed.setFooter(`Motivo: ${args.join(" ") ? args.join(" ") : "AFK"}`)
    status.set(message.author.id, args.join(" ") || `AFK`);
  } else {
   
    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
  }
}