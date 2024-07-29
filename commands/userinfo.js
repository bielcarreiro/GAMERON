const Discord = require("discord.js")
const moment = require("moment")

module.exports = {
name: "userinfo",
run: async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let member = message.guild.member(user)

const status = {
    online: "Disponivel",
    idle: "Ausente",
    dnd: "Não Pertube",
    offline: "Indisponivel"
  }

const embed = new Discord.MessageEmbed()
.setTitle(`User Info ${user.username}`)
.addField("User", `${user.tag}\n${user.id}`)
.addField(`Criou a Conta em`, `${moment.utc(user.createdAt).format("DD/MM/YYYY")}`)
.addField("Entrou no Server Dia", `${moment.utc(member.joinedAt).format("DD/MM/YYYY")}`)
.addField("Status", `${status[user.presence.status]}`)
message.channel.send(embed)
}
}