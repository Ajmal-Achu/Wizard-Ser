let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) {
        await conn.sendButton(m.chat, `_*no voting in this group!*_`, '© Ammu', 'START VOTE', `${usedPrefix}startvote`)
        throw false
    }

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    let caption = `
    〔 VOTE 〕
*Reason:* ${reason}
*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}
*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}
_by Eva_
    `.trim()
    await conn.send3Button(m.chat, caption, '© Ammu', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`, 'DELETE VOTE', `${usedPrefix}deletevote`, { contextInfo: { mentionedJid } })
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^checkvote$/i
handler.group = true
module.exports = handler
