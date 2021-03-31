module.exports = {
	name: 'say',
	description: 'Make the bot say something in the called channel.',
	args: true,
	execute(message, args) {
		const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
		if (hasPermission){
			const response = args.join(' ');
			message.delete();
			message.channel.send(response);
		}
		else {
			message.channel.send(`You do not have permission to run this command, ${message.author}!`)
		}
	},
};