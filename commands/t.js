const { Client, Message, Messageembed } = require("discord.js");
const translate = require("@iamtraction/google-translate");
module.exports = {
    name: "translate",
    /**
     * @param {Client} Client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const query = args.join(" ");
        if (!query) return message.reply("Especifique um texto para traduzir");

        const translated = await translate(query, { to: 'pt' });
        message.channel.send(translated.text);
    },
};