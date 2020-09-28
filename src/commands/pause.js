const execute = (bot, message, args) =>
{
    const queue = bot.queues.get(message.guild.id);

    if(!queue)
    {
        return message.reply("não existe áudio reproduzindo");
    }
    queue.dispatcher.pause();
};

module.exports = {
    name: "pause",
    description: "pausa o áudio em reprodução ou continua fila",
    args: true,
    usage: "",
    execute,
};