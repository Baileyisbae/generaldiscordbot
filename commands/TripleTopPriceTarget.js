const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pett',
    description: 'Performance Expectation Calculator : Triple Top Price Target',
    args: true,
    usage: '<high price of the peaks> <lowest price of the valleys> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[1]) - parseInt(args[0])) * (.58);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Triple Top Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Lowest Price of the Valleys: ${args[0]}\nHigh Price of the Peaks: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};