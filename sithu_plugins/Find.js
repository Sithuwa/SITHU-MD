const { truecaller, jidToNum, delTruecaller, getTruecaller, Module_Exports } = require('../lib')

const axios = require('axios')
 
 Module_Exports({
        kingcmd: "truecall",
        shortcut: ["num","findnum","tc","trucall"],
        kingclass: "search",
        infocmd: "Finds info number",
        
    },
  async (Void, citel, text) => {
    text =
      (citel.mention[0] && jidToNum(citel.mention[0])) ||
      text ||
      (citel.reply_message && jidToNum(citel.reply_message.jid))
    if (!text) return await citel.send(`*Example :* truecaller 919876543210`)
    if (text === 'token') {
      const token = await getTruecaller()
      if (!token) return await citel.send(`*Your not logined*`)
      return await citel.send(token, { quoted: citel.quoted })
    }
    if (text === 'logout') {
      await delTruecaller()
      return await citel.send(`Logged out from Truecaller.`)
    }
    const res = await truecaller.search(text)

    if (res.message) {
      return await citel.send(res.message)
    }
    let msg = ''
    if (res.name) msg += `*Name :* ${res.name}\n`
    if (res.gender) msg += `*Gender :* ${res.gender}\n`
    if (res.email) msg += `*Email :* ${res.email}\n`
    msg += `*Type :* ${res.numberType}(${res.type})\n`
    msg += `*Carrier :* ${res.carrier}\n`
    msg += `*Number :* ${res.number}\n`
    if (res.city) msg += `*City :* ${res.city}\n`
    msg += `*DailingCode :* ${res.dialingCode}(${res.countryCode})`
    await citel.send(msg)
  }
)
