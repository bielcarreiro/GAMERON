const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '**g!ban (@user) (motivo)**',
            value: `Comando para banir alguém,`,
            inline: true
        },
        {
            name: '**g!unban**',
            value: `Comando para desbanir alguém`,
            inline: true
        },
        {
            name: '**g!clear (até 99 msg)**',
            value: `Comando Para Limpar o chat.`,
            inline: true
        },
        {
            name: '**g!anúcio**',
            value: `Anuciar algo.`,
            inline: true
        },
        {
            name: '**g!giveaway**',
            value: `Comando para sorteio.`,
            inline: true
        },
        {
            name: '**g!kick (@user) (motivo))**',
            value: `Comando para expulsar alguém`,
            inline: true
        },
        {
            name: '**g!mute (@user) (motivo)**',
            value: `Comado para mutar alguém`,
            inline: true
        },
        {
            name: '**g!lock**',
            value: `Comando para trancar um chat`,
            inline: true
        },
        {
            name: '**g!unlock**',
            value: `Comando para destrancar um chat.`,
            inline: true
        },
        {
            name: '**g!antiraid**',
            value: `Comando para acabar com uma raid :sunglasses:`,
            inline: true
        },
        {
            name: '**g!warn (@user)**',
            value: `Comando para avisar alguém.`,
            inline: true
        },
    )
    message.channel.send(embed);
}