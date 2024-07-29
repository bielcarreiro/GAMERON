const weather = require("weather-js") //npm i weather-js
const Discord = require("discord.js") // npm i discord.js
exports.run = (client, message, args) => {
if (args.length < 1) {
    message.channel.send("Você não falou nenhum local!");
    return 0;
}
weather.find({ search: args.join(' '), degreeType: 'C', lang: 'pt-BR' }, (err, result) => {
    if (err) throw err;
    result = result[0];
    if (!result) {
        message.channel.send("Fale um local que exista, ou coloque o nome corretamente!");
        return;
    }
    var current = result.current;
    var location = result.location;
    const embed = new Discord.MessageEmbed()
    .setThumbnail("https://cdn.pixabay.com/photo/2013/07/12/18/41/weather-153703_960_720.png")
    .setAuthor(`Tempo para: ${location.name}`)
    .setDescription(`${current.skytext}`)
    .addField("Fuso horário:", `UTC${location.timezone >= 0 ? "+" : ""}${location.timezone}`, true)
    .addField("Tipo de grau:", location.degreetype, true)
    .addField('Temperatura:', `${current.temperature}° C`, true)
    .addField('Sensação térmica:', `${current.feelslike}° C`, true)
    .addField('Ventos:', current.winddisplay, true)
    .addField('Umidade:', `${current.humidity}%`, true)
    .setColor(0xff6e00)
    .setTimestamp();
    message.channel.send(embed);
});
}
exports.help = { 
    name: ['clima']
}