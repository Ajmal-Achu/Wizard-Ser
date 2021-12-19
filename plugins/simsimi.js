let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} hai`
  let res = await fetch(global.API('pencarikode', '/api/simsimii', { text: encodeURIComponent(text) }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.result == 'I dont understand what you are saying. Please teach me.') await m.reply('The sim hasnt been taught yet, so I dont know t_t the custom message is on , Tell My Master To Teach Me..')
  await m.reply(`*Simi:* ${json.result}`)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

