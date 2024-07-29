const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/v9y3cAH.gif',
  'https://i.imgur.com/HYJHoG7.gif',
  'https://i.imgur.com/o5SrT0V.gif',
  'https://i.imgur.com/mT4VjD6.gif',
  'https://i.imgur.com/w66ZqGR.gif'

];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de dar um tapa no** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Slap!')
        .setColor('RANDOM')
        .setDescription(`${message.author} acaba de dar o tapa do seculo no ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Que tapa foi esse')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}