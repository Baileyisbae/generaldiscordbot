const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pehsu',
    description: 'Performance Expectation Calculator : Head & Shoulders Upward Breakout Price Target',
    args: true,
    usage: '<breakout price> <high price of head> <neckline price> <current price>',
    execute(message, args) 
    {
        if (args.length < 4) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) - (parseInt(args[1]) - parseInt(args[2])) * (.55);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[3])) / (parseInt(args[3])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Head & Shoulders Upward Breakout Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Breakout Price: ${args[0]}\nHigh Price of Head: ${args[1]}\nNeckline Price: ${args[2]}\nCurrent Price: ${args[3]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};