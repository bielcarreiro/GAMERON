const Discord = require("discord.js");
const math = require("mathjs");

module.exports = {
    nombre: 'calcular',
    alias: [`cal`],
    descripcion: "command to make calculations",
    run: async (client, message, args) => {

        message.delete()

        if(!args[0]) return message.channel.send(`Porfavor me de uma equação`)

        let resp;
        try {
            resp = math.evaluate(args.join(" ").replace(`x`,`*`))
        } catch (e) {
            return message.channel.send('Porfavor me de uma equação **VÁLIDA**')
        } 
        const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`CALCULADORA`)
        .addField(`Equação`, `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField(`Reply`, `\`\`\`css\n${resp}\`\`\``)
        message.channel.send(embed)

    }
}
