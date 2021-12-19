let handler = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu successfully set\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu reset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' successfully set\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Current Exp)
$maxexp (Exp To Level Up)
%totalexp (Total Exp)
%xp4levelup (Exp needed to levelup)
%limit (Limit)
%level (levels)
%role (Role)
%name (Name)
%weton (Today's Weton)
%week (Day)
%date (Date)
%time (Hour)
%uptime (Uptime Bot)
%rtotalreg (Number of registered users in database)
%totalreg (Number of Users in the database)
%npmname
%npmdesc
%version
%github

Header & Footer Menu Section:
%category (Category)

Body Menu Section:
%cmd (Command)
%islimit (If command is limited)
%isPremium (If command premium)
`.trim()
