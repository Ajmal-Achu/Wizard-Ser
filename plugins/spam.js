let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw 'Please enter the number to be spammed'
if (!pesan) throw 'Please enter the message to be sent'
if (jumlah && isNaN(jumlah)) throw 'Amount must be a number!'

  let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
  let fixedJumlah = jumlah ? jumlah * 1 : 10
  if (fixedJumlah > 100) throw 'Too much quantity!'
  await m.reply(`[!] Successfully sent whatsapp spam to ${nomor} as much ${fixedJumlah} time!`)
  for (let i = fixedJumlah; i > 1; i--) {
  if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
  }
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['premium']
handler.command = /^spam(wa)?$/i

handler.group = true
handler.premium = true

module.exports = handler
