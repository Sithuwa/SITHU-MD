const {tlang, getAdmin, prefix, name, sck,sck1, fetchJson,getBuffer, runtime,Module_Exports } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");




Module_Exports({
             kingcmd: "sithubot",
             shortcut : ["chatbot","sbot","sithuchatbot"],
             infocmd: "activates and deactivates chatbot.\nuse buttons to toggle.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "on":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*_SITHU Chatbot is Already Enabled_*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*_SITHU Chatbot Activated successfully._*')   
                     }
                     break
                 case "off":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*_SITHU ChatBot is Already Disabled._*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*_SITHU Chatbot Deactivated Successfully._*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*_SITHU Chatbot Status: Disabled_* \n*_To Enable Type: ${prefix}sbot on_*`)
                        else return await citel.reply(`*SITHU Chatbot Status: Enabled* \n*_To Disable Type : ${prefix}sbot off_*`)
                        
                     }
             }
 
 
      })


Module_Exports({
            kingcmd: 'News',
            shortcut :['slnews' , 'esana'],
            kingclass: "News",
            infocmd: "Searches News",
        },
async (Void, citel, text) => {
	if (text[1] === '') return await citel.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${text[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await citel.sendMessage(citel.jid, '*📁 ' + Lang.CATEGORY +':* ```' + text[1] + '```\n\n\n' +
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
                '*◼️ ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n'+ 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[5].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[5].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[6].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[6].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[7].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[7].readMoreUrl + '```\n\n'+									 
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[8].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[8].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[9].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[9].readMoreUrl + '```\n\n'+
		'*◼️ ' + Lang.NEWST +':* ```' + json.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[10].content + '```\n' + 
		'*👉 ' + Lang.RMLINK +':* ```' + json.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await citel.sendMessage(citel.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});
