let fetch = require('node-fetch')
const { parse } = require('rss-to-json');
// async await
(async () => {

    var rss = await parse('https://www.theverge.com/rss/index.xmll');

    console.log(JSON.stringify(rss, null, 3));

})();
// Promise

parse('https://www.theverge.com/rss/index.xml').then(rss => {
    console.log(JSON.stringify(rss, null, 3));
});
handler.command = /^(technews)$/i
handler.tags = ['internet']
handler.help = ['technews']
module.exports = handler