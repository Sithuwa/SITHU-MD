const os = require('os');
const { Client } = require('../lib')
const axios = require('axios')
const sɪᴛʜᴜ_speed = require('performance-now')
const client = new Client();

//--------------------------------------------------------------------------------

client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});
