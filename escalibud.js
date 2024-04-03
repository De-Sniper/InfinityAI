
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const speed = require("performance-now");
const os = require('os');
const { cpus, totalmem, freemem } = require("os");
const osu = require("node-os-utils");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const ytsr = require("ytsr");
const acrcloud = require ('acrcloud');
const fonts = require('./lib/fonts.js');
const menufont = require('./lib/menufonts.js');
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
const path = require('path');
const uploadImage = require('./lib/uploadimg.js');
const translate = require('translate-google-api');
const ytdl = require("ytdl-core");
const { rentfromkress, conns } = require('./rentbot');
const advice = require("badadvice");
const search = require('aptoide-scraper').search;
const download = require('aptoide-scraper').download;
const moment = require('moment-timezone');
const { Configuration, OpenAIApi } = require('openai');
const {c, cpp, node, python, java} = require('compile-run');
const githubstalk = require('./lib/githubstalk');
        const photooxy = require('./lib/photooxy')
const axios = require('axios');
const { addPremiumUser, getPremiumExpired, getPremiumPosition,  expiredPremiumCheck, checkPremiumUser, getAllPremiumUser,} = require('./lib/premium');
/*const { getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc');*/
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc');
let { TelegraPh, UploadFileUgu, webp2mp4File } = require('./lib/uploader');
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'));
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const verifieduser = JSON.parse(fs.readFileSync('./database/user.json'));
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'));
let register = JSON.parse(fs.readFileSync('./database/registered.json'));
const setik = JSON.parse(fs.readFileSync('./database/setik.json'));
const vien = JSON.parse(fs.readFileSync('./database/vien.json'));
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'));
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const pingSt = new Date();
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided





module.exports = escalibud = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    //var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const prefix = process.env.PREFIX || '';
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;    
const mongoDBUrl = process.env.MONGO_DB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority';

let akinator = global.db.data.game.akinator = []
let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();

const author = process.env.STICKER_AUTHOR || 'KRESSWELL';
const packname = process.env.STICKER_PACKNAME || 'InfinityAI';

    const kress = (m.quoted || m); 
         const quoted = (kress.mtype == 'buttonsMessage') ? kress[Object.keys(kress)[1]] : (kress.mtype == 'templateMessage') ? kress.hydratedTemplate[Object.keys(kress.hydratedTemplate)[1]] : (kress.mtype == 'product') ? kress[Object.keys(kress)[0]] : m.quoted ? m.quoted : m; 
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
  
      
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
const wapresence = process.env.WA_PRESENCE || 'recording';
    const autoread = process.env.AUTOREAD || 'TRUE';
const autobio = process.env.AUTOBIO || 'TRUE';
const dev = process.env.OWNER || '254798242085'

    const from = m.chat;
   const isRegister = register.includes(m.sender);
const isPrem = premium.includes(m.sender);
    	const isUser = verifieduser.includes(m.sender);
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hours, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minutes, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Seconds") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 

 const timestamp = speed(); 
   const infinityspeed = speed() - timestamp 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
  const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds
//Uptime
  const uptimeMessage = `*Hello,Infinity AI is alive now since ${day} D ${hours} H ${minutes} M ${seconds} S*`;

  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minimum*\n *⏱️ ${seconds} Seconds*\n`;
 const devkresswell = dev.split(",");
    const Owner = devkresswell.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

    // Group
    
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    const participants = m.isGroup ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
    const isBanchat = m.isGroup ? bancht.includes(from) : false;
    const isNsfw = m.isGroup ? nsfw.includes(from) : false;
      const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
const admin = process.env.ADMIN_MSG || 'Admin Command Only';
    const group = process.env.GROUP_ONLY_MSG || 'Use this command only in groups!!';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'I need to be admin to perform that task'
const keyopenai ="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";
    const NotOwner = process.env.NOT_OWNER_MSG || 'Owner Command';
const NotNsfw = process.env.NSFWMSG || 'Nsfw is not activated here';
const wachannel = "https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e";
const isdone = process.env.DONEMSG || 'Request successful!!';

//Bot status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                        return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
                        last.speed += cpu.speed / length
                        last.times.user += cpu.times.user
                        last.times.nice += cpu.times.nice
                        last.times.sys += cpu.times.sys
                        last.times.idle += cpu.times.idle
                        last.times.irq += cpu.times.irq
                        return last
        }, {
            speed: 0,
                        total: 0,
                        times: {
                            user: 0,
                            nice: 0,
                            sys: 0,
                            idle: 0,
                            irq: 0
            }
        })
async function doReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await client.sendMessage(m.chat, react);
    }

function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}


async function loading () {
var Ayushlod = [
"`I`",
"`N`",
"`F`",
"`I`",
"`N`",
"`I`",
"`T`",
"`Y`",
"` `",
"`A`",
"`I`",
"`INFINITY-AI...`",
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < Ayushlod.length; i++) {
await client.sendMessage(from, {text: Ayushlod[i], edit: key });
}
}
 ///antilink 
 if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmin) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nyou are a group admin thats why i wont kick you, but remember from next time`
if (isAdmin) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (Owner) return reply(bvl)
        await client.sendMessage(m.chat,
                            {
                                delete: {
                                    remoteJid: m.chat,
                                    fromMe: false,
                                    id: m.key.id,
                                    participant: m.key.participant
                                }
                            })
                        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  let smallinput = budy.toLowerCase()


const infinityfeature = () =>{
            var mytext = fs.readFileSync("./escalibud.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
}
    // Function to filter JPG and PNG files from a directory
const getRandomImage = (directory) => {
  const files = fs.readdirSync(directory)
    .filter(file => {
      const filePath = path.join(directory, file);
      return fs.statSync(filePath).isFile() && (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));
    });

  if (files.length === 0) return null;

  const randomFile = files[Math.floor(Math.random() * files.length)];
  const randomFilePath = path.join(directory, randomFile);

  if (fs.existsSync(randomFilePath)) {
    return randomFilePath;
  } else {
    console.log(`Selected file ${randomFile} does not exist.`);
    return null;
  }
};

const imageDirectory = './database/media/menu';
  const randomImage = getRandomImage(imageDirectory);

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enter your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const mariayresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: '𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            mariayresult.push(result)
        }
    resolve(mariayresult)
    })
}

try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await
client.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        client.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Status Download Successful: by InfinityAI*');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await client.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        client.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Status Download Successful: by InfinityAI*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}

        //TicTacToe
            this.game = this.game ? this.game : {}
            let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
            if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
            if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
            m.reply({
            '-3': 'Game telah berakhir',
            '-2': 'Invalid',
            '-1': 'Invalid Position',
            0: 'Invalid Position',
            }[ok])
            return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            if (isSurrender) {
            room.game._currentTurn = m.sender === room.game.playerX
            isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Wins!!🥳` : isTie ? `Game Tie` : `Current Player: ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            if (isTie || isWin) {
            delete this.game[room.id]
            }
            }
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./escalibud.jpg')}}}
//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
                                if (budy === anji){
                                        result = fs.readFileSync(`./media/sticker/${anji}.webp`)
                                        client.sendMessage(from, result, sticker, { quoted: mek})
                                        }
                        }
                        for (let anju of vien){
                                if (budy === anju){
                                        result = fs.readFileSync(`./media/vn/${anju}.mp3`)
                                        client.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
                                        }
                        }
                        for (let anjh of imagi){
                                if (budy === anjh){
                                        result = fs.readFileSync(`./media/image/${anjh}.jpg`)
                                        client.sendMessage(from, result, image, { quoted: mek})
                                        }
                                  }

//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !Owner)return 
}
if (wapresence === 'recording') { 

  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing') { 

  client.sendPresenceUpdate('composing', m.chat);
    }
    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;


if (budy.toLowerCase() === `register`){
            if (isRegister) return 
                    register.push(sender)
                   
                    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
                    regmess = `Verification success\n\nPlease send menu to view menu`;
                    client.sendMessage(from, regmess, text, { quoted: fkontak})
}          /*if (!mek.key.fromMe && banChats === false) return*/


const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)


if (!client.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }
    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }

async function getYoutubeInfo(url) {
    try {
        const info = await ytdl.getInfo(url);
        return info;
    } catch (error) {
        console.error('Error fetching video info:', error);
        return null;
    }
}

// Function to format video duration
function formatDuration(duration) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    return `${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds}s`;
}

// Example usage within your message handling logic
if (m.text) {
    const lowerText = m.text.toLowerCase();

    if (lowerText.includes('.ytdl')) {
        // Fetching video information
        const urls = m.text.match(/(https?:\/\/[^\s]+)/g);
        if (urls && urls.length > 0) {
            const videoUrl = urls[0]; // Assuming only one URL is provided
            const info = await getYoutubeInfo(videoUrl);

            if (info) {
                const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
                const videoDetails = info.videoDetails;

                const captionMessage = `
╭═══════════════════╮
│ *Video Details*
│
│ *URL:* ${videoUrl}
│ *Title:* ${videoDetails.title}
│ *Views:* ${videoDetails.viewCount}
│ *Duration:* ${formatDuration(videoDetails.lengthSeconds)}
│ *Size:* ${formatBytes(videoDetails.lengthBytes)}
│1. Download as Audio
│2. Download as Video
╰═══════════════════╯
`;

                await client.sendMessage(m.chat, {
                    image: { url: thumbnailUrl },
                    caption: captionMessage,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: `InfinityAI`, // Assuming botname is a string
                            sourceUrl: `https://www.infinityhackers.tech/`, // Assuming global.link is a string
                            body: `Bot By Kresswell Muiruri` // Assuming global.owner is a string
                        }
                    }
                }, { quoted: m });
            }
        } else {
            await client.sendMessage(m.chat, { text: 'No valid URL found in the message.' }, { quoted: m });
        }
    } else if (m.quoted && (lowerText === '1' || lowerText === '2')) {
        const quotedText = m.quoted.text.toLowerCase();
        const isAudioMenu = quotedText.includes('download as audio');
        const isVideoMenu = quotedText.includes('download as video');

        if (isAudioMenu && lowerText === '1') {
            // Handle download as audio
            const audioUrl = storedUrl; // Use stored URL
            if (audioUrl) {
                const audioStream = ytdl(audioUrl, { filter: 'audioonly' });
                await client.sendMessage(m.chat, { audio: audioStream }, { quoted: m });
            } else {
                await client.sendMessage(m.chat, { text: 'No valid audio URL found in the quoted message.' }, { quoted: m });
            }
        } else if (isVideoMenu && lowerText === '2') {
            // Handle download as video
            const videoUrl = storedUrl; // Use stored URL
            if (videoUrl) {
                const videoStream = ytdl(videoUrl, { filter: 'audioandvideo', quality: 'highest' });
                await client.sendMessage(m.chat, { video: videoStream }, { quoted: m });
            } else {
                await client.sendMessage(m.chat, { text: 'No valid video URL found in the quoted message.' }, { quoted: m });
            }
        } else {
            // Handle invalid selection
            await client.sendMessage(m.chat, { text: 'Invalid selection. Please select option 1 or 2 from the menu.' }, { quoted: m });
        }
    }
}


    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

        

