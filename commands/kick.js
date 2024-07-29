var Discord = require('discord.js');
 
exports.run = async(bot, msg, args) => {
    if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('| Voce nao tem permissao para utilizar esse comando!');
 
    var user = msg.mentions.users.first();
    if(!user) return msg.reply('| Voce tem que mencionar alguem!');
 
    var member;
 
    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }
 
    if(!member) return msg.reply('Este usuario nao está no servidor!');
    if(member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Voce nao pode kikar essa pessoa');
 
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('| Voce tem que me dar um motivo');
 
    var channel = msg.guild.channels.cache.find(c => c.id === 'Coloque o id do chat');
 
    var log = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Usuario Kikado')
    .addField('Usuario:', user, true)
    .addField('Por:', msg.author, true)
    .addField('Motivo:', reason)
    channel.send(log);
 
    var embed = new Discord.MessageEmbed()
    .setTitle('| Voce foi kikado! **Motivo**')
    .setDescription(reason);
 
    try {
        await user.send(embed);
    } catch(err) {
        console.warn(err);
    }
 
    member.kick(reason);
 
    msg.channel.send(`**${user}** Foi kikado por **${msg.author}**!`);
}