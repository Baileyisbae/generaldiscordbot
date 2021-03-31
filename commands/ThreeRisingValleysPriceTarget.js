const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'petrv',
    description: 'Performance Expectation Calculator : Three Rising Valleys Price Target',
    args: true,
    usage: '<high price of 2nd peak> <low price of 1st peak> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[0]) - parseInt(args[1])) * (.58);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Three Rising Valleys Price Target')
            .setColor(0x8cd9be)
            .setDescription(`High Price of 2nd Peak: ${args[0]}\nLow Price of 1st Peak: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};