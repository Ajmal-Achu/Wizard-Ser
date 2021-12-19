let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}
${user.banned ? 'you are banned' : 'Iam Wizard-Ser, please dont spam/call/ask to save to this number. Can I help you?, Type .menu To Get Bot Menu}
`.trim(), watermark, user.banned ? 'Bot Owner' : 'Menu', user.banned ? '.owner' : '.?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Kolkata').format('HH')
    res = "Good morning"
    if (time >= 4) {
        res = "Good morning"
    }
    if (time > 10) {
        res = "Good afternoon"
    }
    if (time >= 15) {
        res = "Good afternoon"
    }
    if (time >= 18) {
        res = "Good night"
    }
    return res
}
