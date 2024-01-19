const { truecaller, Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({
        kingcmd: "truecall",
        shortcut: ["num","findnum","tc","trucall"],
        kingclass: "search",
        infocmd: "Finds info number",
        
    },
  async (Void, citel, text) => {
if (!text[1] && !citel.reply_message) return await citel.reply("_Give me any number or reply to any user!_");
if (text[1].includes('/')) return await citel.sendReply('Wrong format! \n\n .true +91 6282344739')
var go;
if (citel.reply_message) go = citel.reply_message.jid.split('@')[0]
else if (!text[1].includes('@')) go = text[1]
else if (citel.mention) {
var mm = '';
citel.mention.map(async (user) => {
mm += user.split('@')[0];
});
go = mm
} 
var initt = go.split(" ").join("")
var number = initt.replace('+','')
var res = await find(number,'',citel.client.user.id)
if (res == 'error') return await citel.sendReply("_Truecaller limit over! (20/20) Contact owner_")
await citel.sendReply(res);});


