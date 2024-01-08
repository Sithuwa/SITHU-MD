/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : sɪᴛʜᴜ_ᴍᴅ-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @infocmdription : sɪᴛʜᴜ_ᴍᴅ,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const sɪᴛʜᴜ_readmore = long.repeat(4001)
const sɪᴛʜᴜ_ᴍᴅ = require('../lib/sithu_plugins')

    //---------------------------------------------------------------------------
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
            kingcmd: "help",
            shortcut: ["menu"],
            infocmd: "Help list",
            kingclass: "general",
            react: "✨",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.kingcmd}`);
                if (cmd.kingclass) arr.push(`*🧩kingclass:* ${cmd.kingclass}`);
                if (cmd.shortcut) arr.push(`*🧩shortcut:* ${cmd.shortcut}`);
                if (cmd.infocmd) arr.push(`*🧩infocmdription:* ${cmd.infocmd}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.kingcmd} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.kingcmd !== undefined) {
                        if (!cmds[command.kingclass]) cmds[command.kingclass] = []
                        cmds[command.kingclass].push(command.kingcmd)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `╭────《 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 》─────⊷\n`
                str +=
                    '```' + `│ ╭──────────────◆
│ │ User:- ${citel.pushName}
│ │ Theme:- ${tlang().title}
│ │ Prefix:- [ ${prefix} ]
│ │ Owner:- ${Config.ownername}
│ │ Plugins:- ${commands.length}
│ │ Users:- ${total}
│ │ Uptime:- ${runtime(process.uptime())}
│ │ Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
│ │ Time:- ${time}
│ │ Date:- ${date}
│ ╰──────────────◆
╰───────────────⊷\n
` + '```'
                for (const kingclass in cmds) 
                {
                   str += `╭────❏ *${tiny(kingclass)}* ❏\n` ;
                   if(text.toLowerCase() == kingclass.toLowerCase()){ str = `╭─────❏ *${tiny(kingclass)}* ❏\n` ;      
                        for (const plugins of cmds[kingclass]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `╰━━━━━━━━━━━━━──⊷\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[kingclass]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                         str += `╰━━━━━━━━━━━━━━──⊷\n`  ; 
                   }
  
                }
                str+= `*⭐️Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n*Made with ❤️ in Nodejs* `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
            kingcmd: "list",
            infocmd: "list menu",
            kingclass: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].kingcmd==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].kingcmd,1)}*\n` 
     if(commands[i].infocmd=undefined) commands[i].infocmd=""
     str += `╰➛ ${fancytext(commands[i].infocmd,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
        kingcmd: "owner",
        infocmd: "To find owner number",
        kingclass: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.kingcmd}`);
        if (cmd.kingclass) arr.push(`*🧩Type:* ${cmd.kingclass}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
