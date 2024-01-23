const moment = require('moment-timezone') 
 const {fetchJson,Module_Exports, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const axios = require('axios') 
 const fetch = require('node-fetch') 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 

//---------------------------------------------------------------------------

Module_Exports({ 
         kingcmd: "esana1", 
         kingclass: "news",
         react: "📃",
         infocmd: "Searches news", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel) => { 
        let res = await api.latest_id(); 
        const nid = res.results.news_id; 
        let news = await api.news(nid); 
        const tt = news.results.TITLE; 
        const dss = news.results.infocmdRIPTION; 
        const ttime = news.results.PUBLISHED; 
        const img = news.results.COVER; 
        const cap = `📃𝗡𝗘𝗪𝗦 𝗕𝗬 𝗦𝗜𝗧𝗛𝗨-𝗠𝗗\n\n*☉───────────────*\n🏷️ ᴛɪᴛʟᴇ➨ ${tt}\n*☉───────────────*\n 🕒 ᴛɪᴍᴇ➨ ${ttime}\n*☉───────────────* \n 📑 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ➨ ${dss}\n*☉───────────────* \n\n ▶.ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ.◀`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})
 }) 

