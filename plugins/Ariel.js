let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Dont Tag My Master...
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@919744196187/i
handler.command = new RegExp

module.exports = handler
