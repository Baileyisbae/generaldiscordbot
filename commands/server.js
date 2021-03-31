module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
		if (hasPermission){
			message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		}
		else {
			message.channel.send(`You do not have permission to run this command, ${message.author}!`)
		}
	},
};