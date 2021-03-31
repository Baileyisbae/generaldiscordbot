const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'createverify',
    description: 'Creates embeded verify message in the called channel, preferably in the verification channel. The user will have to read the disclaimer then react to the embed with the existing reaction. The user will then be assigned a "verified" role.',
    usage: '~createverify',
    execute(message) 
    {
        const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
		if (hasPermission){
            message.delete();
            const embed = new MessageEmbed()
                .setTitle(`Welcome to ${message.guild.name}!`)
                .setDescription(`Hello! Please read the <#684291941784879115> channel and react to this message to verify you have agreed with them. Then you will automatically recieve your role.\n\nPlease react with the existing checkmark!`)
                .setColor(0x8cd9be);
            message.channel.send(embed).then(m => m.react('✅')).catch(console.error);
        }
        else {
            message.channel.send(`You do not have permission to run this command, ${message.author}!`)
        }
	},
};