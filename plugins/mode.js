let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let haruno = `┌ 「 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄 」
sᴇʟᴇᴄᴛ ᴡɪᴢᴀʀᴅ sᴇʀ ᴡᴏʀᴋ ᴛʏᴘᴇ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), haruno, '© ᴡɪᴢᴀʀᴅ sᴇʀ', '𝑷𝑼𝑩𝑳𝑰𝑪', '.on public', '𝑷𝑹𝑰𝑽𝑨𝑻𝑬', '.off public', m)
}
handler.tags = ['main']
handler.help = ['mode']
handler.command = /^(mode)$/i
module.exports = handler
