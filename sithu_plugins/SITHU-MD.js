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
                    url: 'https://telegra.ph/file/b10172f9cfdbe5f43c43e.jpg',
                },

                caption: `
    *ꜱɪᴛʜᴜᴡᴀ ᴍᴅ ᴍᴇɴᴜ ʟɪꜱᴛ*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

⌛ *OWNER* SITHUM KUMARA
⌛ *No* https://wa.me/94761516805
        
➥1.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
➥1.2 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
➥1.3 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
➥1.4 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
➥1.5 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
➥1.6 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
➥1.7 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
➥1.8 *ᴄᴏɴᴠᴇʀᴛᴏʀ ᴍᴇɴᴜ*
➥1.9 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
➥1.10 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*

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
                    url: 'https://telegra.ph/file/1f4974fdf4f606de19cc2.jpg',
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
                    url: 'https://telegra.ph/file/a8b1e9e3c30514856a1bb.jpg',
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
                    url: 'https://telegra.ph/file/a62f98c5c028c833eb264.jpg',
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
                    url: 'https://telegra.ph/file/c44a10ae3a365e9b298a0.jpg',
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
                    url: 'https://telegra.ph/file/a4bcf9c5c49c190f489bb.jpg',
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
                    url: 'https://telegra.ph/file/537223a9c40ed18964c1a.jpg',
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
                    url: 'https://telegra.ph/file/eb6df3480822809fd1fe4.jpg',
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
                    url: 'https://telegra.ph/file/5780192ad9e3f02d02d59.jpg',
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
                    url: 'https://telegra.ph/file/e4cc4cdd33eb8e37b03ef.jpg',
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
                    url: 'https://telegra.ph/file/e2c140df787d603632e7f.jpg',
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
