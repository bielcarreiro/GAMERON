const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {
        let user = message.author;
        let timeout = 86400000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`**Você ja coletou seu money diario, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {
            let amount = Math.floor(Math.random() * 4000) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            message.channel.send(`**${user} Você recebeu ${amount} em seu money diario!**`)
        }
    }