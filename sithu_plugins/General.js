//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                              //                                                                 //                                         𝚅.𝟷.𝟸.𝟽                                                   // 
                         //
//                                   CREATE BY SITHUM-KALHARA                                              //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//



const { formatp , formatDate , tlang, botpic,Module_Exports, prefix, runtime,name , parsedJid ,sleep,performance } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'





//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================


/////-------------=========================================-------------------------------
Module_Exports({
        kingcmd: "chat",
        infocmd: "chat with an AI chatbot",
        kingclass: "AI",
        use: 'Hi',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      //  let zx = text.length;
        //if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=179995&key=WBUunWm0XQLuqrAR&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
  
    }
)


//---------------------------------------------------------------------------

function _0x4648(_0x109815,_0x39c873){const _0x30ef4a=_0x479d();return _0x4648=function(_0x305d75,_0x2d34ab){_0x305d75=_0x305d75-(0x7*0xb3+0x1*-0x971+-0x679*-0x1);let _0x39d51c=_0x30ef4a[_0x305d75];return _0x39d51c;},_0x4648(_0x109815,_0x39c873);}const _0x28cc6c=_0x4648;(function(_0x1364c7,_0x3516fc){const _0x35a149=_0x4648,_0x5bf2fe=_0x1364c7();while(!![]){try{const _0x1cbc88=-parseInt(_0x35a149(0x20d))/(-0x1da9+0xbc9*0x1+-0x1*-0x11e1)+parseInt(_0x35a149(0x20b))/(0xd0e*0x1+0x1a*0x124+-0x2ab4)*(parseInt(_0x35a149(0x1f2))/(-0x1*0x17a5+-0x17bc+0x2f64))+-parseInt(_0x35a149(0x1fd))/(0x6b3+0x3aa+0x1*-0xa59)+-parseInt(_0x35a149(0x1ee))/(0x4*0x1af+0x2e7+-0x99e)+-parseInt(_0x35a149(0x200))/(0x1ed*-0x5+0xc24+-0x27d)*(parseInt(_0x35a149(0x207))/(0x26e3+0x28d*-0x1+-0x244f))+parseInt(_0x35a149(0x206))/(-0x4*0x835+-0x3*-0xc3b+-0x9*0x6d)*(-parseInt(_0x35a149(0x202))/(-0x1c09+-0x5*-0x7b5+0x2f*-0x39))+parseInt(_0x35a149(0x1f7))/(-0x14b6+0x22a9+-0xde9)*(parseInt(_0x35a149(0x1f3))/(0x1ef1+0x714+-0x25fa));if(_0x1cbc88===_0x3516fc)break;else _0x5bf2fe['push'](_0x5bf2fe['shift']());}catch(_0x461ecf){_0x5bf2fe['push'](_0x5bf2fe['shift']());}}}(_0x479d,0x56*-0xd17+-0x5*-0xa53b+0x37823*0x1),Module_Exports({'kingcmd':_0x28cc6c(0x208),'shortcut':[_0x28cc6c(0x1ed),_0x28cc6c(0x204)],'kingclass':'AI','infocmd':_0x28cc6c(0x1f4)+_0x28cc6c(0x1fb)+_0x28cc6c(0x1f6)},async(_0xde6281,_0x3a7abf,_0x327150)=>{const _0x238c77=_0x28cc6c,_0x22886c={'pjknd':function(_0x23769c,_0x1aa61c){return _0x23769c(_0x1aa61c);},'EtsyL':_0x238c77(0x201)+_0x238c77(0x1f5)+_0x238c77(0x1fe)};if(!_0x327150)return _0x3a7abf[_0x238c77(0x209)](_0x238c77(0x1f0)+_0x238c77(0x203)+_0x238c77(0x1f9)+_0x238c77(0x205)+_0x238c77(0x20c)+prefix+(_0x238c77(0x1ef)+_0x238c77(0x20a)));try{const _0x45d107=await _0x22886c[_0x238c77(0x1fc)](fetch,_0x238c77(0x20f)+_0x238c77(0x1fa)+_0x238c77(0x1f1)+_0x327150),_0x5a8c0c=await _0x45d107[_0x238c77(0x20e)]();return _0x3a7abf[_0x238c77(0x209)](_0x5a8c0c[_0x238c77(0x1f8)],{'quoted':_0x3a7abf});}catch(_0x2931be){_0x3a7abf[_0x238c77(0x209)](_0x22886c[_0x238c77(0x1ff)]);}}));function _0x479d(){const _0x4f4cc9=['144292IjdFaS','\x0a*_','250281SlsAIj','json','https://ae','chatgpt','84815oLxmfS','gpt\x20Who\x20is','*_Give\x20me\x20','ai?text=','3LitGjP','1532707DyWshj','To\x20get\x20ope','Error\x20Occu','nse','30xWjEFq','result','t\x20ChatGpt\x20','mt.me/open','n\x20ai\x20respo','pjknd','35356LKvJLp','red_*','EtsyL','6pUiBmt','*_Unknown\x20','434439AqBHgY','Text\x20To\x20Ge','openai','Response_*','8rYbdim','105917LnMCbl','gpt','reply','\x20King_*'];_0x479d=function(){return _0x4f4cc9;};return _0x479d();}
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "dalle",
	shortcut : ['dall','dall-e'],
        infocmd: "chat with an AI",
        kingclass: "AI",
        use: '<Hii, Suhail Tech Info>',
        kingpath: __filename,
    },
    async(Void, citel,text) => 
    {
      function _0x59a8(){const _0x1d63b7=['26881RiBTzD','POST','9FEXiSq','url','786249lJnBYr','Bearer\x20','5986580TDkKVm','783582jHPgfy','json','chat','reply','https://api.openai.com/v1/images/generations','70580pKHfkI','application/json','19518LWDQXM','caption','108QGlYIu','data','512x512','147IgJvgn','OPENAI_API_KEY','stringify','1565864LubHcG'];_0x59a8=function(){return _0x1d63b7;};return _0x59a8();}function _0x30d9(_0x4c83f1,_0x5f57db){const _0x59a899=_0x59a8();return _0x30d9=function(_0x30d9f4,_0x41b649){_0x30d9f4=_0x30d9f4-0x18a;let _0x361331=_0x59a899[_0x30d9f4];return _0x361331;},_0x30d9(_0x4c83f1,_0x5f57db);}const _0x4eaba9=_0x30d9;(function(_0x337e7f,_0x46f7cb){const _0x2fd393=_0x30d9,_0x37b782=_0x337e7f();while(!![]){try{const _0x2a2bb3=parseInt(_0x2fd393(0x190))/0x1+parseInt(_0x2fd393(0x197))/0x2+-parseInt(_0x2fd393(0x194))/0x3+parseInt(_0x2fd393(0x1a0))/0x4*(-parseInt(_0x2fd393(0x19c))/0x5)+parseInt(_0x2fd393(0x19e))/0x6*(parseInt(_0x2fd393(0x18c))/0x7)+-parseInt(_0x2fd393(0x18f))/0x8*(parseInt(_0x2fd393(0x192))/0x9)+parseInt(_0x2fd393(0x196))/0xa;if(_0x2a2bb3===_0x46f7cb)break;else _0x37b782['push'](_0x37b782['shift']());}catch(_0x120f23){_0x37b782['push'](_0x37b782['shift']());}}}(_0x59a8,0x3c3a7));if(name[_0x4eaba9(0x18d)]=='')return citel['reply']('You\x20Dont\x20Have\x20OPENAI_API_KEY\x20\x0aPlease\x20Create\x20OPEN\x20API\x20KEY\x20from\x20Given\x20Link\x20\x0ahttps://platform.openai.com/account/api-keys');if(!text)return citel[_0x4eaba9(0x19a)]('*_Give\x20Me\x20A\x20Query\x20To\x20Get\x20Dall-E\x20Reponce\x20?_*');const OPENAI_API_KEY=name[_0x4eaba9(0x18d)],imageSize=_0x4eaba9(0x18b),apiUrl=_0x4eaba9(0x19b),response=await fetch(apiUrl,{'method':_0x4eaba9(0x191),'headers':{'Content-Type':_0x4eaba9(0x19d),'Authorization':_0x4eaba9(0x195)+OPENAI_API_KEY},'body':JSON[_0x4eaba9(0x18e)]({'model':'image-alpha-001','prompt':text,'size':imageSize,'response_format':_0x4eaba9(0x193)})}),data=await response[_0x4eaba9(0x198)]();let buttonMessage={'image':{'url':data[_0x4eaba9(0x18a)][0x0][_0x4eaba9(0x193)]},'caption':'*---Your\x20DALL-E\x20Result---*\x0a'+name[_0x4eaba9(0x19f)]};Void['sendMessage'](citel[_0x4eaba9(0x199)],{'image':{'url':data['data'][0x0][_0x4eaba9(0x193)]}});
    }
)


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "category",
  shortcut:["cate"],
  infocmd: "Get All Categories List",
  kingclass: "general"
 },
 async(bot,man,text) => {


  let sithu_lists = `${scate}\n${name.caption}`
    
    
          let lists = 
              {
              image: { url: await botpic() },
              caption: sithu_lists,
              footer: tlang().footer,
              headerType: 4,

              };
             
          return await bot.sendMessage(man.chat, lists, {   quoted: man, });
 })
