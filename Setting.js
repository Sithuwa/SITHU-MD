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
  sessionName: process.env.SESSION_ID || '',      //Put Your Session Id Here
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
