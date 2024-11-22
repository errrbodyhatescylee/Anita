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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "27615045572, 27849730363";
global.owner = process.env.OWNER_NUMBER || "27607287080";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0NHZm1UN2pjT0tONVBaNTFnQTgrY2dnZndYU1NnaU10WmhtWU0rdDhFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnlNdE1tdVgxeUkybmZ1MjhaQm93cUpLdVB2QjUwMFlqWUtadVF5RC9qRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SXhtdTFwK3MwdURscXpoTjBSNlB1TTRjV1Y4bkRDa0F1RCtNMS9DemxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5UzQvbDlxbkw5RERVMkNsVjNyWENRT2RkWkszMzhyTDRFS1dMdFhnSVhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBOXIzSjJLTkxMR0JvZ0o1OWd6VU01c3dFQ0lVRVd1TUpZRDhvZHNlVzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRKdUhYTFVIK2s2Nm9wTytsWitMT1hpamw5QUR1SkpnVldnVEVsS2FqaE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtQVkZtcS96bk1YSXh2R0VmZkwvNnBBNjlFQ0p1ZXczZXZqMEk5UmxYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUExPMG9aU2ZZbXhzMDllUlhJKzZhRDNlekhaMUl4YzIyeG1QMmkrOVR5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii93dkR4Q3o4OGREZGEzSGlFRGlxZGovQ0loV1U5Z050TU1IYzhFaFZ0ald3TTdieDFCakQ4b1E5QVhjQi9zMzNuaktYSEVTZ2RiQ3BKdUVKS1FmeUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJaTVlFYmZCZW9wVTlDY1ZJNi9aN2RxRUdTdVFLWUVlMEtncGtTbERuNllVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjA3Mjg3MDgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyRkRBRTA3Q0NFNkZEMDUwMkU1NUQ3MUJGRTAzQTNGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzIyODYwMjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjA3Mjg3MDgwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBOEZFNjM0NjdERTRGOEY2QTc5NDM2MzdENDI2Q0ZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzIyODYwMjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZXLUluZXcxUnJpM1RWN3lIcVpIdHciLCJwaG9uZUlkIjoiYjhiNjhhODQtNGFmNS00NmRlLWJmNGQtZWRiMDJmZjQxN2UwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFVS3BKa29jZHNpVHlOODRISzdBZUd4VEZGYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEZE1vNGFXUU9JbTJSSnNxM1pvbEZ5Ym8yQ0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUERCTVlOR0QiLCJtZSI6eyJpZCI6IjI3NjA3Mjg3MDgwOjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B6eTliY0RFTGFzZ3JvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im54S3E5SFZrQ2NyT3BialdSbXFpdngwdVlnOUw0QzMyTTQyYVd1MVZqMmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdLYWthb3FHcnJIM0xPdnBFTkVOODBZcFVERjYramxweHNCaWJRd1U4Tmg5QXdmNm80aGlUZlNyS1dITDQvcDREUzFVRGxBWkR6MUhiSkxFNFNLaUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlZEhEeStvK3dORE0yeXhVMWdWNzJld1RDZDdtZ1c5eHltc0x5UDFhQjBtbTlOcDFlZFE2dmF1YzJJYW42M29ac3Y0Y2pPTFUvRWJYMWN4MEhSS1RBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjA3Mjg3MDgwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjhTcXZSMVpBbkt6cVc0MWtacW9yOGRMbUlQUytBdDlqT05tbHJ0Vlk5byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjI4NjAyMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLSW4ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸",
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
