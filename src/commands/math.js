const Discord = require("discord.js");
const math = require("mathjs");

const execute = async(bot, message, args) =>
{
    if(!args[0])
    {
        return;
    }

    let resp;

    try
    {
        resp = math.evaluate(args.join(" "));
    } catch(e){
        return message.channel.send("Insira uma pergunta válida");
    }

    const embed = new Discord.MessageEmbed()
    .setColor("#0000ff")
    .setTitle("Calculadora")
    .addField("Pergunta", `\`\`\`css\n${args.join(" ")}\`\`\``)
    .addField("Resposta", `\`\`\`css\n${resp}\`\`\``)

    message.channel.send(embed);
}

module.exports = {
    name: "math",
    description: "resolve uma questão de matemática",
    args: true,
    guildOnly: true,
    usage: "<problema>",
    execute,
};