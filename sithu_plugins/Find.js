const { truecaller,Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({

        kingcmd: "truecall",

        shortcut: ["num","findnum","tc","trucall"],

        kingclass: "search",

        infocmd: "Finds info number"

    },
    
  async (citel, text) => {
	if (text.text(/login/gi)) {
		text = text.replace(/login/gi, '');
		if (!text) return await citel.send('_give me a number to send otp_');
		const msg = await truecaller.set(text);
		if (msg === true) return await citel.send(`_successfully send otp to this ${text} number_\n_use *true otp* <key> to login_`);
		return await citel.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	} else if (text.text(/logout/gi)) {
		await truecaller.logout(text);
		return await citel.send(`_successfull_`);
	} else if (text.text(/otp/gi)) {
		text = text.replace(/otp/gi, '');
		if (!text) return await citel.send('_please provide an otp_');
		const msg = await truecaller.otp(text);
		if (msg === true) return await citel.send(`_successfully Logined to Truecaller!!_`);
		return await citel.send(`*message:* _use *true logout* as first_\n*resone*: ${msg}`);
	}
	let user = (citel.mention.jid?.[0] || citel.reply_message.mention.jid?.[0] || citel.reply_message.sender || text).replace(/[^0-9]/g, '');
	if (!user) return await citel.send(`_reply to a user_`)
	const res = await truecaller.search(user);
	if (!res.status) return await citel.send(res.message);
	let msg = `╭─❮ truecaller ❯ ❏\n`//buntline n eromd edi
	delete res.status;
	for (const key in res) {
		msg += `│ ${key.toLowerCase()}: ${res[key]}\n`;
	}
	msg += `╰─❏`;
	return await citel.send('```' + msg + '```', {quoted: citel.data})
});
