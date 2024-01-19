const { truecaller,Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({

        kingcmd: "truecall",

        shortcut: ["num","findnum","tc","trucall"],

        kingclass: "search",

        infocmd: "Finds info number"

    },
    
  async (sithu, citel) => {
	if (citel.citel(/login/gi)) {
		citel = citel.replace(/login/gi, '');
		if (!citel) return await sithu.send('_give me a number to send otp_');
		const msg = await truecaller.set(citel);
		if (msg === true) return await sithu.send(`_successfully send otp to this ${citel} number_\n_use *true otp* <key> to login_`);
		return await sithu.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	} else if (citel.citel(/logout/gi)) {
		await truecaller.logout(citel);
		return await sithu.send(`_successfull_`);
	} else if (citel.citel(/otp/gi)) {
		citel = citel.replace(/otp/gi, '');
		if (!citel) return await sithu.send('_please provide an otp_');
		const msg = await truecaller.otp(citel);
		if (msg === true) return await sithu.send(`_successfully Logined to Truecaller!!_`);
		return await sithu.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	}
	let user = (sithu.mention.jid?.[0] || sithu.reply_sithu.mention.jid?.[0] || sithu.reply_sithu.sender || citel).replace(/[^0-9]/g, '');
	if (!user) return await sithu.send(`_reply to a user_`)
	const res = await truecaller.search(user);
	if (!res.status) return await sithu.send(res.sithu);
	let msg = `╭─❮ truecaller ❯ ❏\n`//buntline n eromd edi
	delete res.status;
	for (const key in res) {
		msg += `│ ${key.toLowerCase()}: ${res[key]}\n`;
	}
	msg += `╰─❏`;
	return await sithu.send('```' + msg + '```', {quoted: sithu.data})
});
