const Discord = require("discord.js");

const execute = async(bot, message, args) =>
{
    if((message.member.roles.cache.some(role => role.name === "The Satanist")) || (message.member.roles.cache.some(role => role.name === "Daimonos")))
    {
        let kickMember = message.mentions.members.first();
        //console.log(kickMember);

        let kickReason = message.content.split(" ").slice(2);
        //console.log(kickReason);

        let kickMotive = "";

        let guild = bot.guilds.cache.get(message.member.guild.id);
        let channel = bot.channels.cache.get("756464596222476319"); //ID canal kick

        for(var i in kickReason)
        {
            kickMotive = kickMotive + kickReason[i] +" ";
        }
        //console.log(kickMotive);

        if(kickMotive == 0)
        {
            kickMotive = "Nenhum especificado";
        }

        if(message.author.bot)
        {
            return;
        }
    
        // if(!kickMember)
        // {
        //     return message.reply("quem vai sofrer da ira de Behemoth?");
        // }

        let kickEmbed = new Discord.MessageEmbed()
        .setColor("#0f4c81")
        .setAuthor(kickMember.user.tag, kickMember.user.displayAvatarURL())
        .setTitle(`${kickMember.user.username} foi kickado do ${guild.name}.`)
        .setImage("https://i0.wp.com/www.toiletovhell.com/wp-content/uploads/2018/08/giphy-3.gif?ssl=1")
        .setDescription(`Motivo: `+ kickMotive)
        .setFooter(`kickado por ${message.author.username}`)
        .setTimestamp();

        await channel.send(kickEmbed);
        kickMember.kick(kickReason).catch(error => console.log(error));
    }
    else
    {
        return message.reply("você não tem permissão para usar esse comando");
    }
}

module.exports = {
    name: "kick",
    description: "kicka um membro do servidor",
    args: true,
    guildOnly: true,
    usage: "<@membro> <motivo>",
    execute,
};