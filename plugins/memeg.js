const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm.. where's the text?\n\n${usedPrefix + command} <top text>|<bottom text>`
  let [t1, t2] = text.split`|`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Unknown Mimetype`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not supported`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1 ? t1 : '')}/${encodeURIComponent(t2 ? t2 : '')}.png`, {
    background: link
  }), 'meme.png', watermark, m)
}
handler.help = ['mememaker'].map(v => v + ' <top text>|<bottom text>')
handler.tags = ['tools']
handler.command = /^(meme(maker|g))$/i

module.exports = handler
