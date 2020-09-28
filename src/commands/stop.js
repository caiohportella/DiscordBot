const execute = (bot, message, args) =>
{
    const queue = bot.queues.get(message.guild.id);

    if(!queue)
    {
        return message.reply("não existe áudio reproduzindo");
    }
    queue.songs = [];
    bot.queues.set(message.guild.id, queue);
    queue.dispatcher.end();
};
module.exports = {
    name: "stop",
    description: "para o áudio em reprodução e limpa a fila",
    args: true,
    usage: "",
    execute,
};