const cmdAi = ["Ai", "ai-img", "Gpt", "Dalle"];
const cmdTool = ["Tempmail", "Checkmail", "Info", "Trt", "Snapshot", "snapshotfull", "Tovv"];
const cmdGrup = ["Link", "gpp", "Setname", "Setdesc", "Add", "Kick", "HideTag", "Tagall", "AntiLink", "Mute", "Promote", "Demote", "Revoke", "Poll", "closein" ,"openin", "NSFW"];
const cmdDown = ["Apk", "Facebook", "Pin", "XnxxSearch", "Xnxxdl", "Gitclone", "Gdrive", "Igvideo", "Ytmp3", "Ytmp4", "Play", "Song", "Video", "Tiktok", "statusdown"];
const cmdSearch = ["Play", "Yts", "Imdb", "Google", "Gimage", "Pinterest", "Wallpaper", "Wikimedia","Subfinder","Weather","Ytsearch", "Ringtone", "Lyrics", "nsfwmenu"];
const cmdFun = ["Delttt", "Tictactoe", "checkdeath", "Couple", "Rate", "When"];
const cmdConv = ["Sticker", "smeme", "Tourl", "Styletext", "Fontchange", "Fancy", "hd", "attp", "attp2", "attp3", "ttp", "ttp2", "ttp3", "ttp4", "ttp5", "qc"];
const cmdMain = ["Ping", "Alive", "Runtime","Owner", "Menu", "Listpc", "Listgc", "Listonline", "Buypremium"];
const cmdOwner = ["Setvar", "Getvar", "Join", "Leave", "Block", "Unblock", "Bcgc", "Bcall", "botpp", "Eval", "Addprem", "DelPrem"];
const cmdStalk = ["Nowa", "Truecaller", "InstaStalk", "Github", "fetch"];

function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
function getRandomFontStyle() {
  const availableFontStyles = Object.keys(menufont);
  const randomIndex = Math.floor(Math.random() * availableFontStyles.length);
  return availableFontStyles[randomIndex];
}
function convertToFontStyle(text, style) {
    let styledText = '';

    if (fonts[style]) {
        for (const char of text) {
            styledText += fonts[style][char] || char;
        }
    } else {
        styledText = text;
    }

    return styledText;
}
function generateMenu(cmdList, title) {
    if (!Array.isArray(cmdList)) {
        console.error('Invalid cmdList. It should be an array.');
        return '';
    }

    const randomSymbol = getRandomSymbol();

    const formattedCmdList = cmdList
    .sort((a, b) => a.localeCompare(b))
    .map((v) => `│${v}`).join('\n');

    return `
╭───═❮ ${title} ❯═───❖
│ ╭─────────────···▸
${formattedCmdList.split('\n').map(item => `│${item ? ' ' + item.trim() : ''}`).join('\n')}
│ ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
}

const introTextConvert = generateMenu(cmdConv, '𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥');
const introTextAdmin = generateMenu(cmdGrup, '𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextOwner = generateMenu(cmdOwner, '𝗢𝗪𝗡𝗘𝗥');
const introTextMain = generateMenu(cmdMain, '𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextDownload = generateMenu(cmdDown, '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥');
const introTextStalk = generateMenu(cmdStalk, '𝗦𝗧𝗔𝗟𝗞');
const introTextSearch = generateMenu(cmdSearch, '𝗦𝗘𝗔𝗥𝗖𝗛');
const introTextFun = generateMenu(cmdFun, '𝗙𝗨𝗡 𝗠𝗘𝗡𝗨');
const introTextTool = generateMenu(cmdTool, '𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨');
const introTextAi = generateMenu(cmdAi, '𝗔𝗜 𝗠𝗘𝗡𝗨');

const menuMessage = `
╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ*❯═───❖
│╭─────────────···▸
││▸ ➊ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
││▸ ➋ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
││▸ ➌ ɢʀᴏᴜᴘᴍᴇɴᴜ
││▸ ➍ sᴛᴀʟᴋᴍᴇɴᴜ
││▸ ➎ sᴇᴀʀᴄʜᴍᴇɴᴜ
││▸ ➏ ᴛᴏᴏʟᴍᴇɴᴜ
││▸ ➐ ғᴜɴᴍᴇɴᴜ
││▸ ➑ ᴀɪᴍᴇɴᴜ
││▸ ➒ ᴍᴀɪɴᴍᴇɴᴜ
│╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
Type allmenu for full command list 
`;

const subMenus = {
    '1': introTextConvert,
    '2': introTextDownload,
    '3': introTextAdmin,
    '4': introTextStalk,
    '5': introTextSearch,
    '6': introTextTool,
    '7': introTextFun,
    '8': introTextAi,
    '9': introTextMain,
};
if (m.text) {
    const lowerText = m.text.toLowerCase();

    if (lowerText.includes('.help')) {
        m.reply(menuMessage);
    } else if (/^\d+$/.test(lowerText) && m.quoted) {
        const quotedText = m.quoted.text.toLowerCase();

        if (quotedText.includes(menuMessage.toLowerCase())) {
            const selectedNumber = lowerText;
            const subMenu = subMenus[selectedNumber];

            if (subMenu !== undefined) {
                m.reply(subMenu);
            } else {
                m.reply('Invalid menu number. Please select a number from the menu.');
            }
        }
    }
}

    if (isCmd2) {
      switch (command) {
        


case 'menu':
case 'allmenu': {
  
    await doReact("🚀");
    let a = db.data.users[m.sender];
    
function _0xab6b() {
    const _0x4b2b41 = [
        '*\x0a│\x20*⁺◛˖𝐏𝐫',
        '┈•\x0a│\x20𝗛𝗼𝘄𝗱𝘆',
        '𝐞𝐦𝐢𝐮𝐦*\x20:\x20*',
        '⁺◛˖𝐍𝐮𝐦𝐛𝐞𝐫*',
        '─────────❃',
        'lic*\x0a╰────',
        '𝐚𝐦𝐞*\x20:*╚»★',
        '42968CDcBGi',
        '1833670PIgWLD',
        '\x20ＩＮＦＩＮＩＴＹ\x20',
        '\x0a╭──═❮\x20*ミ★',
        '*\x0a╰───────',
        '\x0a\x0a✶⊶⊷⊶⊷❍『ʙ',
        '*\x0a│\x20*⁺◛˖𝐌𝐨',
        '𝐝𝐞*\x20:\x20*Pub',
        '8973966JnLXPU',
        '180SsnQdv',
        ']*\x0a│\x20*⁺◛˖𝐔',
        '𝐧𝐟𝐨彡★*\x20❯═─',
        '^)\x20ＫＲＥＳＳＷＥ',
        '𝐩𝐭𝐢𝐦𝐞*\x20:\x20*',
        '18lGzbwZ',
        'pushName',
        'ＡＩ\x20★彡*\x20❯═─',
        'split',
        '┈•\x0a│\x20*⁺◛˖𝐍',
        '𝐚𝐦𝐞*\x20:\x20*◔͜͡◔',
        'uptime',
        'Ｉ★«╝*\x0a│\x20*⁺',
        'ʀs\x20』❍⊶⊷⊶⊷✶',
        '\x20*◔͜͡◔\x20',
        '──────────',
        'Ｉｎｆｉｎｉｔｙ\x20Ａ',
        '5AhUVxF',
        'ʏ\x20ᴛʜᴇ\x20ɪɴғɪ',
        '\x20*⁺◛˖𝐁𝐨𝐭\x20𝐍',
        '\x20:\x20*',
        '\x0a│\x20*⁺◛˖𝐏𝐫𝐞',
        'ɴɪᴛʏ\x20ʜᴀᴄᴋᴇ',
        '☆*\x20❯═─┈•\x0a│',
        '𝐦𝐞*\x20:\x20*(^▽',
        '◛˖𝐎𝐰𝐧𝐞𝐫\x20𝐍𝐚',
        '──❃\x20\x0a╭──═❮',
        'ＬＬ\x20(✿^▽^)*',
        'sender',
        '\x20🚀\x20◔͜͡◔*\x0a│\x20*',
        '》𝗕𝗼𝘁\x20𝗜𝗻𝗳𝗼《',
        '5322448gAErMF',
        '4066503hBjWZh',
        '\x20*★ミ𝐔𝐬𝐞𝐫\x20𝐈',
        '3710622PPizJJ',
        '\x20◔͜͡◔*\x20👋\x20\x20\x0a╰',
        '9315296CFxBfI',
        '\x0a\x0a╭──═❮\x20*☆',
        '𝐟𝐢𝐱*\x20:\x20\x20*['
    ];
    _0xab6b = function () {
        return _0x4b2b41;
    };
    return _0xab6b();
}
const _0xa18fd4 = _0x5be7;
function _0x5be7(_0x24f6de, _0x1355f6) {
    const _0x47409d = _0xab6b();
    return _0x5be7 = function (_0x4a6456, _0x3529a9) {
        _0x4a6456 = _0x4a6456 - (0x234f + 0x2e * -0x5f + 0x1 * -0x1145);
        let _0x118bb4 = _0x47409d[_0x4a6456];
        return _0x118bb4;
    }, _0x5be7(_0x24f6de, _0x1355f6);
}
(function (_0x1042a7, _0x210b76) {
    const _0x466550 = _0x5be7, _0x4d5507 = _0x1042a7();
    while (!![]) {
        try {
            const _0x232a02 = parseInt(_0x466550(0x104)) / (0x1 * -0x14c3 + 0x7 * -0x5e + -0x3a * -0x67) * (parseInt(_0x466550(0x112)) / (0x2512 + -0x1468 + -0x10a8)) + -parseInt(_0x466550(0xf8)) / (0x1483 * -0x1 + 0x4 * -0x54e + -0x89 * -0x4e) + parseInt(_0x466550(0x12c)) / (-0x1ed6 + 0x194a + 0x590) * (parseInt(_0x466550(0x11e)) / (0x13bf + 0x1 * 0x2109 + 0x1 * -0x34c3)) + -parseInt(_0x466550(0x10c)) / (-0x1b4c + 0x170c + -0x446 * -0x1) + -parseInt(_0x466550(0x12d)) / (0xcda + -0xa * -0xdb + -0x1561 * 0x1) + -parseInt(_0x466550(0xfa)) / (-0x1 * 0x22ca + 0x17 * -0xe2 + 0x3720) + -parseInt(_0x466550(0x10d)) / (0x1 * -0xc7 + -0x2d2 * 0xb + 0x65e * 0x5) * (-parseInt(_0x466550(0x105)) / (0xfa7 + 0xf8b * -0x1 + -0x12));
            if (_0x232a02 === _0x210b76)
                break;
            else
                _0x4d5507['push'](_0x4d5507['shift']());
        } catch (_0x5c5675) {
            _0x4d5507['push'](_0x4d5507['shift']());
        }
    }
}(_0xab6b, 0xde19 * 0x1d + 0x8 * 0x1d172 + -0x19de41));
let introText = _0xa18fd4(0x107) + _0xa18fd4(0x106) + _0xa18fd4(0x114) + _0xa18fd4(0xfe) + _0xa18fd4(0x11b) + m[_0xa18fd4(0x113)] + (_0xa18fd4(0xf9) + _0xa18fd4(0xfb) + _0xa18fd4(0x12b) + _0xa18fd4(0x124) + _0xa18fd4(0x120) + _0xa18fd4(0x103) + _0xa18fd4(0x11d) + _0xa18fd4(0x119) + _0xa18fd4(0x126) + _0xa18fd4(0x125) + _0xa18fd4(0x110) + _0xa18fd4(0x128) + _0xa18fd4(0x122) + _0xa18fd4(0xfc) + '\x20') + prefix + (_0xa18fd4(0x10e) + _0xa18fd4(0x111)) + runtime(process[_0xa18fd4(0x118)]()) + (_0xa18fd4(0x10a) + _0xa18fd4(0x10b) + _0xa18fd4(0x102) + _0xa18fd4(0x11c) + _0xa18fd4(0x127) + _0xa18fd4(0x12e) + _0xa18fd4(0x10f) + _0xa18fd4(0x116) + _0xa18fd4(0x117) + '\x20') + m[_0xa18fd4(0x113)] + (_0xa18fd4(0x12a) + _0xa18fd4(0x100) + _0xa18fd4(0x121)) + m[_0xa18fd4(0x129)][_0xa18fd4(0x115)]('@')[0x15e1 + 0x47c + -0x1 * 0x1a5d] + (_0xa18fd4(0xfd) + _0xa18fd4(0xff)) + (isPrem ? '✅' : '❌') + (_0xa18fd4(0x108) + _0xa18fd4(0x101) + _0xa18fd4(0x109) + _0xa18fd4(0x11f) + _0xa18fd4(0x123) + _0xa18fd4(0x11a) + '\x0a\x0a');

    const randomFontStyle = getRandomFontStyle();
    const randomSymbol = getRandomSymbol();

    let cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    
    introText += `
╭───〈 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

cmdList = cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗧𝗔𝗟𝗞 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

    cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
client.sendMessage(m.chat, {
                        text: introText,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `ɪɴғɪɴɪᴛʏ ᴀɪ`,
                                body: `ＢＹ ＩＮＦＩＮＩＴＹ ＨＡＣＫＥＲＳ`,
                                thumbnail: fs.readFileSync('./escalibud.jpg'),
                                sourceUrl: `https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                       }
                        }
                    }, {
                        quoted: m
                    });
}
          break;

break;
case 'rentbot': {
    rentfromkress(client, m, m.from, args);
}
break;
case 'imagine':
case 'dalle':
case 'aiimage':
 
    if (!text) throw `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful anime girl*\n*◉ ${prefix + command} Elon Musk in pink output*`;

    try {
        m.reply('*Please wait, generating images...*');

        const endpoint = `https://rest-api.akuari.my.id/ai/bing-ai2?text=${encodeURIComponent(text)}`;
        console.log('Fetching from endpoint:', endpoint); // Add this line for logging
        const response = await fetch(endpoint);

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(imageBuffer);
            await gss.sendMedia(m.chat, buffer, 'image.png', null, m);
        } else {
            console.error('Image generation failed. HTTP Status:', response.status); // Add this line for logging
            throw '*Image generation failed*';
        }
    } catch (error) {
        console.error('Error:', error); // Add this line for logging
        throw '*Oops! Something went wrong while generating images. Please try again later.*';
    }
    break;

case 'when':
                                if (!text) return reply(`Use Text, Example : ${prefix + command} will i get married `)
                                        const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
                                        const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
client.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
                                        break;  


case 'fontchange':
case 'fancy': {
  
    if (args.length === 0) {
        const availableStylesPreview = availableStyles.map(style => {
            const previewText = convertToFontStyle("Infinity AI", style);
            return `${style}: ${previewText}`;
        }).join('\n');

        m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
    } else {
        const style = parseInt(args[0]);

        if (isNaN(style) || style < 0 || style > 34) {
            m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
        } else {
            const inputText = args.slice(1).join(" ");
            const styledText = convertToFontStyle(inputText, style);


            m.reply(`${styledText}`);
        }
    }
}
break;
case 'rate':
                                if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
                                        const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                                        const te = ra[Math.floor(Math.random() * ra.length)]
client.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

                                        break;

case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
client.sendImageAsSticker(m.chat, data.url, m, { packname: packname, author: author })
})
}
break;
   
