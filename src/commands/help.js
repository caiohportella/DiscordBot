const {prefix} = require("../config.json");

const execute = (bot, msg, args) => {
    let string = "**===== AJUDA =====**\n\n";

    bot.commands.forEach((command) => {
      if (command.description) {
        string += `**${prefix}${command.name}**: ${command.description}\n`;
      }
    });
    return msg.channel.send(string);
  };
  
  module.exports = {
    name: "help",
    description: "Exibe a ajuda de todos os comandos",
    execute,
  };