const { toPTT } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Reply the audio you want to convert to a voice note with the command *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  conn.sendFile(m.chat, audio, '', '', m, 1, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn']
handler.tags = ['audio']

handler.command = /^to(vn|(ptt)?)$/i

module.exports = handler
