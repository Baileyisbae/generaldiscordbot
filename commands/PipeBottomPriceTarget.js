const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pepb',
    description: 'Performance Expectation Calculator : Pipe Bottom Price Target',
    args: true,
    usage: '<highest of two price bar highs> <lowest of two price bar lows> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[0]) - parseInt(args[1])) * (.83);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Double Top Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Highest of Two Price Bar Highs: ${args[0]}\nLowest of Two Price Bar Lows: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};