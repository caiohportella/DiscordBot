const Discord = require("discord.js");
const {prefix, token, ID_Servidor} = require("./config.json");
const fs = require("fs");

const bot = new Discord.Client();  //"inicia" discord.js

bot.commands = new Discord.Collection();  //Guarda os comandos
bot.queues = new Map();  //Evitar conflito entre informações

const commandFiles = fs
    .readdirSync(__dirname +"\\commands\\")
    .filter(filename => filename.endsWith(".js"));  //Lê os comandos

for(var filename of commandFiles){
    const command = require(__dirname +`\\commands\\${filename}`);  //Popula coleção de argumentos
    bot.commands.set(command.name, command);  //Define comando
}

bot.on("ready", () => {
    let activities = [
        `${prefix}help: comandos`,
        `${bot.users.cache.size - 1} usuários`  
    ],

    i = 0;

    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 10000);
    bot.user
    .setStatus("dnd")
    .catch(console.log);
    console.log("Hail Satan, I'm online!");
});

bot.on("message", message => {
    if(!message.content.startsWith(prefix) || message.content.startsWith(`<@!${bot.user.id}`) || message.content.startsWith(`<@${bot.user.id}`) || message.author.bot || message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).split(/ +/);  //Analisa o primeiro argumento após prefixo
    const commandName = args.shift().toLowerCase(); //Isola primeiro argumento, nome do comando

    if(!bot.commands.has(commandName)) return;

    const command = bot.commands.get(commandName);

    try 
    {
        command.execute(bot, message, args);
    } catch (error) {
        console.error(error);
    }

    if(command.guildOnly && message.channel.type === "dm")
    {
        return message.reply("Comandos não podem ser executados no direct!");
    }

    if(command.args && !args.length)
    {
        let reply = " ";
        if(command.usage)
        {
            reply += `\nTente utilizar esse comando escrevendo:\n\`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
});

//-------------------WELCOME BANNER-------------------//
bot.on("guildMemberAdd", async(member) => {
    let guild = bot.guilds.cache.get(ID_Servidor);
    let channel = bot.channels.cache.get("755875403880595518"); //ID canal welcome
    
    let embed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${member.user.username} foi banhado no Styx!`)
    .setImage("https://data.whicdn.com/images/248971647/original.gif")
    .setDescription(`Bem vindo ao ${guild.name}, ${member.user}. Hail Satan!`)
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter("ID do usuário: "+ member.user.id)
    .setTimestamp();

    await channel.send(embed);
});
//-------------------WELCOME BANNER-------------------//

//-------------------AUTOROLE ASSIGNMENT-------------------//
bot.on("guildMemberAdd", member => {
    member.roles.add(member.guild.roles.cache.find(role => role.name === "The Seed ov I"));
});
//-------------------AUTOROLE ASSIGNMENT-------------------//

bot.login(token);  //Loga bot no servidor