const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/4WdIG8i.gif',
  'https://imgur.com/T9gfA0k.gif',
  'https://imgur.com/QRSlIq7.gif',
  'https://imgur.com/infMYGV.gif',
  'https://imgur.com/sXOVber.gif',
  'https://imgur.com/gLtcCEu.gif',
  'https://imgur.com/NGgnMIZ.gif',
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/NBbhdLN.gif',
  'https://imgur.com/T9gfA0k.gif',
  'https://imgur.com/QRSlIq7.gif',
  'https://imgur.com/infMYGV.gif',
  'https://imgur.com/sXOVber.gif',
  'https://imgur.com/gLtcCEu.gif',
  'https://imgur.com/NGgnMIZ.gif',
  'https://imgur.com/iclUiUN.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('menciona um usuário para voçê beijar!!!');
}

  /*
message.channel.send(${message.author.username} Deu um beijo no ${user.username}! :heart:, {files: [rand]});
 */
  
  let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(':revolving_hearts: Kiss :revolving_hearts:')
        .setColor('#ff0000')
        .setDescription(`${message.author} beijou o ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Deu um beijo :3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}