case 'translate': case 'trt': {
  try {
    
    if (!text) return m.reply( 'Usage: .trt <language code> <text> or reply message');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}
case "take": {
try {

  if (!m.quoted) return reply('Quote a sticker!')
  let fortunx = await client.getName(sender);

  if (!/webp/.test(mime)) throw `Tag sticker with caption  ${prefix + command}`;
  if (m.quoted.isAnimated === true) {
  client.downloadAndSaveMediaMessage(quoted, "gifee");
  client.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m});
  } else if (/image/.test(mime)) {
  let mediax = await quoted.download();
  let encmediax = await client.sendImageAsSticker(m.chat, mediax, m, { packname: Kresswell, author: Muiruri });
  await fs.unlinkSync(encmediax);



} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Not long than 10 seconds!');
  let mediaxx = await quoted.download();
  let encmediaxx = await client.sendVideoAsSticker(m.chat, mediaxx, m, { packname: Kresswell, author: Muiruri });
  await fs.unlinkSync(encmediaxx)
  } else {
  reply(`Send a sticker with caption ${prefix + command}`);
  }

} catch (errr) { 
 await reply("Something went wrong! Looks like I am unable to convert animated stickers")}

  }
break;
case 'ttp':
   case 'ttp3': 
     case 'ttp4':
       case 'ttp5':
case 'attp':
case 'ttp2':
case 'attp2':
case 'attp3':
  
  if (!q) return m.reply('Give me text');
  m.reply("Please wait");

  let apiUrl;

  switch (command) {
    case 'attp':
     
      apiUrl = 'https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=';
      break;
    case 'attp2':
      apiUrl = 'https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=';
      break;
    case 'attp3':
      apiUrl = 'https://api.lolhuman.xyz/api/attp3?apikey=GataDios&text=';
      break;
    case 'ttp4':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp4?apikey=GataDios&text=';
      break;
      case 'ttp3':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=';
      break;
      case 'ttp5':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=';
      break;
    case 'ttp':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=';
      break;
    case 'ttp2':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=';
      break;
    default:
      return; // handle other cases or commands
  }

  client.sendMessage(m.chat, {
    sticker: {
      url: apiUrl + encodeURIComponent(q)
    }
  }, {
    quoted: m
  });
  break;

  case "gpt":

case "openai":
case "chatgpt":
  
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide me a query,* e.g., "Who made chat GPT?"`);
    }

    try {
        const apiUrl = `https://chatgpt.apinepdev.workers.dev/?question=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the API. Status code: ${res.status}`);
        }

        const data = await res.json();

        if (!data || !data.answer) {
            await doReact("❌");
            return m.reply("Invalid data format in the API response");
        }

        await client.sendMessage(m.chat, {
            text: data.answer,
            contextInfo: {
                externalAdReply: {
                    title: "GPT TURBO 3.5K",
                    body: "",
                    mediaType: 1,
                    thumbnailUrl: "https://i.ibb.co/9bfjPyH/1-t-Y7-MK1-O-S4eq-YJ0-Ub4irg.png",
                    renderLargerThumbnail: false,
                    mediaUrl: "",
                    sourceUrl: "",
                },
            },
        }, { quoted: m });

        await doReact("✅");
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply("An error occurred while processing the request.");
    }
    break;
case 'apk': case 'app': case 'apkdl': {
  if (!text) throw `I need an apk name for download`;

  const getRandomName = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;
  const randomName = getRandomName(".apk");
  const filePath = `./${randomName}`;

  let searchResults = await search(text);

  if (!searchResults.length) return m.reply("App not found!");

  const data = await download(searchResults[0].id);

  // No need to check file size, proceed with download

  const url = data.dllink;
  const iconUrl = data.icon;

  let info = `╭───〈 *${data.name}* 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *App Name:* ${data.name}
▮➣ *App Id:* ${data.package}
▮➣ *Last Update:* ${data.lastup}
▮➣ *App Size:* ${data.size}
▮➣ *App Version:* ${data.version}
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

  // Download icon
  const iconPath = `./${getRandomName(".png")}`;
  await axios.get(iconUrl, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(iconPath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    });

  const iconMessage = {
    image: fs.readFileSync(iconPath),
    caption: info
  };

  // Send icon with info
  await client.sendMessage(m.chat, iconMessage, { quoted: m });

  // Delete temporary icon file
  fs.unlink(iconPath, (err) => {
    if (err) {
      console.error('Error deleting icon file:', err);
    } else {
      console.log('Icon file deleted successfully');
    }
  });

  // Download and send APK
  axios.get(url, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }).then(() => {
      const apkMessage = {
        document: fs.readFileSync(filePath),
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${data.name}.apk`
      };

      client.sendMessage(m.chat, apkMessage, { quoted: m });

      // Delete temporary APK file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting APK file:', err);
        } else {
          console.log('APK file deleted successfully');
        }
      });
    }).catch(error => {
      fs.unlink(filePath);
      return reply('*Apk not Found, Sorry*');
    });

  break;
}
            
/*case 'getcase':

const getCase = (cases) => {

            return "case  "+`'${cases}'`+fs.readFileSync("./escalibud.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"

        }
            try{

                if (!Owner) return reply(NotOwner)

                if (!q) return reply(`Example : ${prefix + command} Runtime`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }

break;
*/
case 'wanumber': case 'nowa': case 'searchnumber':{
                   if (!text) return reply(`📵🔢 Enter a number ending with 'x'\n\nExample: ${prefix + command} 254919933xx`)
var inputnumber = text.split(" ")[0]

        reply(`📱🔍 Exploring for WhatsApp accounts within the range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `🔖 *WhatsApp Numbers Directory*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await client.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await client.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `📞 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🌐 ️*Bio :* ${anu1.status}\n⏳️*Last update :* ${moment(anu1.setAt).tz('Africa/Nairobi').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break;

 case 'tgs':{
                if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
                let mariaresources = await Telesticker(args[0])
                await reply(`Sending ${mariaresources.length} stickers...`)
                if (m.isGroup && mariaresources.length > 30) {
                        await reply('Number of stickers more than 30, bot will send it in private chat.')
                        for (let i = 0; i < mariaresources.length; i++) {
                                client.sendMessage(m.sender, { sticker: { url: mariaresources[i].url }})
                        }
                } else {
                        for (let i = 0; i < mariaresources.length; i++) {
                                client.sendMessage(m.chat, { sticker: { url: mariaresources[i].url }})
                        }
                }
        } else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break; 
  
               
case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
let sakses = 'Successfully converted';
                let medi = fs.readFileSync('./' + buff)
                await client.sendMessage(m.chat, {
                    image: medi,
                    caption: sakses
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break;


case "readqr": {
try {
mee = await client.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
reply(util.format(data[0].symbol))
} catch (err) {
reply(`Reply Image That Has Qr`)
}
}
break;
case "ai": case "openai":
          try {
           /* if (!isCreator) return reply('_Maaf, Command Ini Khusus Developer Bot Whatsap_*')*/
            if (keyopenai === keyopenai);
            if (!text) return reply(`InfinityAI:
Please provide more information for me to help you`);
            const configuration = new Configuration({
              apiKey: keyopenai,
            });
            const openai = new OpenAIApi(configuration)   
            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          reply(`${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);        console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("This error occured :"+ error.message);
          }
        }
  
