const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 letras`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "829887404801392681");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#00ffee")
    .addField("Autor:", message.author)
    .addField("Nova ideia", content)
    .setFooter("ID do membro: " + message.author.id)
    .setTimestamp()
    );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["<a:Sim:841459062789111818>", "<a:No:841459062687793172>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}