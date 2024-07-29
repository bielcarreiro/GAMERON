exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "602006032931225620"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "831663291326922763",
        "831662783937904680",
        "842836239241707570"
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito.`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(0).catch(console.error);
    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(0).catch(console.error);
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
  }
};