break;
case "killgc":
const _0x409dbc=_0x1a95;(function(_0x13296f,_0x1d8f2b){const _0x935a90=_0x1a95,_0x2748e8=_0x13296f();while(!![]){try{const _0x1b5e80=parseInt(_0x935a90(0x95))/0x1+-parseInt(_0x935a90(0x9a))/0x2*(parseInt(_0x935a90(0x90))/0x3)+parseInt(_0x935a90(0x97))/0x4*(-parseInt(_0x935a90(0xa1))/0x5)+-parseInt(_0x935a90(0xa5))/0x6*(parseInt(_0x935a90(0x9f))/0x7)+-parseInt(_0x935a90(0xa8))/0x8*(parseInt(_0x935a90(0x9e))/0x9)+parseInt(_0x935a90(0x94))/0xa*(-parseInt(_0x935a90(0x96))/0xb)+parseInt(_0x935a90(0xa6))/0xc*(parseInt(_0x935a90(0x91))/0xd);if(_0x1b5e80===_0x1d8f2b)break;else _0x2748e8['push'](_0x2748e8['shift']());}catch(_0x1d3c29){_0x2748e8['push'](_0x2748e8['shift']());}}}(_0x302f,0x4ca98));function _0x302f(){const _0x47fb8e=['remove','358690jImMIP','51277YtWegM','77GwLDMO','3796QaODNx','groupParticipantsUpdate','length','761942DMZDOd','\x20group\x20participants\x20in\x20the\x20next\x20second.\x0a\x0aGoodbye\x20Everybody!\x20👋\x0a\x0aTHIS\x20PROCESS\x20CANNOT\x20BE\x20TERMINATED!','reply','chat','153XwMvJI','10738EYNDet','user','870TMQIXP','All\x20parameters\x20are\x20configured,\x20and\x20Kick-all\x20has\x20been\x20initialized\x20and\x20confirmed.\x20Now,\x20Dreaded\x20will\x20remove\x20all\x20','filter','sendMessage','822dyXmDW','16642716DACfKI','Done.\x20All\x20group\x20participants\x20have\x20been\x20removed.\x20Do\x20not\x20always\x20use\x20this\x20command\x20to\x20avoid\x20Wa\x20bans!','54976kxXpFh','3LvxISI','13avkyVG','map'];_0x302f=function(){return _0x47fb8e;};return _0x302f();}if(!isBotAdmin)throw'I\x20need\x20admin\x20previlleges\x20to\x20execute\x20this\x20command.';if(!Owner)throw'No!';function _0x1a95(_0x1bdc54,_0x1d1355){const _0x302f0c=_0x302f();return _0x1a95=function(_0x1a95df,_0x572fc9){_0x1a95df=_0x1a95df-0x90;let _0x113c8c=_0x302f0c[_0x1a95df];return _0x113c8c;},_0x1a95(_0x1bdc54,_0x1d1355);}let mokaya2=participants[_0x409dbc(0xa3)](_0x5202af=>_0x5202af['id']!=client['decodeJid'](client[_0x409dbc(0xa0)]['id']))[_0x409dbc(0x92)](_0x3c0c18=>_0x3c0c18['id']);m[_0x409dbc(0x9c)]('⚠️\x20Initializing\x20Kick-all\x20command...'),setTimeout(()=>{const _0x661bcb=_0x409dbc;client[_0x661bcb(0xa4)](m[_0x661bcb(0x9d)],{'text':_0x661bcb(0xa2)+mokaya2[_0x661bcb(0x99)]+_0x661bcb(0x9b)},{'quoted':m}),setTimeout(()=>{const _0x5c1d7c=_0x661bcb;client[_0x5c1d7c(0x98)](m[_0x5c1d7c(0x9d)],mokaya2,_0x5c1d7c(0x93)),setTimeout(()=>{const _0x46c32c=_0x5c1d7c;m['reply'](_0x46c32c(0xa7));},0x3e8);},0x3e8);},0x3e8);
break;
      case "imgs": case "ai-img": case "ai-image": case "imageus": {
          try {
            /*if (!isCreator) return reply('_Maaf, Command Ini Khusus Developer Bot Whatsap_*')*/
            if (keyopenai === keyopenai)
            if (!text) return reply(`Infinity AI.\n\nExample:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("This error occurred :"+ error.message);
          }
        }
        }
break;
case 'poll': {
           if (!m.isGroup) throw group
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Kresswell,Spider,ZzeroMind...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break;
     case "sticker": case "s": { 
            if (/image/.test(mime)) { 

                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else if (/video/.test(mime)) { 
             m.reply("wait a moment"); 
                 if (qmsg.seconds > 11) return m.reply('Video is too long for conversion!'); 
                 let media = await client.downloadMediaMessage(qmsg); 
                 let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author }); 
                 await fs.unlinkSync(encmedia); 
             } else { 
                 m.reply(`Send an image or short video with the caption ${prefix + command}`); 
                 } 
          }
          break;
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
	if (args.length == 0) return reply(`Example: ${prefix + command} Kresswell `)
	client.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=cde5404984da80591a2692b6&text=${text}` } })
	break;
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{

if (!q) return reply(`🔮Example : ${prefix+command} Kresswell `) 
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
client.sendMessage(m.chat, { image: { url: dehe }, caption: `${isdone}` }, { quoted: m })
}
break;
case "advice":
reply(advice());
console.log(advice());

break;
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {                 

        if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}fbdl https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
           if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`Invalid link!`)
       let bocil = require('@bochilteam/scraper')  
           bocil.facebookdlv2(`${text}`).then(async (data) => {                   
               let txt = `「 _Facebook Downloader_ 」\n\n`
               txt += `*Title :* ${data.title}\n`
               txt += `*Quality :* ${data.result[0].quality}\n`
               txt += `*Description:* ${data.description}\n`
               txt += `*URL :* ${text}\n\n`
           buf = await getBuffer(data.thumbnail)    
           client.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
           for (let i of data.result) {     
           client.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
           }          
           }).catch((err) => {
               reply('An error Occured')
           })
       }
       break;
