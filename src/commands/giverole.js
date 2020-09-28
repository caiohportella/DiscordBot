require("discord.js");

const execute = (bot, message, args) =>
{
    if(!message.member.roles.cache.some(role => role.name === "The Satanist") || !message.member.roles.cache.some(role => role.name === "Daimonos")) return;

    const user = message.mentions.members.first();
    const givenRole = message.guild.roles.find(r => r.name === args.slice(1).split(" "));
    let roleName = "";

    for(var i in givenRole)
    {
        roleName = roleName + givenRole[i] +" ";
    }
    console.log(roleName);

    if(!user)
    {
        return message.reply("Especifique um usuário para o cargo");
    }

    if(!givenRole)
    {
        return message.reply("Especifique um cargo");
    }

    user.roles.add(member.guild.roles.cache.find(givenRole.id));
    message.channel.send(`**${user}** agora pertence ao cargo '${givenRole}'`);
}

module.exports = {
    name: "giverole",
    description: "atribui um cargo a um membro",
    args: true,
    guildOnly: true,
    usage: "<@membro> <cargo>",
    execute,
};