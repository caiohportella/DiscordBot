const Discord = require("discord.js");

const execute = async(bot, message, args) =>
{
    if((message.member.roles.cache.some(role => role.name === "The Satanist")) || (message.member.roles.cache.some(role => role.name === "Daimonos")))
    {
        let banMember = message.mentions.members.first();
        //console.log(banMember);

        let banReason = message.content.split(" ").slice(2);
        //console.log(banReason);

        let banMotive = "";

        for(var i in banReason)
        {
            banMotive = banMotive + banReason[i] +" ";
        }
        //console.log(bMotive);

        if(banMotive.length == 0)
        {
            banMotive = "Nenhum especificado";
        }

        let guild = bot.guilds.cache.get(message.member.guild.id);

        if(message.author.bot)
        {
            return;
        }
    
        // if(!banMember)
        // {
        //     return message.reply("quem vai sofrer da ira de Behemoth?");
        // }

        let banEmbed = new Discord.MessageEmbed()
        .setColor("#660000")
        .setAuthor(banMember.user.tag, banMember.user.displayAvatarURL())
        .setTitle(`Você foi banido do ${guild.name}.`)
        .setImage("https://45.media.tumblr.com/babbb05d0d4a7f85db3cc850d2ada38b/tumblr_mignsqwiee1qd2vhmo1_500.gif")
        .setDescription(`Motivo: `+ banMotive)
        .setTimestamp();

        message.channel.send(`${banMember.user.username} foi banido para o Paraíso.\nMotivo: ${banMotive}`);
        await bot.users.cache.get(`${banMember.user.id}`).send(banEmbed);
        banMember.ban({reason: banMotive}).catch(error => console.log(error));
    }
    else
    {
        return message.reply("você não tem permissão para usar esse comando");
    }
}

module.exports = {
    name: "ban",
    description: "bane um membro do servidor",
    args: true,
    guildOnly: true,
    usage: "<@membro> <motivo>",
    execute,
};