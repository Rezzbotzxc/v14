let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command }) => {
let img = './src/mike.png'
let img1 = fs.readFileSync('./src/img1.png')
let img2 = fs.readFileSync('./src/img2.png')
let user = global.DATABASE.data.users[m.sender]
/*conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.fromMe ? conn.user : conn.contacts[who]
pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
					teks = `ππππ ππ π½ππΌπ`// \n\n${kyun(runtime)}`
					run = `${kyun(runtime)}`
					var itsme = `0@s.whatsapp.net`
					var split = `teks`
					const rtimebro = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
					}
					//m.reply(teks)
conn.sendMessage(m.chat, `β¬£ββγ ---------- γβββ¬£\n${ucapan()} kak Ada yang bisa saya bantu?\nβ¬£ββγ ---------- γβββ¬£\n`, 'conversation', {quoted: m, thumbnail: img2, contextInfo:{externalAdReply: {title: teks, body: `${run}`, sourceUrl: namagithub, thumbnail: img1}}})
}
handler.customPrefix = /^(P|p|Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello|oy)$/i
handler.command = new RegExp
module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siangπ"
    }
    if (time >= 15) {
        res = "Selamat soreπ"
    }
    if (time >= 18) {
        res = "Selamat malamπ"
    }
    return res
}