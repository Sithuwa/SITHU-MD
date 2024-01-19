const { truecaller,isPublic,Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({
        kingcmd: "truecall",
        shortcut: ["num","findnum","tc","trucall"],
        kingclass: "search",
        infocmd: "Finds info number",
        
    },
  async (Void, citel, text) => {
	if (!text && !citel.quoted) return await citel.reply('_Enter the number you want to search_');
	const number = citel.quoted ? citel.quoted.sender : text.replace(/[^0-9]/g, '')
	const result = await truecaller(number, citel.user_id)
	return await Void.sendMessage(result);
})
