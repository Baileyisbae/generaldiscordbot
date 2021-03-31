module.exports = {
	name: 'createdisclaimer',
    description: 'Creates the disclaimer for NoBullShitOptions in the called message channel.',
    usage: '~createdisclaimer',
    execute(message) 
    {
        const hasPermission = message.member.roles.cache.has('684298062314864677') || message.member.roles.cache.has('739583523060580455');
		if (hasPermission){
            message.delete();
            const disclaimer1 = `**1.** NoBullShitOptions is not registered as an investment adviser with the U.S. Securities and Exchange Commission. Rather, NoBullShitOptions relies upon the “publisher’s exclusion” from the definition of “investment adviser” as provided under Section 202(a)(11) (D) of the Investment Advisers Act of 1940 and corresponding state laws.
            As such, NoBullShitOptions does not offer or provide personalized investment advice. To the extent any of the content, material, information and/or any other kind of informational offering published, broadcast, or otherwise stated on this, and/or associated websites, may be deemed to be “investment advice”, such information is impersonal and not tailored to the investment needs of any specific person.
            The information contained within this, and/or, associated websites, is provided for informational and educational purposes only. The information should not be construed as investment or trading advice, and is not meant to be a solicitation or recommendation to buy, sell, or hold any positions in any indices or financial markets mentioned.
            The content and information provided by NoBullShitOptions, the Site and the other products and services of NoBullShitOptions, is solely incidental to the business and activities of NoBullShitOptions in providing educational services.
            `;
            const disclaimer2 = `\n**2.** You remain solely responsible for all decisions regarding your purchase and sale of securities, the suitability, profitability or appropriateness for you of any security, investment, financial product, investment strategy or other matter, and all other matters related to your investments and investment strategies.
            NoBullShitOptions does not and will not provide you with any legal, tax, estate planning or accounting advice, or any advice regarding the suitability, profitability or appropriateness for you of any security, investment, financial product, investment strategy or other matter.
            You understand, acknowledge and agree that NoBullShitOptions employees are not authorized to give any such advice, you will neither solicit nor rely on any investment advice from any NoBullShitOptions employee. NoBullShitOptions recommends that persons desiring to trade or invest in securities do so cautiously and only in consultation with their professional, licensed and qualified financial, legal, tax, estate planning and accounting advisors.
            `;
            const disclaimer3 = `\n**3.** No data, content or information provided by NoBullShitOptions, the Site or the other products and services of NoBullShitOptions, is intended, and shall not constitute or be construed as, advice or any recommendation to buy or sell securities, nor any offer, or solicitation of an offer, to buy or sell securities, nor an attempt to influence the purchase or sale of any security.
            NoBullShitOptions is not registered as an investment adviser either with the U.S. Securities and Exchange Commission, any other federal or national governmental or regulatory authority, or any state securities governmental or regulatory authority, and the business and activities of NoBullShitOptions do not require any such registration.
            `;
            const disclaimer4 = `\n**4.** NoBullShitOptions reserves the right to use any photograph/video/screenshot posted in the Discord server, without the expressed written permission of those included within the photograph/video/screenshot. NoBullShitOptions may use the photograph/video in publications or other media material produced, used or contracted by NoBullShitOptions including but not limited to: social media, brochures, invitations, books, newspapers, magazines, television, websites, etc.
            A person who does not wish to have their image for distribution or have personal identifying information omitted should make their wishes known to NoBullShitOptions Discord administrators.
            By being a verified member of the Discord server or by failing to notify NoBullShitOptions administrators, your desire to not have your photograph/video/screenshot used by NoBullShitOptions, you are agreeing to release, defend, hold harmless and indemnify NoBullShitOptions  from any and all claims involving the use of your picture or likeness.
            Any person or organization not affiliated with NoBullShitOptions  may not use, copy, alter or modify NoBullShitOptions photographs, graphics, videography or other, similar reproductions or recordings without the advance written permission of an authorized designee from NoBullShitOptions.
            `;
            
            message.channel.send(disclaimer1);
            message.channel.send(disclaimer2);
            message.channel.send(disclaimer3);
            message.channel.send(disclaimer4);
        }
        else {
            message.channel.send(`You do not have permission to run this command, ${message.author}!`)
        }
	},
};