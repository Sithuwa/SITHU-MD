
const express = require("express");
const app = express();





const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require('path');
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
const PORT = process.env.PORT ||  5000
const MESSAGE = process.env.MESSAGE ||  `
╔════◇
║ *🧚‍♂️ THANKS YOU CHOOSE SITHU-MD 🧚‍♂️*
║ _You complete first step to making Bot._
╚════════════════════════╝
╔═════◇
║  『•••💃 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 💃•••』
║
║ *YOUTUBE :* _youtube.com/SITHUWA-MD_
║ *OWNER:* _https://wa.me/94761516805_
║ *SUPPORT:* _https://chat.whatsapp.com/IZpUGOxDi9vEogXXyY9Mpi_
║ *REPO* https://github.com/Sithuwa/SITHU-MD
╚════════════════════════╝

*┎┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┒*
*┋ᴄʀᴇᴀᴛᴇ ʙʏ;-*
*┋    ꜱɪᴛʜᴜᴍ ᴋᴀʟʜᴀʀᴀ,*
*┋    ᴜᴅᴀʏᴀɴɢᴀ ᴘʀᴀᴅᴇᴇᴘ,*
*┖┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┙*
`











if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
  };
  
  app.use("/", async(req, res) => {

  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function SITHU() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session =makeWASocket({ 
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        browser: Browsers.macOS("Desktop"),
        auth: state 
        });


      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) { res.end(await toBuffer(qr)); }


        if (connection == "open"){
          await delay(3000);
          let user = session.user.id;


//===========================================================================================
//===============================  SESSION ID    ===========================================
//===========================================================================================

          let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var Scan_Id = Buffer.from(CREDS).toString('base64')
         // res.json({status:true,Scan_Id })
          console.log(`
====================  SESSION ID  ==========================                   
SESSION-ID ==> ${Scan_Id}
-------------------   SESSION CLOSED   -----------------------
`)


          let msgsss = await session.sendMessage(user, { text: `SITHUWA-MD;;;${Scan_Id}` });
          await session.sendMessage(user, { audio: {url : 'https://github.com/Sithuwa/SITHUWA-BOT-1/raw/main/sithu/s/sithu-md.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: msgsss });
          await session.sendMessage(user, { text: MESSAGE } , { quoted : msgsss });
          await delay(1000);
          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}


        }

        session.ev.on('creds.update', saveCreds)

        if (connection === "close") {            
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            // console.log("Reason : ",DisconnectReason[reason])
            if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed!")
             // SITHU().catch(err => console.log(err));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server!")
            //  SITHU().catch(err => console.log(err));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...")
              SITHU().catch(err => console.log(err));
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut!")
             // SITHU().catch(err => console.log(err));
            }  else {
                console.log('Connection closed with bot. Please run again.');
                console.log(reason)
              //process.exit(0)
            }
          }



      });
    } catch (err) {
        console.log(err);
       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
    }
  }








  SITHU().catch(async(err) => {
    console.log(err)
    await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 


    //// MADE WITH 

});


  })


app.listen(PORT, () => console.log(`App listened on port http://localhost:${PORT}`));
