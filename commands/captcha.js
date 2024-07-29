const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "capt",
  aliases: ['captcha'],

run: async(client, message, args) => {

let cargo = message.guild.roles.cache.get("847922814068719667")

let array = [
  '123abc',
  '345hdg',
  'dfg435',
  'ofp579',
  '456jgf',
  '345kdf',
  '347fog',
  '094pof',
  '854fjg'
];
let arg = array[Math.floor(Math.random() * array.length)]

let capt = new MessageEmbed()
    .setTitle('Captcha')
    .setDescription(`Digite **${arg}** para ser verificado!`)


let capt_error = new MessageEmbed()
    .setTitle('Captcha')
    .setDescription(`Você não digitou o codigo corretamente`)


message.channel.send(capt).then(msg => {
  message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
  .on("collect", message => {
    let content = message.content;
    if(arg !== content) {
      return message.channel.send(capt_error)
    } else {
      message.member.roles.add(cargo)

      let canal = client.channels.cache.get("851204603902296125")
const embed = new MessageEmbed()
    .setTitle('Captcha')
    .setDescription(`Parabéns ${message.author} você foi verificado(a)! Aproveite o RPG ;)`)

message.channel.send(embed)
    }

  })
})
  }}
