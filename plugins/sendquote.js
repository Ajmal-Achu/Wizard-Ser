async function handler(m) {
    if (!m.quoted) throw 'reply message!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'the message you are replying to contains no reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler