// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. where's the text?`
  try {
    await conn.setStatus(text)
    m.reply('Succeed!')
  } catch (e) {
    console.log(e)
    throw `Eror`
  }
}
handler.help = ['setbotbio <txt>']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
