let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        await conn.sendButton(m.chat, '_There are still votes in this chat!_', '© Ammu', 'DELETE VOTE', `${usedPrefix}deletevote`)
        throw false
    }
    await conn.send2Button(m.chat, `Voting starts!
*${usedPrefix}upvote* - for sure
*${usedPrefix}devote* - for not
*${usedPrefix}checkvote* - to check the vote
*${usedPrefix}deletevote* - to delete votes`, '© Ammu', 'UPVOTE', `${usedPrefix}upvote`, 'DEVOTE', `${usedPrefix}devote`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
