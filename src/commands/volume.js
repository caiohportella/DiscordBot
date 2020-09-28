const execute = (bot, message, args) =>
{
    const queue = bot.queues.get(message.guild.id);

    if(!queue)
    {
        return message.reply("não existe áudio reproduzindo");
    }
    const volume = Number(args.join(" "));
    if(isNaN(volume) || volume < 0 || volume > 10)
    {
        return message.reply("o volume deve ser um valor entre 0 e 10");
    }
    queue.dispatcher.setVolume(volume/10);
    queue.volume = volume;
    bot.queues.set(message.guild.id, queue);
};
module.exports = {
    name: "vol",
    description: "ajusta o volume do áudio numa escala de 0 a 10",
    args: true,
    usage: "",
    execute,
};