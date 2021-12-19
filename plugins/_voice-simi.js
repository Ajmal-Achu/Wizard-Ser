let axios = require('axios')
const googleTTS = require('google-tts-api')
let { MessageType}  = require('@adiwajshing/baileys')
const { text } = require('cheerio/lib/static')
let handler = m => m
handler.before = async (m) => {
    let chat = global.DATABASE.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
    if (!m.text) return
    let say = m.text,
    try {
        axios.get(`https://api.simsimi.net/v2/?text=&lc=en&cf=false`).then(res => {
              let text = res.data.success
              let url = googleTTS.getAudioUrl(`${text}`, {
                  lang: 'id',
                  slow: false,
                  host: 'https://translate.google.com',
              })
              conn.sendFile(m.chat, url, 'simi.opus', null, m, true)
          })}