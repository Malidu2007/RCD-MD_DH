//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94741992101";
global.sudo = process.env.SUDO || "94741992101,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94741992101,94767748006";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JpV1ZSbHQwZ2RNZmVraDNFMjBLbzJLbGRmZ1B1NzFWSlhsUWgvZUJFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHp0ZlBLbjVhZDJyVzVST1UycjVYdTBZbU1zREFvNVBVTER0T0J4ajFFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTlMvWE5zWmZ5dnNURytkL1pxKzM1TFlLVjFWeFB5S2JxSFdGRWZWb0VrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtY0puaEFxWTh4UlJSYStCb3BQSW96ZXd3RllCcGRNNHdNbTJPMVdONmlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEVm9SRkx5OHFjT3lNd3o5a1lzK25FRVJTV0lDcWNVV1hJK3VTK0Q3Rlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQY1JheXlzZkZRcEQzL1JsWjk3SjFmVmk2MUErVkZEMlp3OXZ2T2R1MTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURxMlpKby94aUZBdzhTMElqYWc3YUJTV2V1VkJUK0V0U3NEN2pDYWIxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkIrWGkrTFIydjBmR2UzcEFWU21vZ1RlQWlSQUR3WUo0T0I3cmNUVUtIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjljL0Qvb2RpNVdDNUNUR0pqUDZUTzVDZ3pGcXUvakFOd2wxSnBvYTRJQktrV3VFanhEaXdPWHN1eEg2dld3QjFiTjFvVFZJek9CTzc5RUhsOXZka0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJtZjRQdklQQjJUZDZIa3NsTk9LeFdxaCt5RUFRYzNZSyswZnlSczlwZTk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItQnNhZDR4X1RZNjZoVmpTaDZGXzF3IiwicGhvbmVJZCI6IjVkY2Y3NWEyLWRiYWQtNGJmOS05MmJmLTQ3YzU0NDk5Njk1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJValpsdDFlQ3BqaTl0blowNUFPOGg2N3JpMm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM081TjZXUmVYUGxzbE54MkRNa25ZcDFNRDJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkzOEQxTVRWIiwibWUiOnsiaWQiOiI5NDc2Nzc0ODAwNjo2NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ+SGVzaHUgYmJofiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1NLaXZjRkVLdnV0TFVHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNW9tS3dmS1NleG5rTVY5Yk9mQXF4Mk9DamZSU3RvRWJrYitkSzNscjl5ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWXRSdVhqU0VFQlN5Q0pRYmViSVhleUx0cXora1FyV2JGUDJYK0dxaWxtVERpOWswejFTTDgxTytkcjJSQUhsSElBUmJUUUZQakJRdnBqRlhQY2tLRFE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJRTENZL0NGTFVNbm4rbkFCMlJKWUpVbFRGRkx4bjdIc014N2pBTStrODdCblNwMlp3R2hHaG5vcGRTNC9rUVpCZUxVSS9wWUFVVDNBcmtZRis0QkRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njc3NDgwMDY6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWFKaXNIeWtuc1o1REZmV3pud0tzZGpnbzMwVXJhQkc1Ry9uU3Q1YS9jdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYyNzg5Nn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
