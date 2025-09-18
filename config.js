const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JESUS~CRASH~V1~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d4d0NhK1ZueFJXNStDdEZWck45T1J5VktrUFora0JMRGtid1JsSUczND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTSthWFh3eWJXZmh5dzhPaS9rQzdNN29mQ3Yzd2o1cDNzdjJZVVJwUGR4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRW1SY0RuSmRJT1JiSWVtOVJpNHRqQUVKeVBWNnkxbGEwc1ZWUEh4MjNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2WnJ2RGMyYnlCSXJwV2FxejF4Y0JQaXBITDIrTGtycEVKT0pWb0IrK1U0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFeThHQVZVZGZLRWJVS2tGd3BJelNrL25oeGZKRFpTTVlXQVJPK1FxbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5jczlyRVV3Z1lNVDBPMDlMdkF6aWVWcjUyUW9uZ1JSM1lyYkhiOXdVUlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lpeVFReFRnYlYyTFJ5SG96cWRKNitnbHRQK1NCNEV6cWtGejBDNU1Vaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2UyUEVPb0U2RVJnSUs4TVpyK2J3cC92YUhkaWNwK0JYV0dhaW9wWTN6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdoQU40WTMwcWtGUm1xWHVhd3JjeGRLWWQ5bTJYenR0YUVFa0lmT2FCbHpKNnFVc2xld0RmclR1SWozRjZrRVY5NkgzWkZtaWU1dUhSeEFWTXBVU2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IjFnMFdKVmk3VmZ3dGtaUEttVFMwZFlYNzJsTUtHRXFEckRNM2VtdGRhUG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTMwNTg5NjI0NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0MDE2NTQ4N0I0MjUzRjI2QjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODE4MzcxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQUxEU0MxTEUiLCJtZSI6eyJpZCI6IjEzMDU4OTYyNDQzOjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzQ1NzQzNzAwNjY1MzY6MkBsaWQiLCJuYW1lIjoiLiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGZDK1lzREVKNkNyOFlHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRmZtTjN6N0VjSjNPS0FTQTBnQ3RaOW1MWTlYaW5MZWdrUlF4TFdkQW1tUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzlMcEZza2xrMGlGRjdVNTFrTzgvMU0rVGFsMEVERytLRXQ2VEdKODcvRFRNMHFhc2MzZ0w2SUUvMGZCNDRaLytWakRSamFRVFBLZmhoM0p5akd6aFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhkRjRVZm84ZjJNcTl1Q1MyWnVVQTBZb1J1akVna0RHS2RrbkZ4UGVIaTdkdU5LSHJWNU9OMEF4M2x5SXNLaGdlTk8wdVNnc1NSWEh4YWsya3NyWWpnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTMwNTg5NjI0NDM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSWDVqZDgreEhDZHppZ0VnTklBcldmWmkyUFY0cHkzb0pFVU1TMW5RSnBrIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODE4MzcxMywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCQm4ifQ==",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MINI-JESUS-CRASH*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/x16nfd.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MINI-JESUS-CRASH",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MINI-JESUS-CRASH",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "13058962443",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DAWENS BOY",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by dawens boy*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x16nfd.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *MINI-JESUS-CRASH*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50942241547",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys"  // Bot's BAILEYS
};
