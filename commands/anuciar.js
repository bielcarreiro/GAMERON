const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


let borboleta = args.join(' ')    
 
 let girasol = new Discord.MessageEmbed()
 .setColor('RED') 
 .setDescription(`  **|**  ${message.author} Coloque algo para anunciar`) 

if(!args[0]) return message.channel.send(borboleta);



 const trouxa = new Discord.MessageEmbed()
 .setTitle (`<a:sirene:762035747229663272> Novo Anuncio <a:sirene:762035747229663272>`)
 .setColor('BLUE') 
 .setDescription(`Novo anuncio de ${message.author}\nEle anunciou: \n**${girasol}**`)

message.channel.send(trouxa)

};