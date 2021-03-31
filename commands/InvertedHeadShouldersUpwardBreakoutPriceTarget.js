const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'peihsu',
    description: 'Performance Expectation Calculator : Inverted Head & Shoulders Upward',
    args: true,
    usage: '<breakout price> <neckline price> <low price of head> <current price>',
    execute(message, args) 
    {
        if (args.length < 4) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[1]) - parseInt(args[2])) * (.74);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[3])) / (parseInt(args[3])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Inverted Head & Shoulders Upward')
            .setColor(0x8cd9be)
            .setDescription(`Breakout Price: ${args[0]}\nNeckline Price: ${args[1]}\nLowest Price in Head: ${args[2]}\nCurrent Price: ${args[3]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};