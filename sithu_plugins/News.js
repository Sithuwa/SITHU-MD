const moment = require('moment-timezone') 
 const {fetchJson,Module_Exports, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const axios = require('axios')
 let fetch = require('node-fetch') 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 

//---------------------------------------------------------------------------
Module_Exports({   
       kingcmd: "nasa",      
       react: "📃",   
       infocmd: "",   
       kingclass: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://vihangayt.me/details/nasa`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.infocmd}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＮＡＳＡ ＢＹ ＳＩＴＨＵＷＡ\n\n*${ title }*\n\n _${news}._\n\n*📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ...`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
//---------------------------------------------------------------------------
Module_Exports({  
      kingcmd: "technews",  
      react: "🧾",  
      infocmd: "Searches news",  
      kingclass: "news",  
      use: '.technews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const technews = await fetchJson(`http://darkapi.technicalhacke4.repl.co/sinhala-technews`);  
  
  
  
  
             const images = `${technews.result.img}`  
             const title = `${technews.result.title}`  
             const date = `${technews.time}`
             const news = `${technews.result.decs}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＴＥＣＨＮＥＷＳ ＢＹ ＳＩＴＨＵＷＡ\n\n${ title }\n\n ${ news }\n\n${date}\n\n▶.ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ.◀`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
//---------------------------------------------------------------------------
Module_Exports({ 
         kingcmd: "esana", 
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
        const cap = `📃ＮＥＷＳ ＢＹ ＳＩＴＨＵＷＡ\n\n◉───────────────\n🏷️ ᴛɪᴛʟᴇ➨ ${tt}\n◉───────────────\n 🕒 ᴛɪᴍᴇ➨ ${ttime}\n◉─────────────── \n 📑 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ➨ ${dss}\n◉─────────────── \n\n ▶.ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ.◀`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})
 }) 
//---------------------------------------------------------------------------
Module_Exports({  
      kingcmd: "hirunews2",  
      react: "📃",  
      infocmd: "",  
      kingclass: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const hirunews = await fetchJson(`https://hirunews.aquaapk-dl.repl.co/api/latest`);  
            const images = `${hirunews.image}`  
             const title = `${hirunews.title}`  
             const date = `${hirunews.time}`  
             const news = `${hirunews.infocmd}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＨＩＲＵ ＮＥＷＳ ＢＹ ＳＩＴＨＵＷＡ\n\n◉───────────────\n 🏷️ ᴛɪᴛʟᴇ➨ ${ title }\n◉───────────────\n 🕒 ᴛɪᴍᴇ➨ ${date}\n◉───────────────\n 📑 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ➨ ${ news }\n◉───────────────\n\n▶.ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ.◀`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 

//---------------------------------------------------------------------------
Module_Exports({   
       kingcmd: "derana",      
       react: "📃",   
       infocmd: "",   
       kingclass: "news",   
       use: '.derananews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const derana = await fetchJson(`https://darkapi--technicalhacke4.repl.co/derananews`);   
  
             const images = `${derana.result.image}`   
              const title = `${derana.result.title}`  
              const news = `${derana.result.infocmd}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＤＥＲＡＮＡ ＢＹ ＳＩＴＨＵＷＡ\n\n◉───────────────\n*${ title }*\n◉───────────────\n ${news}\n◉───────────────\n\n📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ...`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }})

//---------------------------------------------------------------------------

