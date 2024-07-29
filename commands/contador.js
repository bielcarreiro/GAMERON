const Discord = require("discord.js");

module.exports = {
name: "membercount",
aliases: ["memberc"],
run: async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username}, Neste momento temos \`${message.guild.memberCount}\` Membros no servidor.`)
.setFooter(`${message.author.tag} • Informacão`, message.author.displayAvatarURL())
.setTimestamp()
.setColor("BLUE")
message.channel.send(embed)
}
}