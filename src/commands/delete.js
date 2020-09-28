require("discord.js");

const execute = (bot, message) =>
{
    const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
    const amount = args.join(' '); // Amount of messages which should be deleted

    if (!amount)
    {
        message.reply('você tem que me dizer quantas mensagens deletar!\nComo usar esse comando:\n\`${prefix}${commandName} ${command.usage}\`');
    }
    
    if (isNaN(amount))
    {
        return message.reply('um número, por favor!');
    }

    if (amount > 100 || amount < 1)
    {
        return message.reply('só consigo deletar entre 1 a 100 mensagens por comando!');
    }

     message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
    )});
}

module.exports = {
    name: "delete",
    description: "deleta entre 1 a 100 mensagens",
    args: true,
    guildOnly: true,
    usage: "<número de mensagens>",
    execute,
};