const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Minha lista de comandos de diversão ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '**g!meme**',
            value: `Gera um meme aleatório.`,
            inline: true
        },        
        {
            name: '**g!cantada**',
            value: `Gera uma cantada pra morena :sunglasses:.`,
            inline: true
        },
        {
            name: '**g!kiss (@user) (@user)**',
            value: `Beijar alguém.`,
            inline: true
        },
        {
            name: '**g!ship (@user) (@user)**',
            value: `Shipar você com outra pessoa.`,
            inline: true
        },
        {
            name: '**g!slap (@user)**',
            value: `Dar um tapa em alguém`,
            inline: true
        },
        {
            name: '**g!stonks**',
            value: `Seu avatar com a imagem stonks.`,
            inline: true
        },
        {
            name: '**g!not stonks**',
            value: `Seu avatar com a imagem notstonks.`,
            inline: true
        },
        {
            name: '**g!t**',
            value: `Traduzir algo pra português.`,
            inline: true
        },
        {
            name: '**g!twitter**',
            value: `Criar um twitter.`,
            inline: true
        },
    )
    message.channel.send(embed);
}