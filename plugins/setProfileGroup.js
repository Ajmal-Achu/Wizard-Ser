let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} not supported`
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Image not found'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `send/reply image with command *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler