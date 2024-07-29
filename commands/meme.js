const Discord = require("discord.js");

module.exports = {
    name: "cantada",
    aliases: ["cantada"],
    description: "Comando para ver uma **Cantada** pra morena.",
    usage: 'g!cantada',
    category: 'diversao',
  run: async (client, message, args) => {
    var lista = [
       'https://i.pinimg.com/originals/72/7c/b3/727cb3efebbb91aa132950ab3103abd5.jpg',
       'https://i.pinimg.com/originals/2e/aa/c6/2eaac65d23023552f5c3e9a1be33d3cb.jpg',
       'https://cdn.vivotech.com.br/vivo-tech/wp-content/uploads/2019/02/03221159/memes-volta-aulas-2.png',
       'https://th.bing.com/th/id/OIP.6Px_a_JktowjffbXvKzeZwHaEK?pid=ImgDet&rs=1',
       'https://www.selecoes.com.br/wp-content/uploads/2020/12/Enfim-Hipocrisia-1024x793.jpg',
       'https://i.pinimg.com/736x/38/65/f0/3865f00123054b015ae874887529367a.jpg',
       'https://www.hojeemdia.com.br/polopoly_fs/1.778499!/image/image.PNG_gen/derivatives/landscape_653/image.PNG',
       'https://i.pinimg.com/originals/62/63/8f/62638f86ea7e4f92b822a810db8262f2.jpg',
       'https://yokaipop.com.br/wp-content/uploads/2017/06/7bf6a01247dd7aa5fe37965af1f30564caee438e_hq.jpg',
       'https://i.pinimg.com/originals/01/17/6e/01176e6ebc43c64d0a485bcc880784a2.jpg',
       'https://th.bing.com/th/id/Rec88c4ad5660dd928055ed22c2a8121d?rik=n2oY%2bWJpDOImAQ&riu=http%3a%2f%2fbr.jetss.com%2fwp-content%2fuploads%2f2015%2f11%2f61.jpg&ehk=n020puefxu9%2br3DZzezUzG1ElBIfSstE%2fTscl1uoG9w%3d&risl=&pid=ImgRaw',
       'https://th.bing.com/th/id/Rb298dda09202c7afbf0dd606597d234c?rik=FJ9LKMOnSNrrxQ&riu=http%3a%2f%2fhumorg.weebly.com%2fuploads%2f1%2f2%2f4%2f6%2f12462930%2f1845678_orig.jpg&ehk=gHAfaITdOlwjLwTx4WReO9jQ2evgsB4kvmdF0evEU5Q%3d&risl=&pid=ImgRaw',
       'https://i.pinimg.com/736x/d9/29/81/d929816ece08362126364c844f189027.jpg',
       'https://statig1.akamaized.net/bancodeimagens/7x/bz/n7/7xbzn71vqaqu5aq29yglhs4co.jpg'
      ];

    var aleatorio = lista[Math.floor(Math.random() * lista.length)];

     const embed = new Discord.MessageEmbed()
        .setTitle(`:rofl:  MEME  :rofl: `)
        .setColor('PURPLE')
        .setDescription('KKKK')
        .setImage(aleatorio)
       message.channel.send(embed);
}
}