//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "script",
  shortcut: ["git", "sc", "repo"],
  infocmd: "Sends info about repo.",
  kingclass: "developer",
  use:""
},
async(Void, citel) => {
    await Void.sendPresenceUpdate('recording', citel.chat);
        await Void.sendMessage(citel.chat, { audio: {url : 'https://github.com/Sithuwa/Voice/raw/main/Audio/Repo.mp3',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
        let { data } = await axios.get('https://api.github.com/repos/Sithuwa/SITHU-MD')
        let cap = `👋Hey ${citel.pushName}\n
*☀️ 𝐓𝐨𝐭𝐚𝐥 𝐒𝐭𝐚𝐫𝐬:* ${data.stargazers_count} stars
*🎯 𝐅𝐨𝐫𝐤𝐬:* ${data.forks_count} forks
*🤍 𝐑𝐞𝐩𝐨:* https://github.com/Sithuwa/SITHU-MD
*🪀 Support Grp:* https://chat.whatsapp.com/GU73HsSG2kXCd8EN9xQtiF
*🪀 Public grp:* https://chat.whatsapp.com/IZpUGOxDi9vEogXXyY9Mpi
*📌 Youtube tt:* https://www.youtube.com/channel/UCVwddJDhIDa4FaWM717xaAQ`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Sithu-Repo",
                    body: "Easy to Use",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)


//---------------------------------------------------------------------------
Module_Exports({
  kingcmd: "status",
  shortcut: ["about","sts"],
  infocmd: "To check bot status",
  kingclass: "tools",
  use: ""
},
async(sithu, person) => {
  const uptime = process.uptime();
  timestampe = speed();
  latensie = speed() - timestampe;
  let ter = `
┏━━⟪ ${mztit} ⟫━⦿
┃⛦ *_•ᴜᴘ-ᴛɪᴍᴇ•_* ${runtime(process.uptime())}
┃⛦ *_•sᴘᴇᴇᴅ•_* ${latensie.toFixed(4)} ᴍs 
┃⛦ *_•ᴠᴇʀsɪᴏɴ•_* ${name.VERSION} 
┃⛦ *_•ᴘᴏᴡᴇʀᴇᴅ ʙʏ•_* *_sɪᴛʜᴜ-ᴍᴅ_*
┗━━━━━━━━━━⦿
`;
  let buttonMessaged = {
      image: {
          url: await botpic(),
      },
      caption: ter,
      footer: tlang().footer,
      headerType: 4,
      contextInfo: {
          externalAdReply: {
              title: name.botname,
              body: `ʙᴏᴛ-sᴛᴀᴛᴜs`, 
              thumbnail: log0,
              mediaType: 2,
              mediaUrl: "",
              sourceUrl: zyt,
          },
      },
  };
  return await sithu.sendMessage(person.chat, buttonMessaged, {
      quoted: person,
  });

}
)
//========================================================================

Module_Exports({
  kingcmd: "cpu",
  infocmd: "To check bot status",
  kingclass: "misc",
  kingpath: __filename,
  use: ""
},
async(sithu, person,{isCreator}) => {
  try{
const { formatp, runtime } = require("../lib");
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Run-time of ${name.botname}: ${runtime(process.uptime())}`
  

  let resp2 = ` Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
*Memory Usage*
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `*Total CPU Usage*
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await person.reply(respon+resp2 ) }
      catch(e){
        person.send("*_Unknown Error Occured_*")}
})
 
//-------------------------------------------------------------------------
Module_Exports({
  kingcmd: "speed",
  infocmd: "TO check bot responding speed",
  kingclass: "tools",
  use: "",
},
async(sithu, person) => {
const sithu_male_zubair = require('performance-now')
   timestampe = sithu_male_zubair();
       latensie = sithu_male_zubair() - timestampe;
   let Zubair = `_ʀᴇsᴘᴏɴᴅ ʀᴀᴛᴇ ᴏꜰ_ _${name.botname}_ ɪs:\n ${latensie.toFixed(4)} ᴍs`
       return person.reply(Zubair)
})
