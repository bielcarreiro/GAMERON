const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Minha lista de comandos Gerais ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '**g!afk**',
            value: `Comando Para Não Pertube.`,
            inline: true
        },
        {
            name: '**g!avatar**',
            value: `Comando Para Ver O Avatar de alguém.`,
            inline: true
        },
        {
            name: '**g!cal**',
            value: `Comando Para Cacular Expressão.`,
            inline: true
        },
        {
            name: '**g!clima (cidade)**',
            value: `Ver o clima de sua Cidade.`,
            inline: true
        },
        {
            name: '**g!s**',
            value: `Mandar um sugestão em <#829887404801392681>.`,
            inline: true
        },
        {
            name: '**g!serverinfo**',
            value: `Ver o Info Do Server.`,
            inline: true
        },
        {
            name: '**g!contador**',
            value: `Ver quantos membros Temos :).`,
            inline: true
        },
        {
            name: '**g!uptime**',
            value: `Ver quanto tempo estou oline.`,
            inline: true
        },
        {
            name: '**g!say**',
            value: `Mandar mensagem por mim.`,
            inline: true
        },
    )
    message.channel.send(embed);
}