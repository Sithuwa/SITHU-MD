const { truecaller,isPublic,Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({

        kingcmd: "truecall",

        shortcut: ["num","findnum","tc","trucall"],

        kingclass: "search",

        infocmd: "Finds info number"

    },
    
  async (message, match, client) => {
	if (!match && !message.quoted) return await message.reply('_Enter the number you want to search_');
	const number = message.quoted ? message.quoted.sender : match.replace(/[^0-9]/g, '')
	const result = await truecaller(number, message.user_id)
	return await message.reply(result);
})
