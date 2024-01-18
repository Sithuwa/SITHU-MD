const { tlang,shazam,prefix,Module_Exports } = require('../lib')

let yts = require("secktor-pack");

Module_Exports({

        kingcmd: "findsong",

        shortcut: ["findaudio","findmp3","fs"],

        kingclass: "search",

        infocmd: "Finds info about song"

    },

    async(Void, citel, args) => {

        let mime = citel.quoted.mtype

        if (!citel.quoted) return citel.reply(`Send/Reply Image ${prefix}shaxam`);

        if (!/audio/.test(mime)) return citel.reply(`*Mention a part of the video* ❗`);

        let buff = await citel.quoted.download();

        citel.reply(`*Identifying And Loading Information* 🌎`);

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
`,

				footer: tlang().footer,

				headerType: 4,

				}

			await Void.sendMessage(citel.chat, buttonMessaged, {

				quoted: citel,

			});

    }

 )
