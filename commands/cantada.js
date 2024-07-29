const Discord = require("discord.js");

module.exports = {
    name: "cantada",
    aliases: ["cantada"],
    description: "Comando para ver uma **Cantada** pra morena.",
    usage: 'g!cantada',
    category: 'diversao',
  run: async (client, message, args) => {
    var lista = [
       'https://www.packdememes.com.br/meme/273eac61a9de17ed83af2dd66e3e3853.jpg',
       'https://www.packdememes.com.br/meme/2287b9e75102af5491a07cefd9c570c6.jpg',
       'https://www.packdememes.com.br/meme/0309be669707759c14aa50aea0c804d6.jpg',
       'https://www.packdememes.com.br/meme/c0a116d61b5acb650eee8143bdd9f73c.jpg',
       'https://www.packdememes.com.br/meme/64ff94a008fc994715454895a7fe61a7.jpg',
       'https://www.packdememes.com.br/meme/0bc85b9162bcb7083ad3668a9b39b4f0.jpg',
       'https://www.packdememes.com.br/meme/1ac81ceeec7b02c74ae9391aafdf748b.jpg',
       'https://www.cantadasnerd.com br/wp-content/uploads/2019/08/cantadas-de-amor-1-300x172.jpg',
       'https://th.bing.com/th/id/R9820e29385124b3ea50df5b7847498b8?rik=%2fYAvi2ZitXKQKg&riu=http%3a%2f%2fwww.cantadasnerd.com.br%2fwp-content%2fuploads%2f2019%2f02%2fcantadas-idiotas-2-300x173.jpg&ehk=4lNVojPOpVzc4GZD3iknOZfavtbUmmyI9RXKdxsV8lI%3d&risl=&pid=ImgRaw',
       'https://th.bing.com/th/id/Rb2d1cc0cbb8d6e437c9fb5abf76a092a?rik=RUGQ0TB68xsPTQ&riu=http%3a%2f%2fwww.cantadasnerd.com.br%2fwp-content%2fuploads%2f2019%2f06%2fcantadas-boas-engra%25C3%25A7adas-300x173.jpg&ehk=onKIOmIZcX1HmJR8o47pSnXTNu4JDAkgs9u2xBUuciA%3d&risl=&pid=ImgRaw',
       'https://th.bing.com/th/id/R3d63cfcf3b768538092ad369b1637420?rik=ZFeXzgCWgQ62Ww&pid=ImgRaw',
       'https://www.packdememes.com.br/meme/a62426aae1299ea8c67097b1f8aa3d76.jpg'
      ];

    var aleatorio = lista[Math.floor(Math.random() * lista.length)];

     const embed = new Discord.MessageEmbed()
        .setTitle(`<:heheboy:832019889681989663> Cantada <:heheboy:832019889681989663> `)
        .setColor('PURPLE')
        .setDescription('UOOOOOO MEU LENÇOL DOBRADO JÁ TA TODO BAGUNÇADO')
        .setImage(aleatorio)
       message.channel.send(embed);
}
}