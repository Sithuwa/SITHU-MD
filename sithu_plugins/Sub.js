const name = require('../setting')
const { getBuffer, getGroupAdmins, Module_Exports, sithu_plugins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {subsearch , subdl }  = require('@sl-code-lords/si-subdl')
Module_Exports({
    kingcmd: "slsub",
    react: "📃",
    infocmd: "Search Sinhala Subtitles  from Web Site",
    kingclass: "download",
    use: '.slsub',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, sithu_plugins, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to download Subtitles*")
const duka = await subsearch(q)
const latest = await subdl(duka.results[0].link)
const maru =`*SITHU-MD SINHALA SUB DOWNLOADER*

📊 *Movie Title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${duka.results[0].link}

`
  await conn.sendMessage(from,{image:{url: latest.results.img },caption: maru + "*ꜱɪᴛʜᴜ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ*" },{quoted:mek })
  await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

Module_Exports({
    kingcmd: "slsubfind",
    react: "🔎",
    infocmd: "Search All Subtitles  from Web Site",
    kingclass: "search",
    use: '.technewsall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, sithu_plugins, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to Search Subtitles*")
const vid = await subsearch(q)
    let yt = '\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ꜱɪᴛʜᴜ-ᴍᴅ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.results ) {
        yt += `📃 *${i.no} - ${i.title}*\n🔗 _Link : ${i.link}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/d05c60fb40c1ab9f90600.jpg" },caption: yt + "*ꜱɪᴛʜᴜ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})

Module_Exports({
    kingcmd: "subdlfromlink",
    react: "📃",
    infocmd: "Download subtitles from Web Sites",
    kingclass: "download",
    use: '.subdlfromlink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, sithu_plugins, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ Please enter movie Link to download Subtitles*")
if(!q.includes('baiscope')) return reply('🚫 *Please enter Valid Movie url*')
 const latest = await subdl(q)
const maru =`*SITHU-MD SL SUBTITLES DOWNLOADER*

📊 *Movie title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${q}

*ꜱɪᴛʜᴜ-ᴍᴅ*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
   await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})
