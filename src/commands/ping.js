const execute = (bot, message) => {
    return message.reply("pong!");
}

module.exports = {
    name: "ping",
    description: "Você escreve ping, eu respondo pong!",
    execute,
};