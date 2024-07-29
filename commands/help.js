const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Digite um destes Comando Para Visualizar Minhas Mil Maravilhas! ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: 'g!diversão',
            value: `Comandos Feitos Para Sua Diversão :partying_face:`,
            inline: true
        },
        {
            name: 'g!geral',
            value: `Comandos Normais :eyes:`,
            inline: true
        },
        {
            name: 'g!mod',
            value: `Comandos Para Staff :sunglasses:`,
            inline: true 
        },
    )
    message.channel.send(embed);
}