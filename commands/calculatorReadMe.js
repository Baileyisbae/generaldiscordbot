module.exports = {
	name: 'calculatorreadme',
    description: 'Creates the calculated readme to explain usage.',
    usage: '~calculatorreadme',
    execute(message) 
    {
        const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
		if (hasPermission){
            message.delete();
            message.channel.send('**Below is a list of calculator commands and usage**\n\n**Cup & Handle Price Target:** ~pech <breakout price> <highest of two price bar highs> <lowest of two price bar lows> <current price>\n**Double Bottom Price Target:** ~pedb <middle peak price> <price of lowest of two bottoms> <current price>\n**Double Top Price Target:** ~pedt <price of middle trough> <price of the highest of two highs> <current price>\n**Head & Shoulders Upward Breakout Price Target:** ~pehsu <breakout price> <high price of head> <neckline price> <current price>\n**Inverted Cup & Handle Price Target:** ~peich <breakout price> <handle height> <current price>\n**Inverted Head & Shoulders Upward Price Target:** ~peihsu <breakout price> <neckline price> <low price of head> <current price>\n**Pipe Bottom Price Target:** ~pepb <highest of two price bar highs> <lowest of two price bar lows> <current price>\n**Pipe Top Price Target:** ~pept <highest of two price bar highs> <lowest of two price bar lows> <current price>\n**Three Falling Peaks Price Target:** ~petfp <low price of 2nd valley> <high price of 1st peak> <low price of 2nd peak> <current price>\n**Three Rising Valleys Price Target:** ~petrv <high price of 2nd peak> <low price of 1st peak> <current price>\n**Triple Bottom Price Target:** ~petb <high price of the peaks> <lowest price of the valleys> <current price>\n**Triple Top Price Target:** ~pett <high price of the peaks> <lowest price of the valleys> <current price>\n\nExample Usage:\n`~pech 153.5 157.14 108.58 153.28`\n\n**If you have any questions, please let us know!**')
        }
        else {
            message.channel.send(`You do not have permission to run this command, ${message.author}!`)
        }
	},
};