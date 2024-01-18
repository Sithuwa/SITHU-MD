const os = require('os');
const { Sithu } = require('../lib')
const axios = require('axios')
const sɪᴛʜᴜ_speed = require('performance-now')
const sithu = new Sithu();

//--------------------------------------------------------------------------------

sithu.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});
