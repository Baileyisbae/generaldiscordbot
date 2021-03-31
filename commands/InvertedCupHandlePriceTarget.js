const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'peich',
    description: 'Performance Expectation Calculator : Inverted Cup & Handle Price Target',
    args: true,
    usage: '<breakout price> <handle height> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) - (parseInt(args[1]) * (.47));
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Inverted Cup & Handle Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Breakout Price: ${args[0]}\nHandle Height: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};