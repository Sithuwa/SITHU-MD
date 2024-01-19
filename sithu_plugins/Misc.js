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
