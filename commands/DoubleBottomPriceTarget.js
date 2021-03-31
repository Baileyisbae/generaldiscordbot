const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pedb',
    description: 'Performance Expectation Calculator : Double Bottom Price Target',
    args: true,
    usage: '<middle peak price> <price of lowest of two bottoms> <current price>',
    execute(message, args) 
    {
        if (args.length < 3) 
        {
            return message.channel.send(`You didn't provide enough arguments, ${message.author}!`);
        }
        else 
        {
            var priceTarget = parseInt(args[0]) + (parseInt(args[0]) - parseInt(args[1])) * (2.0/3.0);
            var returnExepectation = 100 * ((priceTarget - parseInt(args[2])) / (parseInt(args[2])));
            const embed = new MessageEmbed()
            .setTitle('Performance Expectation Calculator : Double Bottom Price Target')
            .setColor(0x8cd9be)
            .setDescription(`Price of Middle Peak: ${args[0]}\nPrice of the Lowest of Two Bottoms: ${args[1]}\nCurrent Price: ${args[2]}\n\nPRICE TARGET: **${priceTarget.toFixed(3)}**\nRETURN EXPECTATION: **${returnExepectation.toFixed(2)}%**`);
            message.channel.send(embed);
        }
	},
};