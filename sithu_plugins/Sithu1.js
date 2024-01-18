const { tlang,shazam,prefix,Module_Exports } = require('../lib')

let yts = require("secktor-pack");

Module_Exports({

        kingcmd: "findaudio",

        shortcut: ["find mp3","find audio","fa","ගීතය සොයන්න"],

        kingclass: "search",

        infocmd: "Finds info about song"

    },

    async(Void, citel, args) => {

        let mime = citel.quoted.mtype

        if (!citel.quoted) return citel.reply(`Send/Reply Image ${prefix}shaxam`);

        if (!/audio/.test(mime)) return citel.reply(`*reply a part of the audio*`);

        let buff = await citel.quoted.download();

        citel.reply(`*🌍 Loading Information.....*`);

        let data = await shazam(buff);

        if (!data.status) return citel.reply(data);

          let h =  `*Title :* ${data.title}           
*Artist :* ${data.artists}            
*Album :* ${data.album}                   
*Release :* ${data.release_date}`

let search = await yts(data.title);

let anu = search.videos[0];

 let generatebutton = [{

					buttonId: `${prefix}ytmp4 ${anu.url}`,										buttonText: {

				    displayText: 'Download Video'},

					type: 1

				},

                                {

				        buttonId: `${prefix}ytmp3 ${anu.url}`,					

					buttonText: {

				    displayText: 'Download Song'},

					type: 1

                                        }];

let buttonMessaged = {

				image: {

                                      url: anu.thumbnail,

                                       },

				caption: `*Title :* ${data.title}           
*Artist :* ${data.artists}            
*Album :* ${data.album}                   
*Release :* ${data.release_date} 
*Download Url :* ${anu.url}

*ᴄʀᴇᴀᴛᴇ ʙʏ ꜱɪᴛʜᴜ-ᴍᴅ*
`,

				footer: tlang().footer,

				headerType: 4,

				}

			await Void.sendMessage(citel.chat, buttonMessaged, {

				quoted: citel,

			});

    }

 )
 
Module_Exports({

        kingcmd: "findvideo",

        shortcut: ["find mp4","find video","fv","වීඩියෝව සොයන්න"],

        kingclass: "search",

        infocmd: "Finds info about song"

    },

    async(Void, citel, args) => {

        let mime = citel.quoted.mtype

        if (!citel.quoted) return citel.reply(`Send/Reply Image ${prefix}shaxam`);

        if (!/video/.test(mime)) return citel.reply(`*Reply a part of the video*`);

        let buff = await citel.quoted.download();

        citel.reply(`*🌍 Loading Information.....*`);

        let data = await shazam(buff);

        if (!data.status) return citel.reply(data);

          let h =  `*Title :* ${data.title}           
*Artist :* ${data.artists}            
*Album :* ${data.album}                   
*Release :* ${data.release_date}`

let search = await yts(data.title);

let anu = search.videos[0];

 let generatebutton = [{

					buttonId: `${prefix}ytmp4 ${anu.url}`,										buttonText: {

				    displayText: 'Download Video'},

					type: 1

				},

                                {

				        buttonId: `${prefix}ytmp3 ${anu.url}`,					

					buttonText: {

				    displayText: 'Download Song'},

					type: 1

                                        }];

let buttonMessaged = {

				image: {

                                      url: anu.thumbnail,

                                       },

				caption: `*Title :* ${data.title}           
*Artist :* ${data.artists}            
*Album :* ${data.album}                   
*Release :* ${data.release_date}
  
*Download Url :* ${anu.url}

*ᴄʀᴇᴀᴛᴇ ʙʏ ꜱɪᴛʜᴜ-ᴍᴅ*
`,

				footer: tlang().footer,

				headerType: 4,

				}

			await Void.sendMessage(citel.chat, buttonMessaged, {

				quoted: citel,

			});

    }

 )
