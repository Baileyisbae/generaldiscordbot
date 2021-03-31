module.exports = {
	name: 'flowalgoreadme',
    description: 'Creates the flowalgo readme to explain usage.',
    usage: '~flowalgoreadme',
    execute(message) 
    {
        message.delete();
        message.channel.send(`**If you are new to using order flow the best thing to do is to observe it.**
        What are they buying? Why might they be buying? What are those equities doing today? What did they do in the next few days? Different names react differently to flow. Some names rarely ever get flow. Some names get flow on a daily basis. 
        
        Develop a feel for what is normal and what isnt. Order flow is a very powerful tool but you need to put in the screen time and become "one" with it.
        
        **Order flow is a leading indicator.**
        Before a name becomes active, more often than not, there was flow positioning prior or it was aggressive flow that set it off.
        
        **Never follow a trade blindly.**`);
        message.channel.send(`Although we can see the orders coming in, we don't know the traders intentions. Keep in mind that a large call position can always be a hedge against a larger short position. A large put position can also be a hedge against a larger long position. 
        We also are unaware how long the trader on the other side is intending to hold their position. 
        Look for the "why" in an order. Why did someone place this order? What are they seeing? Is there a catalyst? Does it capture earnings? 
        
        **Utilize all the data available.**
        Option flow is only one piece of data. Always pull up a chart. Smart money could care less about the price they pay for an option contract. It's always best to wait before following a trade that intrigues you until you analyze it thoroughly. Chances are, you can get in cheaper.

        **Go after new names/new flow.**
        You'll have far better odds if you go after symbols that are either seeing new flow or for which the flow has "turned". (Meaning flow was bearish and is now bullish or vice-versa). The FlowAlgo Dashboard will only show you flow for the current day.
        If a symbol has already seen bullish flow for weeks and has already ran up for some time, pass on it. The orders coming in are likely all adding to positions that are deeply in the green already. Wait for a pullback. It's not worth it and you're chasing at this point. There are new opportunities each day so don't become attached to anything.
        Don't trade through earnings.`);
        message.channel.send(`Simple as that. It's not worth it and you have no edge(only in some very rare cases). Stocks beat and dip. Some miss and still head for the heavens. It's best to avoid earnings.
        Remember you can always sell and buy back in. Don't get attached.
        The small orders can be big winners too.
        
        Before the large orders start pouring in, there's almost always a small order that sets things off. Pay close attention to these as well. 
        If news is already out, pass.
        
        At times, you may see flow coming in for a symbol and the price immediately spikes 2-3%+. Pass on these or wait. The orders coming in are likely from a high frequency trading algo(a machine) and they'll be in and out within the blink of an eye. If news is already out and a large move is already taking place, pass or be patient with your entry. 
        
        **Pay closer attention to stocks vs ETF's.**
        A majority of the put flow that comes in for SPY, QQQ, IWM, etc may be hedges in most cases. If you see a million dollar put position on an ETF's, it may very well be a hedge. Now if you begin seeing puts on ETF's as well as individual names, then do be cautious. 
        
        **Plan your trade and trade your plan.**
        Know WHY you're getting in. 
        Know WHERE you're getting IN.
        Know WHERE you're getting OUT, **before you get in!**`);
        message.channel.send(`\n\n**Alpha Ai** is a predictive algorithm. Utilizing a multitude of data points, it attempts to predict when momentum in a stock is going to pick up in the near term. Throughout the day, it generates signals(trade ideas). 

        **Long Signal:** Alpha Ai is predicting momentum will increase to the upside.
        **Short Signal:** Alpha Ai is predicting momentum will increase to the downside.
        **Hedge Signal:** Alpha Ai is predicting an increase in volatility in the near-term.
        
        **When are signals generated?**
        Signals will only occur during market hours. 
        
        **How long do the signals last?**
        Signals generated average 1-5 days in duration. We recommend noting the expiration dates of the option flow that is active on the day of the alert for the given symbol.
        
        **What is the best time-frame to use on a chart for the signals?**
        The 1 hour, 2 hour and daily time-frames.
        
        **Does Alpha Ai tell you when a signal is no longer in effect?**
        At the moment, it does not. A signal should simply draw attention to the symbol mentioned. Risk management and targets are up to the individual trader. In a future release, we plan to expand on this.`);
        message.channel.send(`**What is a good target for the signals?**
        Our system doesn't provide targets at the moment. We suggest using resistance levels as targets, Fibonacci levels, or pivot points.
        
        **How many signals are generated per day?**
        This will vary greatly depending on market conditions. Some days there may be 3 or more signals generated. Some days there may not be any.
        
        **What is Ref?**
        Ref is reference price. The price of the stock when the signal was generated.
        
        **Is there a way to gauge when a signal has failed?**
        A 2% move up or down in the opposing direction of the signal would be considered a failed signal for a stock, or 1% for an ETF.
        
        **What does it mean when a symbol is signaled both long and short?**
        Although this is not a common occurrence, it does happen from time to time. This does not mean it's signaling for both directions. The latest signal cancels out any prior signal as its based off of the most recent data available.`);
	},
};