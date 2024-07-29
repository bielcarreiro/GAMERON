const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    run: async (client, message, args) => {

        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Esta faltando a permissão **BAN_MEMBROS**').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('Porfavor coloque o id do usuario que você quer desbanir').then(m => m.delete({ timeout: 5000 }));

        let member;

        try {
            member = await client.users.fetch(args[0])
        } catch (e) {
            console.log(e)
            return message.channel.send('Não e um usuario valido!').then(m => m.delete({ timeout: 5000 }));
        }

        const reason = args[1] ? args.slice(1).join(' ') : 'sem razão';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        message.guild.fetchBans().then( bans => {

            const user = bans.find(ban => ban.user.id === member.id );

            if (user) {
                embed.setTitle(`Usuario desbanido com sucesso! ${user.user.tag}`)
                    .setColor('#00ff00')
                    .addField('Usuario ID', user.user.id, true)
                    .addField('Tag do usuario', user.user.tag, true)
                    .addField('Motivo do desbanimento', reason)
                message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
            } else {
                embed.setTitle(`Usuario ${member.tag} não foi banido!`)
                    .setColor('#ff0000')
                message.channel.send(embed)
            }

        }).catch(e => {
            console.log(e)
            message.channel.send('Ocorreu um erro')
        });

    }
} 