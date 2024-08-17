const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "17N1zJ4T#fAMwEcxtbSiGIK3LttvAbmS81lBnOgSA-y9-jCc4s0c",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/87e7ae0d50a3fa8f1ff4e.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ   ɪ   ᴀᴍ  ᴄʏʙᴇʀ-ᴍᴅ 👋",
};
