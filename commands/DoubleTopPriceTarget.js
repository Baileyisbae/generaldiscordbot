const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pedt',
    description: 'Performance Expectation Calculator : Double Top Price Target',
    args: true,
    usage: '<price of middle trough> <price of the highest of two highs> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) - (parseInt(args[1]) - parseInt(args[0])) * (2.0/3.0);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Double Top Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Price of Middle Trough: ${args[0]}\nPrice of the Highest of Two Highs: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};