// required modules
const fs = require('fs');
const Discord = require('discord.js');

// import config file for discord
const { Client, MessageEmbed } = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

// create collection to store commands & events
client.commands = new Discord.Collection();
client.eventHandlers = new Discord.Collection();

// look for bot commands & events
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(`loaded command: ${file}`)
    client.commands.set(command.name, command);
}
const eventHandlerFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventHandlerFiles) {
    const eventHandler = require(`./events/${file}`);
    console.log(`loaded event handler: ${file}`)
    client.eventHandlers.set(eventHandler.name, eventHandler);
}

// Listening for boy ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // fetch messages in verify channel
    const verify = client.channels.cache.find(c => c.name === '⭕-verify');
    
    const fetchedMessages = [verify];
    fetchedMessages.forEach(c => {
        c.messages.fetch({ limit: 10 }).then(collected => console.log(`Fetched ${collected.size} messages in ${c.name}.`)).catch(console.error);
    });
});

// listening for message reaction add
client.on('messageReactionAdd', async (messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    const verify = message.guild.roles.cache.get('728884755562758195'); // Verified

    // Verify a member once they have reacted to the message in the verify channel (gives them the Verified role)
    if (messageReaction.emoji.name === '✅') {
        member.roles.add(verify).catch(console.error);
        
        const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
        try {
	        for (const reaction of userReactions.values()) {
		        await reaction.users.remove(user.id);
	        }
        } catch (error) {
	        console.error('Failed to remove reactions.');
        }
    }
});

// listening for commands
client.on('message', async message => {
    // if message doesn't start with prefix or from bot, ignore
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    // if command is not a valid command, ignore
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    // if command has arguments but provided arguments is empty, reply with problem
    if (command.args && !args.length) 
    {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) 
        {
            reply += `\nThe description of the command is: \`${command.description}\`\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // error handler
    try
    {
        command.execute(message, args);
    }
    catch (error)
    {
        console.error(error);
        message.reply('There was an error trying to execute that command!')
    }
});

// login using secret discord token
client.login(token);