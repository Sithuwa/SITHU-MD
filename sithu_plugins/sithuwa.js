const os = require('os');
const { Sithu } = require('../lib')
const axios = require('axios')
const sɪᴛʜᴜ_speed = require('performance-now')
const client = new Sithu();

//--------------------------------------------------------------------------------

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});