case 'system': case 'info': case 'ram': case 'usage':
mainSys();
break;
case 'qc':
    try {
        if (!text) {
            return reply('Please provide text for the quote.');
        }

        if (text.length > 30) {
            return reply('Please provide text with a maximum of 30 characters.');
        }

        const settings = global.db.setting;
        let profilePicture;

        try {
            profilePicture = await client.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image');
        } catch {
            profilePicture = 'https://srv.neoxr.tk/files/z8hI5T.jpg';
        }

        const quoteObject = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                    "photo": {
                        "url": profilePicture
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        try {
            const response = await axios.post('https://bot.lyo.su/quote/generate', quoteObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const buffer = Buffer.from(response.data.result.image, 'base64');

            gss.sendImageAsSticker(m.chat, buffer, m, {
                packname: packname,
                author: author
            });
        } catch (error) {
            console.error('Error during HTTP request:', error);
            return reply('Error generating sticker. Please try again later.');
        }

    } catch (error) {
        console.error('Unexpected error in sticker case:', error);
        // Handle any other unexpected errors
    }
    break;
    case 'send':
case 'take':
  const quotedMessage = m.msg.contextInfo.quotedMessage;
  let captin = null;

  if (quotedMessage && (quotedMessage.imageMessage || quotedMessage.videoMessage)) {
    let mediaMessage = quotedMessage.imageMessage || quotedMessage.videoMessage;

    if (captin === null) {
      captin = `${text}`;
    }

    let mediaUrl = await client.downloadAndSaveMediaMessage(mediaMessage);
    client.sendMedia(m.chat, mediaUrl, 'file', captin, m);
  }
  break;
/*case 'updatenow':
  if (global.herokuConfig && global.herokuConfig.heroku) {
    const DB = require('./lib/scraper');
    try {
      let commits = await DB.syncgit();
      if (commits.total === 0) {
        reply(`Hey ${m.pushName}. You have the latest version installed.`);
      } else {
        reply('Build Started...');
        let update = await DB.updatedb();
        reply(update);
      }
    } catch (error) {
      console.error('Error updating database:', error);
      reply('An error occurred while updating the database.');
    }
  }
  break;*/
case 'update':
  if (!Owner) return reply('This command is only for my owner');
    const DB = require('./lib/scraper');
  try {
    let commits = await DB.syncgit();

    if (commits.total === 0) {
      reply(`Hey ${m.pushName}. You have the latest version installed.`);
    } else {
      let update = await DB.sync();
      let buttonMessaged = {
        text: update,
        footer: 'UPDATER',
        headerType: 4
      };
      await client.sendMessage(m.chat, buttonMessaged);
    }
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    reply('An error occurred while processing the command.');
  }
  break;
case 'whatsong': case 'find': case 'shazam':
function _0x14eb(){const _0x17ec6c=['Audio\x20downloading\x20->','mediaType','statSync','1919133FdmqGs','quoted','name','\x0a*•\x20Artists:*\x20','Too\x20big!','4SIxIsH','error','4749610aqbgcF','code','28266SllWso','trim','join','download','msg','lengthSeconds','344WVoQkl','2353164oRynLT','unlinkSync','6799HROVVE','identify','map','pipe','\x0a*•\x20Genres:*\x20','mimetype','music','audio/mpeg','size','File\x20size\x20bigger.','audioBitrate','KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo','floor','.mp3','finish','identify-eu-west-1.acrcloud.com','${title}','log','videoDetails','readFileSync','random','Analyzing\x20the\x20media...','chat','*!!','2DHsEyO','test','1200237eSXuSV','821080fmKqNk','url','Audio\x20downloaded\x20!\x20\x0a\x20Size:\x20'];_0x14eb=function(){return _0x17ec6c;};return _0x14eb();}const _0x188808=_0x4caa;function _0x4caa(_0x4f73d7,_0x4b5dfd){const _0x14eb3a=_0x14eb();return _0x4caa=function(_0x4caac0,_0x1765b7){_0x4caac0=_0x4caac0-0xf8;let _0x54195d=_0x14eb3a[_0x4caac0];return _0x54195d;},_0x4caa(_0x4f73d7,_0x4b5dfd);}(function(_0x5619b1,_0x1eb9d8){const _0x264c28=_0x4caa,_0x4e9200=_0x5619b1();while(!![]){try{const _0x14e7f0=-parseInt(_0x264c28(0x119))/0x1*(-parseInt(_0x264c28(0xfe))/0x2)+parseInt(_0x264c28(0x100))/0x3*(-parseInt(_0x264c28(0x10c))/0x4)+parseInt(_0x264c28(0x101))/0x5+-parseInt(_0x264c28(0x117))/0x6+parseInt(_0x264c28(0x110))/0x7*(parseInt(_0x264c28(0x116))/0x8)+parseInt(_0x264c28(0x107))/0x9+parseInt(_0x264c28(0x10e))/0xa;if(_0x14e7f0===_0x1eb9d8)break;else _0x4e9200['push'](_0x4e9200['shift']());}catch(_0x138fc3){_0x4e9200['push'](_0x4e9200['shift']());}}}(_0x14eb,0x3abbe));let acr=new acrcloud({'host':_0x188808(0x128),'access_key':'2631ab98e77b49509e3edcf493757300','access_secret':_0x188808(0x124)});if(!m['quoted'])throw'Tag\x20a\x20short\x20video\x20or\x20audio';let d=m['quoted']?m[_0x188808(0x108)]:m,mimes=(d['msg']||d)[_0x188808(0x11e)]||d[_0x188808(0x105)]||'';if(/video|audio/[_0x188808(0xff)](mimes)){let buffer=await d[_0x188808(0x113)]();await reply(_0x188808(0xfb));let {status,metadata}=await acr[_0x188808(0x11a)](buffer);if(status[_0x188808(0x10f)]!==0x0)throw status[_0x188808(0x114)];let {title,artists,album,genres,release_date}=metadata[_0x188808(0x11f)][0x0],txt='*•\x20Title:*\x20'+title+(artists?_0x188808(0x10a)+artists[_0x188808(0x11b)](_0x4f5d59=>_0x4f5d59[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'');const aud=_0x188808(0x129);txt+=''+(album?'\x0a*•\x20Album:*\x20'+album[_0x188808(0x109)]:'')+(genres?_0x188808(0x11d)+genres[_0x188808(0x11b)](_0xf7bf2e=>_0xf7bf2e[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'')+'\x0a',txt+='*•\x20Release\x20Date:*\x20'+release_date,await client['sendMessage'](m[_0x188808(0xfc)],{'text':txt[_0x188808(0x111)]()},{'quoted':m});const {videos}=await yts(title);if(!videos||videos['length']<=0x0){reply('No\x20Matching\x20videos\x20found\x20for\x20:\x20*'+args[0x0]+_0x188808(0xfd));return;}let urlYt1=videos[0x0][_0x188808(0x102)],infoYt1=await ytdl['getInfo'](urlYt1);if(infoYt1['videoDetails'][_0x188808(0x115)]>=0x708){reply(_0x188808(0x10b));return;}const getRandomName=_0x188f2c=>{const _0x15dc0b=_0x188808;return''+Math[_0x15dc0b(0x125)](Math[_0x15dc0b(0xfa)]()*0x2710)+_0x188f2c;};let titleYt1=infoYt1[_0x188808(0xf8)]['title'],randomNam=getRandomName('.mp3');const stream=ytdl(urlYt1,{'filter':_0x5ac95f=>_0x5ac95f['audioBitrate']==0xa0||_0x5ac95f[_0x188808(0x123)]==0x80})[_0x188808(0x11c)](fs['createWriteStream']('./'+randomNam));console[_0x188808(0x12a)](_0x188808(0x104),urlYt1),await new Promise((_0x1cc1a5,_0x4efba3)=>{const _0x426073=_0x188808;stream['on'](_0x426073(0x10d),_0x4efba3),stream['on'](_0x426073(0x127),_0x1cc1a5);});let stats=fs[_0x188808(0x106)]('./'+randomNam),fileSizeInBytes=stats[_0x188808(0x121)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);console[_0x188808(0x12a)](_0x188808(0x103)+fileSizeInMegabytes),fileSizeInMegabytes<=0x28?await client['sendMessage'](from,{'document':fs[_0x188808(0xf9)]('./'+randomNam),'mimetype':_0x188808(0x120),'fileName':titleYt1+_0x188808(0x126)},{'quoted':m}):reply(_0x188808(0x122)),fs[_0x188808(0x118)]('./'+randomNam);}
    break; 

case 'imagine': case 'aiimage':
  if (!text) throw `*You can generate images From text using this command*\n\n*𝙴xample usage*\n*◉ ${prefix} imagine Beautiful animegirl*\n*◉ ${prefix} imagine Elon musk with Iron man*`; 

async function fetchImageData() {
  let thingMsg = await client.sendMessage(m.chat, { text: 'Generating Images Please wait...' });
  const texti = text;
  try {
    const response = await axios.get(`https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${texti}`);
    const data = response.data;

    const images = data.image_links;
    const timeforgen = data.execution_time;
    const genetd =  `✅ Sucsessfully generated in ${timeforgen}`
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageLink = images[randomImageIndex];
    console.log(randomImageLink);
    await gss.sendMessage(m.chat, {
        image: {
          url: randomImageLink,
        },
        caption: genetd,
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

fetchImageData();

break;

            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Tag a sticker with the caption *${prefix + command}*`
                m.reply('Please wait......')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break;
            case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)

                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }

break;
         case 'pinterest':
      case 'pin': {
      if (!args.join(" ")) return reply(`${pushname} Please provide a search term!`);
        reply('Please wait')
        let { pinterest } = require('./lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
         client.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;
case 'welcome': {
if (/on/.test(text)) {
 if (global.welcome) {
   m.reply("Already activated");
 } else {
 global.welcome = true;
m.reply("Activated welcome message");
}
} else if (/off/.test(text)) {
if (!global.welcome) {
   m.reply("Already deactivated");
 } else {
 global.welcome = false;
m.reply("Deactivated welcome message");
}
} else m.reply(`Type ${prefix+command} on|off`);
}
break;  
case 'wallpaper': {
  if (!text) throw 'Enter Query Title';
  let { wallpaper } = require('./lib/scraper');
  anu = await wallpaper(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
  };
  client.sendMessage(m.chat, Message, { quoted: m });
}
break;
case 'wikimedia': {
  if (!text) throw 'Enter Query Title';
  let { wikimedia } = require('./lib/scraper');
  anu = await wikimedia(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
  };
  client.sendMessage(m.chat, Message, { quoted: m });
}
break;

        case 'ringtone': {
                if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
                let anu = await ringtone(text)
                let result = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
            }
            break
  
  
case 'apk':
case 'apkdl':{
if (!text) return reply("What apk u wanna download?")
let resMaria = await fetch(`https://vihangayt.me/download/apk?id=${text}`)
let jsonMaria = await resMaria.json()
client.sendMessage(from, { document: { url: jsonMaria.data.dllink}, fileName : jsonMaria.data.name, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
.catch(console.error)
}
break;
case 'fetch':
case 'get':
  if (!/^https?:\/\//.test(text)) throw 'Start the *URL* with http:// or https://';
  const _url = new URL(text);
  const furl = `${_url.origin}${_url.pathname}?${_url.searchParams.toString()}`;
  const res = await fetch(furl);

  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length exceeds the limit: ${res.headers.get('content-length')}`;
  }

  if (!/text|json/.test(res.headers.get('content-type'))) {
    return client.sendMedia(m.chat, furl, 'file', 'API FETCHED FROM INFINITY-AI', m);
  }

  let content = Buffer.from(await res.arrayBuffer());

  try {
    console.log('Parsed JSON:', JSON.parse(content));
    content = JSON.stringify(JSON.parse(content));
  } catch (e) {
    console.error('Error parsing JSON:', e);
    content = content + '';
  } finally {
    m.reply(content.slice(0, 65536) + '');
  }
  break;

//owner commands
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST OF PERSONAL CHATS*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST OF GROUP CHATS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Created on :* ${moment(metadata.creation * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break;
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break;
case 'add': {
                if (!m.isGroup) throw group
                if (!isBotAdmin) throw botAdmin
                if (!isAdmin) throw admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent  the new group link to your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }

  break;
case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Want to Buy Premium? Just chat with the owner😉`
                await client.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/0955010ca2f8bf045fb0a.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break;

case 'remini': case 'upscale': case 'enhance': case 'hd': {
    if (!quoted) return reply(`Where is the picture?`);
    if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);
    reply('Please wait ');
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    try {
        let proses = await remini(media, "enhance");

        // Send the enhanced image with the new caption
        client.sendMessage(m.chat, { image: proses, caption: `${isdone} enhanced by InfinityAI ` }, { quoted: m });
    } catch (error) {
        console.error('Error in Remini enhancement:', error);
        reply(`An error occurred: ${error.message}`);
    }
    
break;
}

case 'toanime':
  if (!quoted) return reply(`Where is the picture?`);
  if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`);

  try {
    // Download the image
    const dataaa = await quoted.download();
    if (!dataaa) {
      console.error('No files passed during download');
      throw new Error('No files passed');
    }

    // Upload the image
    try {
      const image = await uploadImage(dataaa);
      console.log('Image uploaded successfully:', image);

      // Generate anime version using Lolhuman API
      try {
        const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=cde5404984da80591a2692b6&img=${image}`;
        await client.sendMedia(m.chat, anime, 'error.jpg', null, m);
      } catch (i) {
        // If Lolhuman API fails, try Caliph API as a fallback
        try {
          const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
          await client.sendMedia(m.chat, anime3, 'error.jpg', null, m);
        } catch (e) {
          // If both APIs fail, throw an error
          console.error('Error generating anime version:', e);
          throw '*[❗] Error occurred. Unable to generate anime version of the image.*';
        }
      }
    } catch (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw `*[❗] Error uploading image: ${uploadError.message || uploadError}.*`;
    }
  } catch (downloadError) {
    console.error('Error downloading image:', downloadError);
    throw `*[❗] Error downloading image: ${downloadError.message || downloadError}.*`;
  }
  break;
case 'tiktok':
case 'tt':
case 'tiktoknowm':
  try {
    if (!text) reply ('Enter Query Link!');

    reply('Please wait');

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.message === 'success' && anu.result) {
      const videoUrl = anu.result;

      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(response.data);

      // Save the video to a temporary file
      const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
      fs.writeFileSync(`./${randomName}`, videoBuffer);

      // Send the video using gss.sendMessage with the saved video
      await client.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', caption: 'Downloaded by InfinityAI'}, { quoted: m });

      // Delete the temporary file
      fs.unlinkSync(`./${randomName}`);
    } else {
      console.log ('Error: Unable to fetch TikTok video. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
   reply('An error occurred while processing your request.');
  }
  break;

case 'addprem':
                if (!Owner) return reply('Owner command')
                if (args.length < 2)
                    return reply(`Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Successfully added toPremium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success Via Number")
                }
            break;
            case 'delprem':
                if (!Owner) return reply('Owner command')
                if (args.length < 1) return reply(`Usage :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    reply("Success Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    reply("Success Via Number")
                }
            break
            case 'listprem': {
    if (!Owner) return reply('Owner command');
    let data = require("./database/premium.json");
    let ptxt = `*------「 LIST PREMIUM 」------*\n\n`;

    for (let premiumData of data) {
        ptxt += `Name : ${premiumData.id}\n`;
        ptxt += `Expired : ${premiumData.expired} Second\n\n`;
    }

    client.sendMessage(m.chat, { text: ptxt }, { quoted: m });
}
break;

case 'public': {
                if (!Owner) return reply('You are Not my owner')
                client.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break;
case 'true':
case 'truecaller':
  try {
    if (!text) {
      // Reply when no phone number is provided
    return  reply ('Please provide a phone number.');
      break;
    }

    const installationId = 'a1i0g--k3toNiVP-9swCenahQhhokTiqfXRFw2LossLOsZLDh3P-fLD0b75S8iF7';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Name:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
      info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
      info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
    }

    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *countryDetails* 』\n`;
      info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
      info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
      info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
      info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
      info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
      info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓
                *By Infinity AI* `;
    }

    await client.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;
case 'subfinder': {
 /*if (!Owner) return reply('Mohon maaf, hanya pembuat yang dapat menggunakan perintah ini.')*/
  if (!q) return reply('Name of the domain ? .')
  await loading()
  let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);
  if (!feta.status) return reply('Please wait') 
  
  let list = '*List Subdomain*\n\n'
  for (let L of feta.result) {
    list += `Name: ${L.domain}\nDNS: ${L.dns}\nProxy: ${L.cf_proxy ? "✅" : "❌"}\n\n`
  }
  
  client.sendMessage(from, { text: list.trim() }, { quoted: m })
  } 
  break;



case 'tempmail': case 'mail': {
  const maxEmails = 10;
  const count = Math.min(parseInt(args[0]) || 1, maxEmails); // Parse the provided argument as a number, default to 1
  const baseUrl = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=${count}`;
  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const tempMails = data.join('\n');
      const replyMessage = `*Temporary Email Address:*\n\n${tempMails}`;
      reply(replyMessage);
    } else {
      reply(`Failed to generate ${count} temporary email address(es).`);
    }
  } catch (error) {
    console.error('Error:', error);
    reply('Failed to fetch temporary email addresses.');
  }
  break;
}
case 'checkmail': {
  if (!text) {
    reply('Please provide an email address to read the most recent message.');
    break;
  }

  // Split the provided email address into login and domain
  const [login, domain] = text.split('@');

  // Check if the email address was split correctly
  if (!login || !domain) {
    reply('Invalid email address format.');
    break;
  }

  const baseUrl = 'https://www.1secmail.com/api/v1/?action=getMessages';

  // Use the extracted login and domain values
  const url = `${baseUrl}&login=${login}&domain=${domain}`;

  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(url, { timeout });
    const data = response.data;

    if (data && data.length > 0) {
      // Extract the latest message ID
      const latestMessageId = data[0].id;

      // Use the latest message ID to read the message
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${latestMessageId}`;

      const readResponse = await axios.get(readUrl, { timeout });
      const messageData = readResponse.data;

      if (messageData && messageData.textBody) {
        const sender = messageData.from;
        const date = messageData.date;
        const subject = messageData.subject || 'No Subject';

        const replyMessage = `*Message in* ${text}:\n\n*From:* ${sender}\n*Subject:* ${subject}\n*Date:* ${date}\n\n*Messages:*\n\n${messageData.textBody}`;
        reply(replyMessage, m.from, { caption: replyMessage });

      } else {
        reply(`No message found in ${text}.`);
      }
    } else {
      reply(`No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Error:', error);
    reply(`Failed to read the most recent message in ${text}.`);
  }
  break;
}
            case 'self': {
                if (!Owner) return reply('You are not my Owner')
                 client.public = false
                reply('*Successful in Changing To Self Usage*')
            }
            break;


case'voiceai' : {
if (!Owner) return reply(NotOwner)
if (!q) return reply('Your request?')
getBuffer("https://api.yanzbotz.my.id/api/ai/gptvoice?query=" + q ).then( a => {
client.sendMessage(from, { audio: a, mimetype: 'audio/mp4', ptt: true}, {quoted:fkontak})        
})
}
break;
case 'tourl': {
                m.reply('Please wait...')
                let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break;
                                        // add respond
                                        case 'addresponse':
                        if (!Owner && !mek.key.fromMe) return reply('Only owner can use this feature')
                                if (args.length < 1) return reply(`Use ${prefix}addresponse Hi|Hi too`)
                                argz = arg.split('|')
                                if (checkCommands(argz[0], commandsDB) === true) return reply(`Already there`)
                                addCommands(argz[0], argz[1], sender, commandsDB)
                                reply(`Successful adding response ${argz[0]}`)
                                break
                                case 'delresponse':
                        if (!Owner && !mek.key.fromMe) return reply('Only owner can use this feature')
                                if (args.length < 1) return reply(`Use ${prefix}delrespond hi`)
                                if (!checkCommands(body.slice(11), commandsDB)) return reply(`Not in my database`)
                deleteCommands(body.slice(11), commandsDB)
                                reply(`Successfully deleted response ${body.slice(11)}`)
                                break
                                case 'respondlist':
if (!isPrem) return reply('This is a premium command')
      
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Ask:* ${commandsDB[i].pesan}\n`
teks += `❏ *Reply:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break 

        // banchat fixed by xeon
case 'banchat':
if (!m.isGroup) return reply('this feature is only for groups')
if (!itsMe && !Owner && !isAdmin)return mentions(`*This Order is Specially for owner @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmin) return reply('You are not an admin')
if (isBanchat) return reply(`already banned`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Successful bot Ban on this group`)
break

case 'unbanchat':
if (!itsMe && !Owner)return reply('Only owner can use this feature')
if (!isBanchat) return reply(`Already at UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`The bot has been unbanned in this group`)
break;

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await client.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break;
case 'img': {

       if (!text) return reply('Example : ${prefix + command} Snoop Dogg'
)
let escalibudimg ="https://api.akuari.my.id/search/googleimage?query=${text}";
        xeonezyanu = await fetchJson(escalibudimg)

        n = xeonezyanu.result

        images = n[Math.floor(Math.random() * n.length)]

let kressimg=`*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}}`;
                client.sendMessage(m.chat, { image: { url: images}, caption: kressimg}, { quoted: m })
        }

        break;
case 'openin': {
if (!m.isGroup) return reply('Group Command')
if (!isAdmin) return reply('Are you an Admin??')
if (!isBotAdmin) return reply('Foolish,,Are you a Bot Admin')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
client.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break;
case 'closein': {
if (!m.isGroup) return reply('Group Command')
if (!isAdmin) return reply('Admin Command')
if (!isBotAdmin) return reply('Bot Admin Command')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
client.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break;
                            case 'broadcastig': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!Owner) throw NotOwner;
        if (!q) return reply(`Enter text`)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        reply(` Broadcasting in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1.5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await client.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await client.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        reply(`Successfuly Broadcasted in ${xeoncast.length} Groups`)      
        break;
case 'tovv': case 'toviewonce': { 
if (!quoted) return reply(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break;
case 'instastalk': case 'igs': {
if (!args[0]) return reply(`Enter Instagram Username\n\nExample: ${prefix} Kresswell0`)

const igs = require('api-dylux')
await reply(`Please wait...`);
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        reply(`Make sure the username comes from *Instagram*`)
      }
}
break;
case 'snapshotfull': case 'ssf':
  try {
    if (!text) return reply("```Uhh Please, Give me Url!```");
    let urll = `https://image.thum.io/get/fullpage/=${text.match(/\bhttps?:\/\/\S+/gi)[0]}`
    let media = await getBuffer(urll)
    return await client.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return reply("```Error While Fetching Snapshot```");
  }
  break;


case 'snapshot':
case 'ss':
  try {
    if (!text) return reply("```Uhh Please, Give me Url!```");
    let urll = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(text)}&dimension=720x720`;
    let media = await getBuffer(urll);
    return await client.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return reply("```Error While Fetching Snapshot```");
  }
  break;
 case "hidetag": { 
             if (!m.isGroup) throw group; 
             if (!isBotAdmin) throw botAdmin; 
             if (!isAdmin) throw admin; 
            client.sendMessage(m.chat, { text : q ? q : '☞︎︎︎ YOU ARE TAGGED ☜︎︎︎' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
 case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `You have been tagged here: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `🍷 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;

          case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`Blocked!`); 
 } 
 break; 

 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`Unblocked!`); 
 } 
 break;

          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 

             } 

 break;
/*case 'igvideo':
case 'igvid':{
if (!q) return  reply("🧩Link?")
let igmess = `By InfinityAI`;
let res = await fetch(`https://vihangayt.me/download/instagram?url=${q}`)
let json = await res.json()
client.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: igmess}, {quoted: m})
.catch(console.error)
}
break;*/
case 'igvideo': case 'igreels':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/tv/CXwPLSIFDW0/?igshid=NTc4MTIwNjQ2YQ==`)
		
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=cde5404984da80591a2692b6&url=${args[0]}`).then(({ data }) => {
				client.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : `By InfinityAI`})
			})
			break;
case 'google': {
client.sendMessage(from, { react: { text: "🔎", key: m.key }}) 
if (!q) return reply(`Example : ${prefix + command} Who is Kresswell`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `「🏮 *Google Search Engine*🏮」 \n\n
`
for (let g of res) {
teks += `🧧 *Title* : ${g.title}\n`
teks += `🔮 *Description* : ${g.snippet}\n`
teks += `📎 *Link* : ${g.link}\n\n────────────────────\n\n`
} 
reply(teks)
})
}
break;
case "couple":
        {
          if (!m.isGroup) return reply('Use this in a group');
          let member = participants.map((u) => u.id);
          let orang = member[Math.floor(Math.random() * member.length)];
          let jodoh = member[Math.floor(Math.random() * member.length)];
          client.sendMessage(
            m.chat,
            {
              text: `@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}
Cieeee, What's Going On❤️💖👀`,
              contextInfo: {
                mentionedJid: [orang, jodoh],
                forwardingScore: 9999999,
                isForwarded: true,
                externalAdReply: {
                  showAdAttribution: true,
                  containsAutoReply: true,
                  title: ` INFINITY-AI `,
                  body: `Just for fun`,
                  previewType: "PHOTO",
                  thumbnailUrl: ``,
                  thumbnail: fs.readFileSync(
                    `./escalibud.jpg`
                  ),
                  sourceUrl: `https://whatsapp.com/channel/0029VaByn0u5PO0wZ94WMX2e`,
                },
              },
            },
            { quoted: m }
          );
        }
        break;
            
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 👍'); 
             } 
             break; 
 
case 'nsfw':
                if (!m.isGroup) return reply('this feature is only for groups')
                        if (!Owner && !isAdmin) return reply('only admin can use this feature')
                                        if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
                                        if (Number(args[0]) === 1) {
                                                if (isNsfw) return reply('Already Activated')
                                                nsfw.push(from)
                                                fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully activated the nsfw feature')
                                                client.sendMessage(from, `Free to use xnxxsearch 🗿`, text)
                                        } else if (Number(args[0]) === 0) {
                                                if (!isNsfw) return reply('Its off')
                                                var ini = nsfw.indexOf(from)
                                                nsfw.splice(ini, 1)
                                                fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                                                reply('Successfully disabled the nsfw feature')
                                        } else {
                                                reply('1 to turn on, 0 to turn off')
                                        }
                                        break;


case 'runtime': case 'alive':
                let pinga = ` ${uptimeMessage}`
                client.sendMessage(m.chat, {
        image: fs.readFileSync('./database/media/alive.jpg'),
        caption: pinga,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: `INFINITY-AI is alive▪︎`,
                sourceUrl: `https://t.me/EscaliBud`,
                body: `Bot Created By 𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟}`
            }
        }
    }, {
      quoted: m
                })
                break;
case 'ping': {
  await doReact("🕘");
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: '*cheking...*' });

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Response speed is:* ${new Date() - startTime} ms`
        }
      }
    }, {});
     await doReact("📍");
  } 
break;
          case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
 break;

case '':
        if(isCmd2){
        client.sendMessage(from, { react: { text: "✨" , key: m.key }})

     reply(`Hello ${pushname} ,You used my prefix.Please  Type *${prefix}help* to get my full command list.`)
        }

    break;
case 'ghstalk': case 'githubstalk': case'github': {
  client.sendMessage(from, { react: { text: "🔍" , key: m.key }})

  if (!q) return replay(`Give me a user name like *${prefix}github EscaliBud*`)

  gitdata = await githubstalk.githubstalk(`${q}`)
  client.sendMessage(m.chat, { image: { url : gitdata.profile_pic }, caption: 
  `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}` }, { quoted: m } )
  }
  break;  
case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case 'play':
    case 'stream':{
        if (!text) {
            reply('Provide a search term!\nE.g: play NWA Appetite for destruction. ')
            return;
        }
        try {
            const {
                videos
            } = await yts(text);
            if (!videos || videos.length <= 0) {
                reply(`No Matching videos found for : *${args[0]}*!!`)
                return;
            }
            let urlYt = videos[0].url
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 7200) {
                reply(`File is too big for me to download`);
                return;
            }
            const getRandonm = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandonm(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            console.log("Audio downloading ->", urlYt);

reply(`
╭═════════•∞•══╮
│⿻ *INFINITY-AI MUSIC*
│  *Youtube Player* ✨
│⿻ *Title:* ${infoYt.videoDetails.title}
│⿻ *Requested By:* ${m.pushName}
│⿻ *Bot By:* 𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟
╰══•∞•═════════╯
✧∭✧∰✧∭✧ [] ✧∭✧∰✧∭✧
 ©Infinity Hackers 2024

