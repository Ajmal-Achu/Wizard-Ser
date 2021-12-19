const { pin } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `uhm.. where is the url?\n\nexample:\n${usedPrefix + command} https://id.pinterest.com/pin//`
    if (!args[0].match(/https:\/\/.*pinterest.com\/pin|pin.it/gi)) throw `url salah`

    pin(args[0]).then(async res => {
        let pin = JSON.stringify(res)
        let json = JSON.parse(pin)
        if (!json.status) throw `Unable to download`
        await m.reply(global.wait)
        await conn.sendFile(m.chat, json.data.url, '', watermark, m)
    })

}
handler.help = ['pinterestvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^pint(erest)?v(ideo)?$/i

handler.limit = true

module.exports = handler