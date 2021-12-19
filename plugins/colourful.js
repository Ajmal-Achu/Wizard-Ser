const  uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let text = text? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/colorful', { text: text },'APIKEY'),'colorful.mp4', 'teks', m)
}
handler.help ['colorful'].map((v) => v + " <text>")
handler.tags = ['videomaker']
handler.command = /^colorful$/i

module.exports = handler