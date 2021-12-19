module.exports = Object.assign(async function handler(m, { text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `No hashes`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw 'You dont have permission to delete this sticker command'
    delete sticker[hash]
    m.reply(`Succeed!`)
}, {
    help: ['cmd'].map(v => 'del' + v + ' <text>'),
    tags: ['database'],
    command: ['delcmd']
})