let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) trhow `Enter a query, for example: ${usedPrefix +command} Logo`
    let res = await fetch(global.API('aqul', '/pinterest', { q: text }, 'apikey'))
    m.reply(global.wait)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    // let img = `${json.image}`
    let itsuki = `
Pinterest!
Query: ${text}
`.trim()
await conn.sendButtonImg(m.chat, await (await fetch(json.image)).buffer(), itsuki, '© Eva', '🔎SEARCH MORE', `.pinterest ${text}`, { thumbnail: Buffer.alloc(0) })
}
handler.command = /^pinterest$/i
handler.tags = ['internet']
handler.help = ['pinterest <query>']
module.exports = handler

