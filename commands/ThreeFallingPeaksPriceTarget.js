const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'petfp',
    description: 'Performance Expectation Calculator : Three Falling Peaks Price Target',
    args: true,
    usage: '<low price of 2nd valley> <high price of 1st peak> <low price of 2nd peak> <current price>',
    execute(message, args) 
    {
        if (args.length < 4) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) - (parseInt(args[1]) - parseInt(args[2])) * (2.0/3.0);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[3])) / (parseInt(args[3])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Three Falling Peaks Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Low Price of 2nd Valley: ${args[0]}\nHigh Price of 1st Peak: ${args[1]}\nLow Price of 2nd Peak: ${args[2]}\nCurrent Price: ${args[3]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};