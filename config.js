//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/DNCxQFYjgmqEtRlVct9Gqj";
global.website = process.env.GURL || "https://chat.whatsapp.com/DNCxQFYjgmqEtRlVct9Gqj";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "917566637984";
global.owner = process.env.OWNER_NUMBER || "616260273863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNLUUo2ZkRMM1VHUitxOVNteGxCZ2cyOXFWbXBpdEEvaEU5Y09tVVJuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMm0zQTJjVlZvbDg3Ujg3OXJwTzZGNGZwMkhjcno1aGVwSnl1TFd2dTRTND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QlRtL1dFZ2VCRk90V3N5dElEamxpRHl6WVQzaUVhdEk2bm9sV0lUREVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQVZSWmRVazJqWHYzWDA2RXo2S1FrWlVlMzltUUpKdmlhN240VFFIY1JvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKVlI1OGFqRFRLTTI0UWI0bkdMNThPSFJZZ0hha2ZiM0lkTkJlQ3lVbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklYMDZpSWozdzRFL3BJNjZuSGlLNFdBemhOb1NSelAra3owejI3NTBIMEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUw5YzVMWWNjZmNYSjFONnR1R0UrRzNkbkljZXNvdnkrU0l2dmRaOCtIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ0KzhnTWFZbnVOVGRSZm9wTms0bXJKMDUxYkVMRkdrYmV4aUk3Znd4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlrY1JSZTdIZEdKYklYaEh0UU5Jc2ZMYnJaRHhhVmRERlYwK1FkRHlGaVhVMk5zZnF4WThwWHVHbUVka2M0VVo3c1hyV1ByaklYVkV1Qll2aU16a0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJJSlUrVm1pSkZJUUxEMHVyT2lDU01neXFSd1RWQ3BXYXBSamhJOGovdU1VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPQ2kwQjRGRFNJS0d3ZnVnWkRySTFnIiwicGhvbmVJZCI6ImM1NWVjNWYwLTM4NDUtNGZjOC05OGVhLWVlNTRhZGE5ODFhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbEhubE5FaHVyTGtwSi9pZmxDU1d4RHdVZjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHEyTUVJbC9iUnNZTGdhREtmRGFMazRDZzlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5CTFZZMVJRIiwibWUiOnsiaWQiOiI5MTc1NjY2Mzc5ODQ6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHJ4Z2RZQkVNZWl2YlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibWFnY1VZTGhUbldQR2YwdlFKaWErbE1rbm9nY0JscG1yeFFOUEVkNXdFVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ3htZlRnMWZLOVB5dmg3UnV2YXM3QnVlZlQwdDFrM2loYW9HSXJ0UHZGUWo4bGRjdmlodGg3eUZLN1o3aktlUm1wODEvYUp4OUJRMUtIVkY1c3RpRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVMbU1tQythckFCU1Q1blA1ZCtrZE4vc2UvZTR4eG80Mnp2NFdvTXMwYlJCUlZBRWZ2MWJURXV6aFZUZUNCNFgrNlAweEVlb3hpRjgvYzZobUo5cENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3NTY2NjM3OTg0OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWm1vSEZHQzRVNTFqeG45TDBDWW12cFRKSjZJSEFaYVpxOFVEVHhIZWNCRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc2NTY1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQR04ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝞛𝞒 𝙎𝞖𝙐𝞑𝞖𝞓𝞛™`",
  author: process.env.PACK_AUTHER || "𝞛𝞒 𝙎𝞖𝙐𝞑𝞖𝞓𝞛",
  packname: process.env.PACK_NAME || "𝞛𝞒 𝙎𝞖𝙐𝞑𝞖𝞓𝞛",
  botname: process.env.BOT_NAME || "𝞛𝞒 𝙎𝞖𝙐𝞑𝞖𝞓𝞛",
  ownername: process.env.OWNER_NAME || "𝞛𝞒 𝙎𝞖𝙐𝞑𝞖𝞓𝞛",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
