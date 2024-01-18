const os = require('os');
const { tlang, botpic,Module_Exports,formatp } = require('../lib')
const axios = require('axios')
const sɪᴛʜᴜ_speed = require('performance-now')

//---------------------------------------------------------------------------

Module_Exports({

            kingcmd: "gm",
            shortcut:['goodmorning','ගුඩ්මෝනිම්'],
            infocmd: "chat bot voice.",
            kingclass: "voice chat",
            react: "🥳",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
        async(Void, citel, text) => {
              await Void.sendPresenceUpdate('recording', citel.chat);
            await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/Gm.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        }
    )
