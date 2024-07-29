const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const Discord = require("discord.js");

    exports.run = async (bot, message, args) => {


    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      " Você não tem permissão para isso."
    )
    if (!args[0]) return message.channel.send(`Você não falou um tempo válido.`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        ` ${message.author}, Você não está fazendo corretamente. (g!sorteio tempo + canal + premio)`
      );
     if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      " Você não tem permissão para isso."
    )
    if (isNaN(args[0][0])) return message.channel.send(`Isso não é um número.`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        ` Não encontrei esse canal, no servidor.`
      );
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      " Você não tem permissão para isto."
    )
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Prêmio não especificado!`);
    message.delete();
     let tempo = args[0]
    const { guild } = message
    const icon = guild.iconURL({ dynamic: true, format: "gif", size: 1024});
    let Embed = new MessageEmbed()
      .setTitle(`SORTEIO`)
      .setThumbnail(icon)
      .setDescription(`**Novo sorteio!!** \n\n Sorteio feito por: ${message.author} \n\nPrêmio do sorteio: **${prize}** \n\n🕗| Tempo de sorteio: **${tempo}** \n\n Para participar reaja com: 🎉`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setFooter('O sorteio ira acontecer')
      .setColor(`#6400b6`);
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      " Você não tem permissão para isso."
    )
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        return message.channel.send(
          ` Ninguém reagiu, então não fiz o sorteio. Adeus `
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      message.channel.send(`O ganhador do sorteio foi o(a): ${winner}, Parabéns!!!!`);
    }, ms(args[0]));
};
