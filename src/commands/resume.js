const execute = (bot, message, args) =>
{
    const queue = bot.queues.get(message.guild.id);

    if(!queue)
    {
        return message.reply("não existe áudio reproduzindo");
    }
    queue.dispatcher.resume();
};


module.exports = {
    name: "resume",
    description: "continua o áudio em reprodução após pausar",
    args: true,
    usage: "",
    execute,
};