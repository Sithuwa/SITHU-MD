//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                              //                                                                 //                                         𝚅.𝟷.𝟸.𝟽                                                   // 
                         //
//                                   CREATE BY SITHUM-KALHARA                                              //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//




 const { tlang,sck,prefix,Module_Exports } = require('../lib')
 Module_Exports({
     kingcmd: "amute",
     infocmd: "sets auto mute time in group.",
     kingclass: "moderation",
 },
 async(sithu, msg, text,{ isCreator }) => {
     if (!isCreator) return msg.reply(tlang().owner)
     if(!msg.isGroup) return msg.reply(tlang().group)
     if(!text.split(':')[1]) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
     //if(!Number.isInteger(text.split(':')[0])) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
     //if(!Number.isInteger(text.split(':')[1])) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
           let Group = await sck.findOne({ id: msg.chat })
             if (!Group) {
                 await new sck({ id: msg.chat, mute: text }).save()
                 return msg.reply('Mute added.')
             } else {
                 await await sck.updateOne({ id: msg.chat }, { mute:text })
                 return msg.reply(`_Mute added for ${text} successfully._`)     
             }      
 }
 )

 //--------------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "aunmute",
    infocmd: "sets unmute time in group.",
    kingclass: "moderation",
},
async(sithu, msg, text,{ isCreator }) => {
    if (!isCreator) return msg.reply(tlang().owner)
    if(!msg.isGroup) return msg.reply(tlang().group)
    if(!text.split(':')[0]) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
   // if(!Number.isInteger(text.split(':')[0])) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`);
   // if(!Number.isInteger(text.split(':')[1])) return msg.reply(`Please provide correct form.\nEg: setmute ${prefix}22:00`)
          let Group = await sck.findOne({ id: msg.chat })
            if (!Group) {
                await new sck({ id: msg.chat, unmute: text }).save()
                return msg.reply('Mute added.')
            } else {
                await await sck.updateOne({ id: msg.chat }, { unmute:text })
                return msg.reply(`_Unmute updated for ${text} successfully._`)
                
            }      
} 
)
 //--------------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "dunmute",
    infocmd: "Delete unmute from group.",
    kingclass: "moderation",
},
async(sithu, msg, text,{ isCreator }) => {
    if (!isCreator) return msg.reply(tlang().owner)
    if(!msg.isGroup) return msg.reply(tlang().group)
          let Group = await sck.findOne({ id: msg.chat })
            if (!Group) {
                return msg.reply('There\'s no unmute set in group.')
            } else {
                await await sck.updateOne({ id: msg.chat }, { unmute:'false' })
                return msg.reply('Unmute deleted successfully.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "dmute",
    infocmd: "Delete mute from group.",
    kingclass: "moderation",
},
async(sithu, msg, text,{ isCreator }) => {
    if (!isCreator) return msg.reply(tlang().owner)
    if(!msg.isGroup) return msg.reply(tlang().group)
          let Group = await sck.findOne({ id: msg.chat })
            if (!Group) {
                return msg.reply('There\'s no mute set in group.')
            } else {
                await await sck.updateOne({ id: msg.chat }, { mute:'false' })
                return msg.reply('Mute deleted successfully.')
                
            }      
}
)
 //--------------------------------------------------------------------------------