`);
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Audio downloaded ! \n Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 200) {
                //sendFile(from, fs.readFileSync(`./${randomName}`), msg, { audio: true, jpegThumbnail: (await getBuffer(dl.meta.image)).buffer, unlink: true })
                await client.sendMessage(
                    from, {
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: "audio/mpeg",
                        fileName: titleYt + ".mp3",
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size bigger.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
    }
break;
       case 'ytmp4':
case 'ytvideo':
case 'ytv':
        const getRandommm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];
            if (!urlYt.startsWith("http")) {
                reply(`Give youtube link!`);
                return;
            }
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 1800) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandommm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 100) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
            case 'style': case 'styletext': {
                if (!text) return reply('You sent nothing') //wont response when limit runs out\\

                let { styletext } = require('./lib/scraper')
                if (!text) return reply(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🔮 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
            }
            break;

  case 'video':
        const getRandomm = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        if (args.length === 0) {
            reply(` URL is empty! \nSend ${prefix}ytmp4 url`);
            return;
        }
        try {
            let urlYt = args[0];


            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= 2400) {
                reply(`Video file too big!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandomm(".mp4");

            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            //22 - 1080p/720p and 18 - 360p
            console.log("Video downloading ->", urlYt);
            // reply("Downloading.. This may take upto 5 min!");
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            // Convert the file size to megabytes (optional)
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            console.log("Video downloaded ! Size: " + fileSizeInMegabytes);
            if (fileSizeInMegabytes <= 1024) {
                client.sendMessage(
                    from, {
                        video: fs.readFileSync(`./${randomName}`),
                        caption: `${titleYt}`,
                    }, {
                        quoted: m
                    }
                );
            } else {
                reply(`File size big.`);
            }

            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            reply(e.toString())
        }
