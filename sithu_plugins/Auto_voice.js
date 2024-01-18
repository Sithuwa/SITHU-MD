const { tlang,Module_Exports } = require('../lib')

const name = require('../Setting')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.github.com/Sithuwa/1f817ae8aefa4e73d16306a175f36906/raw'

/**
 Module_Exports({
            pattern: "bgmnsew",
            category: "owner",
            use: '',
        },
**/ 

Module_Exports({ on: "body" }, async (Void,citel,text)=> {

if (name.autoreaction === 'false' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
