/*
 if(isValidCommand(message, "kick")){
     var member = message.mentions.members.first();
     member.kick().then(member => {
         message.channel.send(member.displayName +" foi mandado de volta ao Paraíso.");
     }).catch(() => {
        message.channel.send("Sem permissão.");
     });
 }

// const isValidCommand = (message, commandName) => message.content.toLowerCase().startsWith(prefix + commandName);

const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
​
const user = message.mentions.users.first(); // returns the user object if an user mention exists
const banReason = args.slice(1).join(' '); // Reason of the ban (Everything behind the mention)
​
// Check if an user mention exists in this message
if (!user) {
try {
// Check if a valid userID has been entered instead of a Discord user mention
if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
// If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
user = message.guild.members.get(args.slice(0, 1).join(' '));
user = user.user;
} catch (error) {
return message.reply('Couldn\' get a Discord user with this userID!');
}
}
if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you the bot has not sufficient permissions!'); // Check if the user is bannable with the bot's permissions
​
await message.guild.ban(user) // Bans the user
​
const Discord = require('discord.js'); // We need Discord for our next RichEmbeds
const banConfirmationEmbed = new Discord.RichEmbed()
.setColor('RED')
.setDescription(`✅ ${user.tag} has been successfully banned!`);
message.channel.send({
embed: banConfirmationEmbed
}); // Sends a confirmation embed that the user has been successfully banned
​
​
const modlogChannelID = ''; // Discord channel ID where you want to have logged the details about the ban
if (modlogChannelID.length !== 0) {
if (!client.channels.get(modlogChannelID )) return undefined; // Check if the modlogChannelID is a real Discord server channel that really exists
​
const banConfirmationEmbedModlog = new Discord.RichEmbed()
.setAuthor(`Banned by **${msg.author.username}#${msg.author.discriminator}**`, msg.author.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.setColor('RED')
.setTimestamp()
.setDescription(`**Action**: Ban
**User**: ${user.username}#${user.discriminator} (${user.id})
**Reason**: ${reason}`);
client.channels.get(modlogChannelID).send({
embed: banConfirmationEmbedModlog
}); // Sends the RichEmbed in the modlogchannel
}


const kUser = message.mentions.users.first();
    
            if(kuser)
            {
                const kMember = message.guild.member(kUser);
                let kReason = args[2].join(" ");
                if(kMember)
                {
                    kMember.kick(kReason)
                    .then(() => {
                        message.reply(`${kUser.username} foi mandado para o Paraíso`);
                    })
                    .catch(error => {
                        message.reply("Não foi possível kickar membro");
                        console.error(error);
                    });
                } else{
                    message.reply("esse usuário ainda não chegou ao Inferno");
                }
            } else{
                message.reply("mencione quem irá sentir a ira de Behemoth!");
            }
        }
        //-------------------BAN MEMBER-------------------//
        else if(message.content.startsWith(`${process.env.PREFIX}ban`))
        {
            const bUser = message.mentions.users.first();
    
            if(bUser)
            {
                const bMember = message.guild.member(bUser);
                let bReason = args[2].join(" ");
                if(bMember)
                {
                    bMember
                    .ban(bReason)
                    .then(() => {
                        message.reply(`${bUser.username} foi banido para o Paraíso`);
                    })
                    .catch(error => {
                        message.reply("Não foi possível banir membro");
                        console.error(error);
                    });
                } else{
                    message.reply("esse usuário ainda não chegou ao Inferno");
                }
            } else{
                message.reply("mencione quem vai sentir a ira de Behemoth!");
            }
        }



bot.on("message", (message) => {
    if(!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);  //Analisa o primeiro argumento após prefixo
    const commandName = message.mentions.users.first(); //Isola primeiro argumento, nome do comando

    try{
        bot.commands.get(commandName).execute(bot, message, args);
    } catch (error){
        console.error(error);
        //return message.reply("não conheço esse comando!");
    }
});

    try{
        bot.commands.get(commandName).run(bot, message, args);
    } catch (error){
        console.error(error);
        return message.reply("não conheço esse comando!");
    }

    try
    {
        const file = require(`./commands/${command}.js`).command.execute(message, args);
        file.run(bot, message, args);
    } catch (error){
        console.log(error);
        message.reply("ainda não conheço esse comando!");
    }

                const kUser = message.mentions.users.first();
        
            if(kUser)
            {
                const kMember = message.guild.member(kUser);
                let kReason = args.slice(1).join(" ");
                if(kMember)
                {
                    kMember.kick(kReason)
                    .then(() => {
                        message.reply(`${kUser.username} foi mandado para o Paraíso por: ${kReason}`);
                    })
                    .catch(error => {
                        message.reply("Não foi possível kickar membro");
                        console.error(error);
                    });
                } 
                else if(!kReason)
                {
                    kReason = "Sem um motivo aparente";
                }
                else
                {
                    message.reply("esse usuário ainda não chegou ao Inferno");
                }
            }
        }
    },
};





    if(kUser)
    {
        const kMember = message.guild.member(kUser);
        let kReason = message.content.split(" ", 2);

        if(kMember)
        {
            kMember.kick(kReason)
            .then(() => {
                message.reply(`${kUser.username} foi mandado para o Paraíso por: ${kReason}`);
            })
            .catch(error => {
                message.reply("Não foi possível kickar membro");
                console.error(error);
            });
        } 
        else if(!kReason)
        {
            kReason = "Sem um motivo aparente";
        }
        else
        {
            message.reply("esse usuário ainda não chegou ao Inferno");
        }
    }



*/