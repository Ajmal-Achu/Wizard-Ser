let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`*Can't fight anymore because you're fighting bro.*`)

  let users = participants.map(u => u.jid)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.DATABASE.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(1,5)

  m.reply(`*You* (level ${conn.level(global.DATABASE.data.users[m.sender].xp)[0]}) menantang *${conn.getName(lawan)}* (level ${conn.level(global.DATABASE.data.users[lawan].xp)[0]}) dan sedang dalam pertarungan sengit.\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang.`)

  conn.fight[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['badass','stupid','mostly coli','lack of sleep','broken sword','cut off hand','limping','wet dream','cheated','havent had coffee','not showered', 'kopong knee', 'gay', 'hated by owne']
  let alasanMenang = ['great','doesnt like smoking','has a long sword','your sword is strong','dont like coli','had coffee this morning','loves owner','can somersault','good at','diligent push up','dont like to shake the stick']

  let kesempatan = []
  for (i=0;i<conn.level(global.DATABASE.data.users[m.sender].xp)[0];i++) kesempatan.push(m.sender)
  for (i=0;i<conn.level(global.DATABASE.data.users[lawan].xp)[0];i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 50000
    global.DATABASE.data.users[m.sender].money += hadiah
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*You* (level ${conn.level(global.DATABASE.data.users[m.sender].xp)[0]}) WIN against *${conn.getName(lawan)}* (level ${conn.level(global.DATABASE.data.users[lawan].xp)[0]}) because of you${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nPrize Rp. ${hadiah.toLocaleString()}`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 50000
    global.DATABASE.data.users[m.sender].money -= denda
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*You* (level ${conn.level(global.DATABASE.data.users[m.sender].xp)[0]}) LOSE against *${conn.getName(lawan)}* (level ${conn.level(global.DATABASE.data.users[lawan].xp)[0]}) because of you ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nYour money is reduced by Rp. ${denda.toLocaleString()}`)
  }else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nIt's a draw, bro, you don't get anything :v`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['fight']
handler.tags = ['game']
handler.command = /^(fight)$/i
handler.limit = true
handler.group = true
handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
