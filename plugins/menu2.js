let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/reduced_IMG-20211219-WA0031_2.jpg")).buffer(), devil, 'ᴡɪᴢᴀʀᴅ sᴇʀ  ʙʏ ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ © ī.am ꪶᴡɪᴢᴀʀᴅ sᴇʀꫂ⁩⁴⁰⁴⁩' , 'ᴍᴇɴᴜ', '.? listt', 'ᴏᴡɴᴇʀ', ',owner')
}
handler.tags = ['main']
handler.help = ['menu']
handler.command = /^(menu)$/i
module.exports = handler