break;
          case "lyrics": 
 try { 
//if (!isPrem) return reply('This is a premium command')
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break ;

          case 'yta':
case 'song':
  try {
    if (!text) {
      reply('Enter YouTube Link or Search Query!');
      doReact("❌");
      return;
    }

    reply('Please Wait..');
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *INFINITY-AI MUSIC*
│  *Youtube Player* ✨
│⿻ *Title:* ${videoInfo.title}
│⿻ *Duration:* ${videoInfo.timestamp}
│⿻ *Uploader:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(videoInfo.uploadDate)}
╰══•∞•═════════╯
`, 
};


          await client.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await client.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          reply('Error sending audio.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        reply('Audio not found.');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *INFINITY-AI MUSIC*
│  *Youtube Mp3 Player* ✨
│⿻ *Title:* ${firstVideo.title}
│⿻ *Duration:* ${firstVideo.timestamp}
│⿻ *Uploader:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`,
};
          await client.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await client.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          reply('Error sending audio.');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    reply('Unexpected error occurred.');
    await doReact("❌");
  }
  break;
        
              case "script": case "repo":
const _0xcb3a50 = _0x6703;
(function (_0x6f9f01, _0x81a01d) {
    const _0x2a8c87 = _0x6703, _0x24079e = _0x6f9f01();
    while (!![]) {
        try {
            const _0x50ad9c = -parseInt(_0x2a8c87(0x13d)) / (-0x12b8 + 0xc1d + 0x69c) * (-parseInt(_0x2a8c87(0x152)) / (0x191 + -0x1b45 * -0x1 + 0xcd * -0x24)) + parseInt(_0x2a8c87(0x12c)) / (-0xfb3 + 0x1 * 0x283 + 0xd33) + parseInt(_0x2a8c87(0x150)) / (-0x980 + -0x64e * 0x1 + 0xfd2) + parseInt(_0x2a8c87(0x12d)) / (0x23a + 0x4 * 0x66e + -0x1bed) * (-parseInt(_0x2a8c87(0x12b)) / (0x26a3 * -0x1 + 0x568 + -0x2141 * -0x1)) + parseInt(_0x2a8c87(0x147)) / (0x49 * 0x19 + 0x2520 + -0x275 * 0x12) + parseInt(_0x2a8c87(0x13c)) / (0x1 * -0x1fdc + -0x22fb + -0x35 * -0x143) + -parseInt(_0x2a8c87(0x14d)) / (0x1e04 + -0xb * -0x2c7 + 0x34 * -0x12a);
            if (_0x50ad9c === _0x81a01d)
                break;
            else
                _0x24079e['push'](_0x24079e['shift']());
        } catch (_0x4047d9) {
            _0x24079e['push'](_0x24079e['shift']());
        }
    }
}(_0x5ed0, 0xddda2 + -0xe5d56 + 0xbefcc));
let scmess = _0xcb3a50(0x125) + _0xcb3a50(0x14b) + _0xcb3a50(0x132) + _0xcb3a50(0x134) + _0xcb3a50(0x145) + _0xcb3a50(0x133) + _0xcb3a50(0x144) + _0xcb3a50(0x14f) + _0xcb3a50(0x141) + _0xcb3a50(0x148) + _0xcb3a50(0x13e) + _0xcb3a50(0x127) + _0xcb3a50(0x12a) + _0xcb3a50(0x139) + _0xcb3a50(0x123) + _0xcb3a50(0x151) + _0xcb3a50(0x137) + _0xcb3a50(0x13f) + _0xcb3a50(0x140) + _0xcb3a50(0x12e) + _0xcb3a50(0x139) + _0xcb3a50(0x128) + _0xcb3a50(0x142) + _0xcb3a50(0x14e) + _0xcb3a50(0x146) + _0xcb3a50(0x13a);
function _0x6703(_0x598fe9, _0x264b24) {
    const _0x44d5ff = _0x5ed0();
    return _0x6703 = function (_0x4a4a39, _0x3a4386) {
        _0x4a4a39 = _0x4a4a39 - (-0x3bf * 0x5 + 0x2ef * -0x2 + -0x7 * -0x3ad);
        let _0x4a9a47 = _0x44d5ff[_0x4a4a39];
        return _0x4a9a47;
    }, _0x6703(_0x598fe9, _0x264b24);
}
function _0x5ed0() {
    const _0x4e7130 = [
        '4115349GNydpr',
        '──[\x20GITHUB',
        'ACKERS\x20KEN',
        '5PO0wZ94WM',
        'T\x0a│◦➛Owner',
        'YA\x20◇.',
        '18798525tnhHyD',
        't.me\x20\x0a\x20\x20└─',
        'HACKERS\x20KE',
        '3385084YmCoZc',
        'om/EscaliB',
        '2tOczOY',
        'X2e',
        '//github.c',
        'readFileSy',
        '\x0a╭─❒\x20SCRIP',
        'sendMessag',
        '\x20\x20│◦➛Scrip',
        '//Infinity',
        'INFINITY-A',
        't\x20Link\x20:\x0a\x20',
        '199164dkQxtd',
        '997566bKyLCq',
        '120eVHfme',
        'hannel:\x20\x0a\x20',
        '029VaByn0u',
        '/channel/0',
        'atsapp.com',
        '\x20:\x20Kresswe',
        'der953\x0a│∞\x20',
        'll\x0a│◦➺Co-O',
        './escalibu',
        'chat',
        'ud/Infinit',
        'INFINITY\x20H',
        '\x20│◦➛https:',
        '───────❒',
        'https://wh',
        '8254680QmqdZK',
        '836438odPfUT',
        '\x20]──────❒\x0a',
        'y-AI\x0a\x20\x20│◦➛',
        'Telegram\x20C',
        'NYA*\x0a└────',
        'HackersKE.',
        'd.jpg',
        '*INFINITY\x20',
        'wner\x20:\x20Spi',
        '──────────'
    ];
    _0x5ed0 = function () {
        return _0x4e7130;
    };
    return _0x5ed0();
}
client[_0xcb3a50(0x126) + 'e'](m[_0xcb3a50(0x136)], {
    'text': scmess,
    'contextInfo': {
        'externalAdReply': {
            'showAdAttribution': !![],
            'title': _0xcb3a50(0x129) + 'I',
            'body': _0xcb3a50(0x138) + _0xcb3a50(0x149) + _0xcb3a50(0x14c),
            'thumbnail': fs[_0xcb3a50(0x124) + 'nc'](_0xcb3a50(0x135) + _0xcb3a50(0x143)),
            'sourceUrl': _0xcb3a50(0x13b) + _0xcb3a50(0x131) + _0xcb3a50(0x130) + _0xcb3a50(0x12f) + _0xcb3a50(0x14a) + _0xcb3a50(0x122),
            'mediaType': 0x1,
            'renderLargerThumbnail': !![]
        }
    }
}, { 'quoted': m });
          break;
case "enc":
let forq = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
var JavaScriptObfuscator = require('javascript-obfuscator');
if (!text && !m.quoted) throw 'Quote/tag a code to encrypt';

var obfuscationResult = JavaScriptObfuscator.obfuscate(forq, 


    {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

console.log("successfully encrypted the code");
reply(obfuscationResult.getObfuscatedCode());

break;
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);
    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
break;
case "eval":{
   if (!Owner) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 

          break;




case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });

break;

//Heroku Settings

          break;
case "getvar": 
 if (!Owner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*InfinityAI Variables*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 

     break; 
 case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  



 break;

//Goup Commands 

          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;

case 'restart':  
  if (!Owner) throw `Owner Only` 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
case "remove": case "kick": { 
try {

                 if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 



                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
 if (!users) throw NotOwner; 
 if (users  == client.decodeJid(client.user.id)) throw 'Bot cannot remove itself 😡';
 if (users == Owner) { m.reply('I cannot kick Remove my owner')}; 
                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
await m.reply('Successfully removed!'); 
} catch (errr) { 
 await reply("Something is wrong! Did you give me a user to remove?")}


         } 

  break;
 case "mute": { 

                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 
 case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 

                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 

 }          
case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Promoted Successfully! 👑'); 
         } 
 break; 
 case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 

                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Demoted Successfully! 🎗️'); 
         } 
 break;

//Anime and Manga

case 'anime': {

  if (!m.isGroup) return reply('Use this command on a group')
  client.sendMessage(from, { react: { text: "🍁" , key: m.key }});
  if(!text) return reply(`Please proide a search term!\n\n*Example:* ${prefix}anime naruto`)

  const malScraper = require('mal-scraper')
  reply('Please wait...');
          const anime = await malScraper.getInfoFromName(text).catch(() => null)
          if (!anime) return reply(`${p}Could not find your scarch`)
  let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
                  await client.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                  }
                  break;


case 'manga':

  if (!m.isGroup) return reply('Group command') 
client.sendMessage(from, { react: { text: "🍁" , key: m.key }})

