const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pept',
    description: 'Performance Expectation Calculator : Pipe Top Price Target',
    args: true,
    usage: '<highest of two price bar highs> <lowest of two price bar lows> <current price>',
    execute(message, args) 
    {
        if (args.length < 4) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[1]) - parseInt(args[2])) * (.70);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[3])) / (parseInt(args[3])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Pipe Top Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Lowest of Two Price Bar Lows: ${args[0]}\nHighest of Two Price Bar Highs: ${args[1]}\nLowest of Two Price Bar Lows: ${args[2]}\nCurrent Price: ${args[3]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};