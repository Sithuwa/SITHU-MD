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


function _0x2e54(_0x3a93a6,_0xb86466){const _0x308cf9=_0x308c();return _0x2e54=function(_0x2e54bd,_0xbad76f){_0x2e54bd=_0x2e54bd-0xdf;let _0x566595=_0x308cf9[_0x2e54bd];return _0x566595;},_0x2e54(_0x3a93a6,_0xb86466);}const _0x3f279b=_0x2e54;(function(_0x780702,_0x518865){const _0x17dce2=_0x2e54,_0x240f1c=_0x780702();while(!![]){try{const _0x3ddaa2=-parseInt(_0x17dce2(0xe1))/0x1*(parseInt(_0x17dce2(0xe9))/0x2)+parseInt(_0x17dce2(0xed))/0x3*(-parseInt(_0x17dce2(0xe3))/0x4)+parseInt(_0x17dce2(0xf3))/0x5*(parseInt(_0x17dce2(0xf4))/0x6)+parseInt(_0x17dce2(0xdf))/0x7+-parseInt(_0x17dce2(0xf8))/0x8*(-parseInt(_0x17dce2(0xe0))/0x9)+-parseInt(_0x17dce2(0xe8))/0xa*(-parseInt(_0x17dce2(0xe5))/0xb)+-parseInt(_0x17dce2(0xee))/0xc;if(_0x3ddaa2===_0x518865)break;else _0x240f1c['push'](_0x240f1c['shift']());}catch(_0x4a0b2e){_0x240f1c['push'](_0x240f1c['shift']());}}}(_0x308c,0x54068),Module_Exports({'kingcmd':_0x3f279b(0xf5),'kingclass':'news','react':'📃','infocmd':_0x3f279b(0xe4),'use':_0x3f279b(0xef),'filename':__filename},async(_0x32b1fc,_0x4e0842)=>{const _0x58c9a2=_0x3f279b;let _0x53acc5=await api[_0x58c9a2(0xf1)]();const _0x9156e2=_0x53acc5[_0x58c9a2(0xf2)][_0x58c9a2(0xf7)];let _0x4dbec9=await api[_0x58c9a2(0xe7)](_0x9156e2);const _0x1c20be=_0x4dbec9[_0x58c9a2(0xf2)][_0x58c9a2(0xf0)],_0x320562=_0x4dbec9[_0x58c9a2(0xf2)][_0x58c9a2(0xec)],_0x5918d5=_0x4dbec9['results'][_0x58c9a2(0xe6)],_0x3da91f=_0x4dbec9[_0x58c9a2(0xf2)]['COVER'],_0x52bcad=_0x58c9a2(0xe2)+_0x1c20be+_0x58c9a2(0xea)+_0x5918d5+'\x0a◉───────────────\x20\x0a\x20📑\x20ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ➨\x20'+_0x320562+'\x0a◉───────────────\x20\x0a\x0a\x20▶.ɢᴇɴᴇʀᴀᴛᴇᴅ\x20ʙʏ\x20ꜱɪᴛʜᴜᴍ\x20ᴋᴀʟʜᴀʀᴀ.◀';await _0x32b1fc[_0x58c9a2(0xeb)](_0x4e0842[_0x58c9a2(0xf6)],{'image':{'url':_0x3da91f},'caption':_0x52bcad});}));function _0x308c(){const _0x533d39=['esana','chat','news_id','8kLvjpU','4247180mZtoVV','5175054aOqIfE','1jzcPKP','📃𝗡𝗘𝗪𝗦\x20𝗕𝗬\x20𝗦𝗜𝗧𝗛𝗨-𝗠𝗗\x0a\x0a◉───────────────\x0a🏷️\x20ᴛɪᴛʟᴇ➨\x20','4agsbEB','Searches\x20news','737QyjsJt','PUBLISHED','news','33340iDOvyG','158738BGRiog','\x0a◉───────────────\x0a\x20🕒\x20ᴛɪᴍᴇ➨\x20','sendMessage','infocmdRIPTION','727926lcBUQR','10481016sLrqrB','<text>','TITLE','latest_id','results','672365OSgVFQ','6LGcdiL'];_0x308c=function(){return _0x533d39;};return _0x308c();}
