const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════,[Make sure you put all values in "" , '']\\
global.owner = process.env.OWNER_NUMBER || '94761516805' ; // Add Your Number without +
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.wclgxxb.mongodb.net/?retryWrites=true&w=majority" ; // put mongodb key here
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363221057889216@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'94759333625@s.whatsapp.net' ;
global.email = 'sithumkalhara271@gmail.com' ; 
global.github = 'https://github.com/Sithuwa/SITHU-MD' ;
global.location = 'Ampara' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Colombo' //add correct timezone or leave it same , otherwise you get erros
global.gurl = 'https://www.youtube.com/@SITHUWA-MD' ; 
global.sudo =  process.env.SUDO || "94761516805" ; // Do not change it
global.devs = "94761516805"; //Dont change it From here
global.mztit = process.env.SKTIT ||"💛SITHUWA💛", // add your title here
global.Gname = process.env.GNAME ||"sɪᴛʜᴜ-ᴍᴅ-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || 'https://www.youtube.com/@SITHUWA-MD',
global.waUrl = process.env.WAURL ||"https://chat.whatsapp.com/GU73HsSG2kXCd8EN9xQtiF",
global.website = 'https://github.com/Sithuwa/SITHU-MD' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/4ba85b752de56b77264c5.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'SITHUWA-MD;;;SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVpZGd6Y2pTdlA5bGNNN1hVS1VQM0V2SjhkWmttVDVVRXZGc2tMRTRYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUoxV09QYUZSS1Mya0FPblR2QWtMU1RiVDJUY0JkalVLajdDU0NuOGRrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUDdhVXJibHZQMzhlK2JqelBGU3htVnlWMWhLMjlFU0lIVXVReG1vaFZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UzRPTlk1YVFBdjRSaERVMktITi9SSUdUbmhqZ1NLYWxKRWRjS1NSTWdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9QWGJEOFk3YVN6ek1EekNVaFg2RUhsMHBNcWxtUHl5RHNiZjBISXlhRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloxRGVOL1o3c0NPYWd5Q1hKNzdXenEvbU9ZVE1VRTZCRm5HaUV0cFRuWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUd1dGZ5VUdoQTlkYkR4OW85YTNkd1JGYzhCeFNJTUVBc3pZcTQwVWxrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjlRZmI3bFE4cHZIa1RKdi92eVJzcGNyVVhqVnpWZncyc2NYeUZJYmcxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9McmF1emVxQXJLa0lYb2s4aXB1amdVc1QyQkgrdlpLR2ZEam5hVWFwbEZsdTROOGpldVMwYjRHUnJ3Yk1wcVBRc05vWHVXM3FWVkpvRnZyU0VBaURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiIvUHlrTlVrZ1o2WXVBaXFYMndRSFpRRmZzUE5tdmZlWnhiVnJkQ0loWE5ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJncFpBTHd6WVJIeTR0VUhfTVMxeDZBIiwicGhvbmVJZCI6ImM3ZTZmNzFlLTI5ZjgtNDkwMC1iOWM2LTZmZWUwNjFhZTgxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqV042dDVlOG9LTkdyeGxtcHlkZitCT2E2WEU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5FVVgzVzJFcW1ob1Fwd0Zobk82VGgrL1YyND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vcXA0NEdFTnFhdGJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9DdzZ5UDVjWGljZzkzQzVzam0zMGQ0S29GSmpOYzBKV0tlYm5NQkd2bkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJQM2dKdjhnRGxPZk4vTk5KdFVLMFBVNkkrWU1rVTNLbkJKLzc1TDlhVUwvSHlyc2Z2RnR0QlRERWdVbG5CMm5GWkJuYWExTGdlYUtKa0JLTUNKZUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXVzdBWTY1ZmhEV085TEVxc1dYa0V1Q1FPY0xETmtVakY5VUJDYXlRNWlxMlpmRTZGcUxpWGx5NnhGZHZUaUdVTm5Nb3ZnTGFXdGlGSm9aODZsT2pDQT09In0sIm1lIjp7ImlkIjoiOTQ3ODY2Njc2Njk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzaXRodW1rYWxoYXJhIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg2NjY3NjY5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGdzT3NqK1hGNG5JUGR3dWJJNXQ5SGVDcUJTWXpYTkNWaW5tNXpBUnI1dyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUzNjQxMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMd3UifQ===',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sɪᴛʜᴜ_ᴍᴅ',  // add the botname you want
  ownername:  process.env.OWNER_NAME || `𝚂𝙸𝚃𝙷𝚄𝙼 𝙺𝙰𝙻𝙷𝙰𝚁𝙰`, // add your name
  author:  process.env.PACK_AUTHER || '𝚂𝙸𝚃𝙷𝚄𝙼 𝙺𝙰𝙻𝙷𝙰𝚁𝙰', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false', // if it true it automatically views status and send status in your inbox
  packname:  process.env.PACK_NAME || "sɪᴛʜᴜ_ᴍᴅ" , 
  autoreaction: process.env.AUTO_REACTION || 'true', // if it true it will react to all messages
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', // it will show always online, false it if you dont want
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'true', // it will read all your messages, false it if you dont want
  autovoice: process.env.AUTO_VOICE || 'false',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false", // if true it will disable your pm
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true', 
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7", // add your remove bg key if you have it
  caption :process.env.CAPTION || "\t*★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★ sɪᴛʜᴜ-ᴍᴅ* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' , // add your openai key if you have it
  VERSION: process.env.VERSION || '𝚅.𝟷.𝟸.𝟽',
  LANG: process.env.THEME|| 'SITHU_MD',
  menu : process.env.MENU || '', // Not Available in current Version
  WORKTYPE: process.env.WORKTYPE || 'public' // if private only you can use your bot, if public everyone use your bot
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