reply('Please wait..')                                                        
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!text) return reply(`Please proide a search term!\n\n_Example:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
  let mang = `*Title:* ${srh.data[0].title}\n`;
  mang += `*Status:* ${srh.data[0].status}\n`;
  mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
  mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
  mang += `*Genres:*\n`;
  for (let i = 0; i < srh.data[0].genres.length; i++) {
    mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
  }
  mang += `*Published on:* ${srh.data[0].published.from}\n`;
  mang += `*Score:* ${srh.data[0].scored}\n`;
  mang += `*Popularity:* ${srh.data[0].popularity}\n`;
  mang += `*Favorites:* ${srh.data[0].favorites}\n`;
  mang += `*Authors:*\n`;
  for (let i = 0; i < srh.data[0].authors.length; i++) {
    mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
  }
  mang += `\n*URL:* ${srh.data[0].url}\n\n`;
  if (srh.data[0].background !== null)
    mang += `*Background:* ${srh.data[0].background}`;
  mang += `*Description:* ${srh.data[0].synopsis.replace(
    /\[By InfinityAI]/g,
    ""
  )}`;
client.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break;
case 'gdrive': {
                if (!args[0]) return reply(`Enter the Google Drive link`)
        reply ('please wait..')
        const fg = require('api-dylux')
        try {
        let res = await fg.GDriveDl(args[0])
         await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
        client.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
        reply('Error: Check link or try another link') 
  }
}
break;
case "xnxxdl": {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
//if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply ('Group command')
        if (!text) return reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return reply(`Enter an xnxx link`)
        reply('Please wait')
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
client.sendMessage(m.chat, { caption: `≡  *XNXX DL BY INFINITYAI*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}
`, video: {url: xn.url_dl} }, { quoted: m })
}
break;
case 'xnxxsearch': {
if (!isNsfw) return reply(`Nsfw feature is not yet active in this group\nType: ${prefix}nsfw 1 \To activate`)
//if (!isPrem) return reply('This is a premium command')
        if (!m.isGroup) return reply('Group command')
        if (!text) return reply(`Enter Query`)
        reply('Please wait')
        const fg = require('api-dylux')
        let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) reply(ff)
              }
              break;
case 'ttc': case 'ttt': case 'tictactoe': {
//if (!isPrem) return reply('This is a premium command')
      
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}

            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game!!'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partne Joined!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Current Player: @${room.game.currentTurn.split('@')[0]}


Type *surrender* to give up and admit defeat`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting for a patner.' + (text ? ` Type the following command: ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break;
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Successfully deleted the TicTacToe Session`, m)
            } else if (!this.game) {
            m.reply(`No active TicTacToe  session.`)
            } else throw '?'
            } catch (e) {
            m.reply('Damaged💀')
            }
            }
            break;
case 'addowner':
                if (!Owner) return reply('Owner Command')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 923166234989`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An owner!!!`)
break;
case 'delowner':
                if (!isCreator) return reply('This Is A owner Command')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 923166234989`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break;
case "owner":
const _0x48c7ba = _0x3605;
(function (_0x3166c4, _0x90c7ee) {
    const _0x53cc3b = _0x3605, _0x261942 = _0x3166c4();
    while (!![]) {
        try {
            const _0xa90f05 = parseInt(_0x53cc3b(0x1c7)) / (0x237d + 0x1771 + -0x3aed) * (parseInt(_0x53cc3b(0x1db)) / (0xbe8 + -0x1897 * 0x1 + -0x1 * -0xcb1)) + parseInt(_0x53cc3b(0x1cf)) / (0x9 * -0x3ed + -0x401 + 0x2759) + parseInt(_0x53cc3b(0x1d4)) / (0x4d * 0x62 + 0x1218 + -0x17c7 * 0x2) * (parseInt(_0x53cc3b(0x1dc)) / (0x3b8 + 0x1 * -0x1e61 + -0x2ab * -0xa)) + parseInt(_0x53cc3b(0x1e1)) / (-0xa9 * -0x14 + 0x3 * -0x1b7 + -0x809) * (parseInt(_0x53cc3b(0x1e0)) / (-0x8aa + 0x2377 * 0x1 + -0x2 * 0xd63)) + -parseInt(_0x53cc3b(0x1dd)) / (-0x9bc + 0x202f + -0x166b) + parseInt(_0x53cc3b(0x1df)) / (0x23ee + 0x22bc + -0x46a1) + -parseInt(_0x53cc3b(0x1d7)) / (-0xabe + -0x3 * 0x9 + 0xae3 * 0x1) * (parseInt(_0x53cc3b(0x1de)) / (0x5 * -0x283 + 0xb * -0x2a3 + -0x1 * -0x299b));
            if (_0xa90f05 === _0x90c7ee)
                break;
            else
                _0x261942['push'](_0x261942['shift']());
        } catch (_0x57690a) {
            _0x261942['push'](_0x261942['shift']());
        }
    }
}(_0x4760, -0x38bf1 + 0x1 * 0xcb0e6 + -0x24596));
function _0x3605(_0x2da8a2, _0x282dca) {
    const _0x530f2c = _0x4760();
    return _0x3605 = function (_0x2522af, _0x438624) {
        _0x2522af = _0x2522af - (0x5 * 0x215 + -0x86 * 0x2d + -0x14 * -0xbf);
        let _0x49f70b = _0x530f2c[_0x2522af];
        return _0x49f70b;
    }, _0x3605(_0x2da8a2, _0x282dca);
}
{
    let vcard = _0x48c7ba(0x1d1) + 'D\x0a' + (_0x48c7ba(0x1d9) + '0\x0a') + (_0x48c7ba(0x1c8) + _0x48c7ba(0x1d2)) + (_0x48c7ba(0x1d0) + _0x48c7ba(0x1cd)) + (_0x48c7ba(0x1c9) + _0x48c7ba(0x1d6)) + (_0x48c7ba(0x1d3) + _0x48c7ba(0x1cc) + _0x48c7ba(0x1da) + _0x48c7ba(0x1ce) + _0x48c7ba(0x1e3) + _0x48c7ba(0x1e2)) + _0x48c7ba(0x1cb);
    client[_0x48c7ba(0x1d8) + 'e'](m[_0x48c7ba(0x1ca)], {
        'contacts': {
            'displayName': _0x48c7ba(0x1d5) + '.',
            'contacts': [{ 'vcard': vcard }]
        }
    }, { 'quoted': m });
}
function _0x4760() {
    const _0x5ec615 = [
        '.;;;',
        'TEL;type=C',
        '96508KAPIBL',
        '𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟ᴡ͟ᴇ͟ʟ͟ʟ͟',
        'ᴡ͟ᴇ͟ʟ͟ʟ͟;\x0a',
        '210CFdFjY',
        'sendMessag',
        'VERSION:3.',
        'OICE;waid=',
        '392evZDtp',
        '85ulyQEs',
        '6818096ooaYUm',
        '842919TFfYnS',
        '7810290nbdUHN',
        '2429cUSrfu',
        '13188PAwcce',
        '8-2420-85\x0a',
        '85:+254\x2079',
        '1912IfWhRn',
        'N:;Muiruri',
        'ORG:𓄂ᴋ͟ʀ͟ᴇͥ͟sͣ͟sͫ͟',
        'chat',
        'END:VCARD',
        'ELL;type=V',
        'll.\x0a',
        '2547982420',
        '1489329bLomsu',
        'FN:Kresswe',
        'BEGIN:VCAR'
    ];
    _0x4760 = function () {
        return _0x5ec615;
    };
    return _0x4760();
} 
break;
           case "gdesc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 👍'); 
             } 
 break; 
          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
    } 
    break;
case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/EscaliBud/EscaliBud`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply('An error occured'))
break
            case 'bcgc':
            case 'bcgroup': {
                if (!Owner) return reply('You are not my Owner')
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `ʙʀᴏᴀᴅᴄᴀsᴛ ᴍᴇssᴀɢᴇ\n\n${text}\n\n` + '```' + '\n\n\nɪɴғɪɴɪᴛʏ ᴀɪ ʙʏ ɪɴғɪɴɪᴛʏ ʜᴀᴄᴋᴇʀs'
                    client.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: '□Paid BroadCast□',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://i.imgur.com/pFHxvfE.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break;
          case "leave": { 
                 if (!isAdmin) throw admin; 
 await client.sendText(m.chat, 'GoodBye Everyone.\n\n *InfinityAI is leaving this chat. . .*'); 
                 await client.groupLeave(m.chat); 

             } 
 break; 
          case "gpp": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated'); 
    } 
    break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent  the new group link to your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }

  break;
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
            case 'antilink': {
                            if (!m.isGroup) return reply('Group command ')
                if (!isAdmin && !Owner) return reply('Admin Command')
                if (!isBotAdmin) return reply('You need a medical check!')
if (args[0] === "on") {
if (AntiLinkAll) return reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilinkall))
reply('Success in turning on all antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break;
case 'weather':
       
        client.sendMessage(from, { react: { text: "🛰", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        client.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
    break;
      case 'nsfwmenu':
        if (!isNsfw) return reply(NotNsfw);
        if (!m.isGroup) return reply(group);

        const nsfwmenu=`┌──⊰ _*🔞NSFW 🔞*_
│⊳ 💦  ${prefix}blowjob
│⊳ 💦  ${prefix}cum
│⊳ 💦  ${prefix}foot
│⊳ 💦  ${prefix}gangbang
│⊳ 💦  ${prefix}hentai
│⊳ 💦  ${prefix}pussy
│⊳ 💦  ${prefix}ass
│⊳ 💦  ${prefix}trap
│⊳ 💦  ${prefix}maal
│⊳ 💦  ${prefix}ʀɪʙʙᴏɴꜱ
│⊳ 💦  ${prefix}ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ
│⊳ 💦  ${prefix}ʜᴇᴀᴅʙᴀɴᴅ
│⊳ 💦  ${prefix}ꜰᴏxɢɪʀʟ
│⊳ 💦  ${prefix}ᴀɴɪᴍᴀʟᴇᴀʀꜱ
│⊳ 💦  ${prefix}ʙʀᴀ
│⊳ 💦  ${prefix}ꜱᴋɪʀᴛ
│⊳ 💦  ${prefix}ʙʀᴇᴀꜱᴛꜱ
│⊳ 💦  ${prefix}ᴛᴀᴛᴛᴏᴏ
│⊳ 💦  ${prefix}ᴄʜᴀɪɴ
└──────────⊰ 
`
   client.sendMessage(m.chat, { image: { url: "./escalibud.jpg" }, caption: nsfwmenu }, { quoted: m });
        break;
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
    if (!m.isGroup) return reply(group);
    if (!isNsfw) return reply(NotNsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    client.sendMessage(m.chat, { caption: 'OMG🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;

case 'maal': {
  if (!isNsfw) return reply(NotNsfw);
  if (!m.isGroup) return reply(group);
  reply('Please wait..');
  await client.sendMessage(m.chat, {
    image: await getBuffer('https://ayushhh.onrender.com'),
    caption: 'OMG 🥵',
  }, { quoted: m });
}
break;
case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             let pomi = await fetch('https://api.github.com/search/repositories?q='+q)
            let dhumi = await pomi.json()
             if (pomi.status !== 200) throw dhumi
             str = dhumi.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? '*FORKS*' : ''}
${repo.html_url}
*CREATED ON:* ${formatDate(repo.created_at)}
*LAST UPDATED ON:* ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐ ${repo.stargazers_count}
${repo.open_issues} *ISSUES:*${repo.description ? `
*DESCRIPTION:*\n${repo.description}` : ''}
*CLONE:* $ git clone ${repo.clone_url}
`.trim()
}).join('\n\n')
            reply(str)
break;
            case 'checkdeath':
             if (!text) return reply(`Use Someone's Name, Example : ${prefix + command} Kresswell `)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break;
        default: {
                                if (budy.startsWith('=>')) {
                    if (!Owner) return reply(NotOwner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!Owner) return reply(NotOwner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!Owner) return reply(NotOwner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }
      if(isCmd2){
          client.sendMessage(from, { react: { text: "❌", key: m.key }}) 
          reply (`🗿Kresswell Has not programmed me with such a Command!!, *${pushname}* .Type ${prefix} owner to contact my owner. Type *${prefix}help* to get my full command list!`)

      }                                 


          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
