function handler(m) {
  this.sendContact(m.chat, '918590967139','919744196187'[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
