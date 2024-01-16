//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                              //                                                                 //                                         𝚅.𝟷.𝟸.𝟽                                                   // 
                         //
//                                   CREATE BY SITHUM-KALHARA                                              //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪᴛʜᴜ_readmore = long.repeat(4001)
  const sɪᴛʜᴜ_speed = require('performance-now')
  const sɪᴛʜᴜ_ᴍᴅ = require('../lib/sithu_plugins')
  

  //------------------------------------------------------------------------------------


  sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
          kingcmd: "ownner",
          infocmd: "to check owner number",
          kingclass: "general",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )

  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };

    //---------------------------------------------------------------------------
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
            kingcmd: "help",
            shortcut: ["menu","sithu","සිතූ"],
            infocmd: "Help list",
            kingclass: "general",
            react: "🧙‍♂️",
            filename: __filename
        },
        async(bot, person, text) => {
                 await bot.sendPresenceUpdate('recording', person.chat);
            await bot.sendMessage(person.chat, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-MD/raw/main/media/bot.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: person, });
        }
    )
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let Maher = [];
                const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
                else Maher.push(`*🍁Command:* ${cmd.kingcmd}`);
                if (cmd.kingclass) Maher.push(`*🧩Category:* ${cmd.kingclass}`);
                if (cmd.shortcut) Maher.push(`*🧩Alias:* ${cmd.shortcut}`);
                if (cmd.infocmd) Maher.push(`*🧩Description:* ${cmd.infocmd}`);
                if (cmd.use) Maher.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.kingcmd} ${cmd.use}\`\`\``);
                return await person.reply(Maher.join('\n'));
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
                let str = `┎┅┅《 ${mztit} 》┅┅⊷\n`
                str +=
                    '```' + `┋✪┎┅┅┅┅┅┅┅┅┅┅┅┅┅┅⛯
┋✪┋ 𝚄𝚂𝙴𝚁:- ${person.pushName}
┋✪┋ 𝚃𝙷𝙴𝙼𝙴:- ${tlang().title}
┋✪┋ 𝙿𝚁𝙴𝙵𝙸𝚇:- ❨ ${prefix} ❩
┋✪┋ 𝙾𝚆𝙽𝙴𝚁:- ${name.ownername}
┋✪┋ 𝙿𝙻𝚄𝙶𝙸𝙽𝚂:- ${commands.length}
┋✪┋ 𝚄𝚂𝙴𝚁𝚂:- ${total}
┋✪┋ 𝚄𝙿𝚃𝙸𝙼𝙴:- ${runtime(process.uptime())}
┋✪┋
┋✪┋ 𝚃𝙸𝙼𝙴:- ${time}
┋✪┋ 𝙳𝙰𝚃𝙴:- ${date}
┋✪┖┅┅┅┅┅┅┅┅┅┅┅┅┅┅⛯
┖┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷\n
` + '```'
                for (const kingclass in cmds) 
                {
                   str += `┏┅┅❨ *${tiny(kingclass)}* ❩┅┅☉\n` ;
                   if(text.toLowerCase() == kingclass.toLowerCase()){ str = `┏┅┅❨ *${tiny(kingclass)}* ❩┅┅☉\n` ;      
                        for (const plugins of cmds[kingclass]) { str += `│ ${fancytext(plugins,1)}\n` ; }
                        str += `┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷\n`  ;
                        break ;
                   }
                   else { for (const plugins of cmds[kingclass]) { str += `┋ ${fancytext(plugins,1)}\n` ; }
                         str += `┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⊷\n`  ; 
                   }
  
                }
                str+= `*ᴛʏᴘᴇ:* ${prefix}ʜᴇʟᴘ ᴄᴍᴅ ɴᴀᴍᴇ ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ ꜱᴘᴇᴄɪꜰɪᴄ ᴄᴏᴍᴍᴀɴᴅ.\n*ᴇɢ:* _${prefix}ʜᴇʟᴘ ᴀᴛᴛᴘ_\n*ᴄʀᴇᴀᴛᴇ ʙʏ:- ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ & ᴜᴅᴀʏᴀɴɢᴀ ᴘʀᴀᴅᴇᴇᴘ* `
                let buttonMessaged = {
                    image: { url: await botpic() },
                    caption: str
                };
                return await bot.sendMessage(person.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
            kingcmd: "list",
            infocmd: "list menu",
            kingclass: "general"
        },
        async(bot, person) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ${mztit} 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${person.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${name.ownername}
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
            return await bot.sendMessage(person.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
  
sɪᴛʜᴜ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪᴛʜᴜ_files = await readDirectory(text);
            files.forEach(sɪᴛʜᴜ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃⛯ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`┃⛯ •ᴄʟᴀss• ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`┃⛯) •ꜰɪʟᴇ-ᴘᴀᴛʜ• ${cmd.kingpath}\n┗━━━━━━━━━━⦿\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })

