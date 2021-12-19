const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No picture'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} is not supported`
  let img = await q.download()
  let url = await uploadImage(img)
  let Horny = `https://some-random-api.ml/canvas/horny?avatar=${pp}`
  let stiker = await sticker(null, Horny, 'Horny', '@Eva')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}


handler.help = ['hrnycard (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^(hrnycard)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
