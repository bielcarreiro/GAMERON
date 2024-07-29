const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    
    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`);
    if(member == null) member = 0;

    let bank = db.fetch(`bank_${message.guild.id}_${message.author.id}`);
    if(bank == null) bank = 0;

    let embed2 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`Coloque o valor do deposito!`);
  
    if (!args[0]) {
        return message.channel.send(`${message.author}`, embed2);
    };
    let embed4 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`Você não possui Money suficiente para realizar o deposito!`);

    if (member < args[0]) {
        return message.channel.send(`${message.author}`, embed4);
    };
    let embed5 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`Você tem que colocar um valor maior que **0** para realizar o deposito!`);

    if(args[0] < 0) {
        return message.channel.send(`${message.author}`, embed5);
    };
    let embed6 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`Você tem que colocar um valor numerico para realizar o deposito!`);

    if (isNaN(args[0])){
        return message.channel.send(`${message.author}`, embed6);
    };
    let embed7 = new Discord.MessageEmbed()
    .setTitle("Depósito")
    .setColor("#000000")
    .setDescription(`Você depositou no **Banco** um valor de **R$${args[0]}**!`);

    message.channel.send(`${message.author}`, embed7);
    db.add(`bank_${message.guild.id}_${message.author.id}`, args[0]);
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0]);
}
