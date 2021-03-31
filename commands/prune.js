module.exports = {
	name: 'prune',
    description: 'Bulk deletes messages. Cannot delete messages older than 2 weeks or more than 100 messages. Bulk deletes in called channel.',
    args: true,
    usage: '~prune',
    execute(message, args) 
    {
        const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
        if (hasPermission){
            if (!args) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
            if (isNaN(args)) return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

            if (args > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
            if (args < 1) return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

            args++;

            message.channel.messages.fetch({ limit: (args) }).then(messages => { // Fetches the messages
            message.channel.bulkDelete(messages)}); // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
        }
        else {
            message.channel.send(`You do not have permission to run this command, ${message.author}!`)
        }
	},
};