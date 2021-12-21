/*
   Coded by amal-dx
*/
function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '918590967139','919744196187' 'ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
