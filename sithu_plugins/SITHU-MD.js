const { tlang, ringtone, Module_Exports,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, name } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

Module_Exports({ 
         kingcmd: "menu", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
    *ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805
        
➥${prefix}1.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
➥${prefix}1.2 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
➥${prefix}1.3 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
➥${prefix}1.4 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
➥${prefix}1.5 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
➥${prefix}1.6 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
➥${prefix}1.7 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
➥${prefix}1.8 *ᴄᴏɴᴠᴇʀᴛᴏʀ ᴍᴇɴᴜ*
➥${prefix}1.9 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
➥${prefix}1.10 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )

//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.1", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ* ❩┅┅☉
┋ ᴛɢꜱ
┋ ᴀᴘᴋ
┋ ɢᴅʀɪᴠᴇ
┋ ɢɪᴛᴄʟᴏɴᴇ
┋ ᴛᴛꜱ
┋ ᴠɪᴅᴇᴏ
┋ ꜱᴏɴɢ
┋ ᴍᴜꜱɪᴄ
┋ ʀɪɴɢᴛᴏɴᴇ
┋ ᴍᴇᴅɪᴀꜰɪʀᴇ
┋ ᴀᴜᴅɪᴏ
┋ ʏᴛꜱ
┋ ʏᴛᴍᴘ4
┋ ʏᴛᴍᴘ3
┋ ʏᴛᴅᴏᴄ
┋ ᴘʟᴀʏ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.2", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ᴍɪꜱᴄ* ❩┅┅☉
┋ ᴘɪɴᴛ
┋ ᴄᴘᴜ
┋ ꜱɪᴛʜᴜʙᴏᴛ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.3", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ꜱᴛɪᴄᴋᴇʀ* ❩┅┅☉
┋ ᴀᴛᴛᴘ
┋ ꜱᴛɪᴄᴋᴇʀ
┋ ᴄɪʀᴄʟᴇ
┋ ᴄʀᴏᴘ
┋ ʀᴏᴜɴᴅ
┋ ᴍᴇᴍᴇɢᴇɴ
┋ ϙᴜᴏᴛᴇʟʏ
┋ ᴀᴛᴛᴘ1
┋ ᴀᴛᴛᴘ2
┋ ᴀᴛᴛᴘ3
┋ ᴛᴛᴘ1
┋ ᴛᴛᴘ2
┋ ᴛᴛᴘ3
┋ ᴛᴛᴘ4
┋ ᴛᴛᴘ5
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.4", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ɢʀᴏᴜᴘ* ❩┅┅☉
┋ ᴀᴄᴛ
┋ ᴅᴇᴀᴄᴛ
┋ ɢᴅᴇꜱᴄ
┋ ɢɴᴀᴍᴇ
┋ ɪɴᴠɪᴛᴇ
┋ ʀᴇᴠᴏᴋᴇ
┋ ᴏɴʟʏᴀᴅᴍɪɴ
┋ ᴀɴᴛɪʙᴏᴛ
┋ ᴅɪꜱᴀʙʟᴇ
┋ ᴇɴᴀʙʟᴇ
┋ ᴋɪᴋ
┋ ɴᴜᴍ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.5", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ꜱᴇᴀʀᴄʜ* ❩┅┅☉
┋ ꜰɪɴᴅᴀᴜᴅɪᴏ
┋ ꜰɪɴᴅᴠɪᴅᴇᴏ
┋ ꜱꜱ
┋ ɪᴍᴅʙ
┋ ᴡᴇᴀᴛʜᴇʀ
┋ ʜᴏʀᴏ
┋ ᴄʀɪᴄᴋᴇᴛ
┋ ɢᴏᴏɢʟᴇ
┋ ɪᴍᴀɢᴇ
┋ ᴄᴏᴜᴘʟᴇᴘᴘ
┋ ɪꜱᴡᴀ
┋ ꜱʟꜱᴜʙꜱᴇᴀʀᴄʜ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.6", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ɴᴇᴡꜱ* ❩┅┅☉
┋ ᴇꜱᴀɴᴀ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.7", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ɢᴇɴᴇʀᴀʟ* ❩┅┅☉
┋ ᴄᴀᴛᴇɢᴏʀʏ
┋ ᴏᴡɴɴᴇʀ
┋ ʜᴇʟᴘ
┋ ʟɪꜱᴛ
┋ ꜰɪʟᴇ
┋ ꜱᴛᴀᴛᴜꜱ
┋ ꜱᴄʀɪᴘᴛ
┋ ꜱᴘᴇᴇᴅ
┋ ᴜᴘᴅᴀᴛᴇ
┋ ᴜᴘᴅᴀᴛᴇʙᴏᴛ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.8", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ᴄᴏɴᴠᴇʀᴛᴇʀ* ❩┅┅☉
┋ ᴘʜᴏᴛᴏ
┋ ᴠᴠ
┋ ꜰᴀɴᴄʏ
┋ ᴛɪɴʏ
┋ ᴛᴏᴀᴜᴅɪᴏ
┋ ᴛᴏMᴘ4
┋ ᴘᴀꜱᴛᴇ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.9", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ᴏᴡɴᴇʀ* ❩┅┅☉
┋ ᴊᴏɪɴ
┋ ʙʟᴏᴄᴋ
┋ ᴜɴʙʟᴏᴄᴋ
┋ ᴊɪᴅ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "1.10", 
         kingclass: "menu",
         react: "📃",
         infocmd: "Searches menu", 
         use: '<text>', 
         filename: __filename,

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                url: await botpic(),
                },

                caption: `
*ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805

┏┅┅❨ *ᴏᴛʜᴇʀ* ❩┅┅☉
┋ ᴄʜᴀᴛ
┋ ɢᴘᴛ
┋ ᴅᴀʟʟᴇ
┋ ʙᴀꜱꜱ
┋ ʙʟᴏᴡɴ
┋ ᴅᴇᴇᴘ
┋ ꜰᴀꜱᴛ
┋ ʀᴇᴠᴇʀꜱᴇ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷

🍀 *ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ* 🍀
🇱🇰 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴜᴍᴀʀᴀ* 🇱🇰
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
