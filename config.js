const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "ANTAGONISTE~MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJicWc4STJXbkdaTDJMZ1luMjFRYndWV3FnSk5rWHFta1l1VXptMFhWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE1pODhKbHBVKzhVb2VOTnFBZnRqUnl3bVNkd21rbjNDV0pLYTl4K0NDTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTUNSTHFFY3BWSTdJZ1E2dDVReENXeGNUWHMzbDg3dGc0VGRRTzNjZm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTXJCUUdkMGhwK05YV3dhTVl6V1Q3bmxBVmVBcmhLY2pFbk9iTG9pem1vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLYzVTODJTR3p0NGN5RmxMaE1rbXJFQ0o5emFzUGlobmVCaE9tenhLMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBoNzY2Y0RQd28yNjYrSS91a3NOblBhcnRkTkExK0lidEZBMXhZYnhCeFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdWRlZSZXJiNC92Z3poVm53d3pYV0dCSVBaSlppMDYxRUcxRFg4bEFuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk5wWmRjTHZodjRLYjEyTUl5OElwYXlQeVR5VXp6anpvaktlNHlUaU55bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxkNDNJWld4NGI0Z0pLenhGQjNRdlpjYzh3Rm1JQjQ0ODV1ZFJ5OGtGWXF3b0szTitKcjVEbmNsanRTbC8xcTRCc0drbmtMRmVaUzFCWEJoZWhSM0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiI2TkZEcU5xYWZQT1QrWjM1VFB6NHI2THFENEZ1YWNJUUtLbHR0YXdHQWJJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQyMzY0Njc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBMzJCOUMzQTQ2RjYwMTA0MTlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkwMDE5Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQyMzY0Njc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBN0Q0OTVGMzQ0QkUxMDQ3OTRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkwMDE5NzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhTTllTRU5DIiwibWUiOnsiaWQiOiI1MDk0MjM2NDY3Nzo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIHwnZCT8J2QgyDwnZCG8J2QjvCdkIMg8J2Qg/CdkIDwnZCW8J2QhPCdkI3wnZCSIiwibGlkIjoiMzk1NjU5MjY2NDE5MTA6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09haDk5Y0VFT3o2NE1ZR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRpSDVZMGNxWUpjeXBiTVBwU3BYNFZKTU9hY1FjcDRqOHFxN1crY2NObjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InFzdDB3M3JJM28xYnljZWZoUU5SWG5vTFpzV1ZaNUpCcXgydTRLOG00emcxOVRqT0FvWUt6c3NBOTBlS0ZOdEhHd2ppbkpUa2hQUEZsUi9WdEhxRkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuN2tVSlNPcDZvOEhVbi9DMUdqbURLVHdmYkZLWDRJMGk2ZUlqbVUrS1FJZkF0MDdpNDQrSllaT1g2RGNrWVJzcDhpRmszVVZGTkdMaU1QQzZjc3REdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQyMzY0Njc3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTRoK1dOSEttQ1hNcVd6RDZVcVYrRlNURG1uRUhLZUkvS3F1MXZuSERaLyJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MDAxOTY2LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5sTSJ9",
  OWNER_NUMBER: (process.env.OWNER_NUMBER || "13058962443") + "@s.whatsapp.net",
  OWNER_NAME: process.env.OWNER_NAME || "DAWENS BOY",
  DEV: (process.env.DEV || "50942241547") + "@s.whatsapp.net",

  // BOT INFO
  BOT_NAME: process.env.BOT_NAME || "MINI-JESUS-CRASH",
  STICKER_NAME: process.env.STICKER_NAME || "MINI-JESUS-CRASH",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by dawens boy*",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/x16nfd.png",

  // WELCOME / GOODBYE / ADMIN
  WELCOME: toBool(process.env.WELCOME, "true"),
  GOODBYE: toBool(process.env.GOODBYE, "true"),
  ADMIN_EVENTS: toBool(process.env.ADMIN_EVENTS, "true"),      // Logs normal promote/demote
  SECURITY_ALERT: toBool(process.env.SECURITY_ALERT, "true"),  // Kick unauthorized promotes/demotes

  // STATUS
  AUTO_STATUS_SEEN: toBool(process.env.AUTO_STATUS_SEEN, "true"),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY, "true"),
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT, "true"),
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MINI-JESUS-CRASH*",

  // AUTO FEATURES
  AUTO_REACT: toBool(process.env.AUTO_REACT, "false"),
  CUSTOM_REACT: toBool(process.env.CUSTOM_REACT, "false"),
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  AUTO_VOICE: toBool(process.env.AUTO_VOICE, "false"),
  AUTO_STICKER: toBool(process.env.AUTO_STICKER, "true"),
  AUTO_REPLY: toBool(process.env.AUTO_REPLY, "true"),
  AUTO_TYPING: toBool(process.env.AUTO_TYPING, "false"),
  AUTO_RECORDING: toBool(process.env.AUTO_RECORDING, "true"),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE, "false"),

  // ANTI SYSTEM
  ANTI_LINK: toBool(process.env.ANTI_LINK, "true"),
  ANTI_LINK_KICK: toBool(process.env.ANTI_LINK_KICK, "true"),
  DELETE_LINKS: toBool(process.env.DELETE_LINKS, "true"),
  ANTI_BAD: toBool(process.env.ANTI_BAD, "true"),
  ANTI_VV: toBool(process.env.ANTI_VV, "true"),
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
  GHOST_MODE: toBool(process.env.GHOST_MODE, "true"),
  ANTI_CALL: toBool(process.env.ANTI_CALL, "true"),
  

  // ALIVE
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x16nfd.png",
  ALIVE_MSG: process.env.ALIVE_MSG || "> Zinda Hun Yar *MINI-JESUS-CRASH*⚡",

  // OTHER
  MENTION_REPLY: toBool(process.env.MENTION_REPLY, "true"),
  MODE: process.env.MODE || "public",
  PUBLIC_MODE: toBool(process.env.PUBLIC_MODE, "true"),
  READ_MESSAGE: toBool(process.env.READ_MESSAGE, "false"),
  READ_CMD: toBool(process.env.READ_CMD, "false"),
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ADMIN ACCESS
  SUDO: process.env.SUDO || "989910713754,13058962443",

  //dawens boy
  TWILIO_SID: process.env.TWILIO_SID || "",
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || "",
  TWILIO_NUMBER: process.env.TWILIO_NUMBER || "",
};
