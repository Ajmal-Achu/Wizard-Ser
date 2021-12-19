let fs = require('fs')
global.owner = ['918590967139','919744196187','917012074386'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'FuzBot1',
  'https://api.lolhuman.xyz': 'sdz8VotwEnDd4HvdIUfy1e4qTDx',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
function _0x3dc2(_0x4d22a2,_0x4bda1a){var _0x5e0a56=_0x5e0a();return _0x3dc2=function(_0x3dc26f,_0x5dca46){_0x3dc26f=_0x3dc26f-0x166;var _0x30e834=_0x5e0a56[_0x3dc26f];return _0x30e834;},_0x3dc2(_0x4d22a2,_0x4bda1a);}var _0x1c1896=_0x3dc2;(function(_0x3209a2,_0x10127c){var _0x198050=_0x3dc2,_0x4713e8=_0x3209a2();while(!![]){try{var _0x393e18=parseInt(_0x198050(0x167))/0x1+parseInt(_0x198050(0x16b))/0x2+-parseInt(_0x198050(0x166))/0x3+-parseInt(_0x198050(0x16c))/0x4*(-parseInt(_0x198050(0x16d))/0x5)+-parseInt(_0x198050(0x169))/0x6+parseInt(_0x198050(0x16f))/0x7+-parseInt(_0x198050(0x170))/0x8;if(_0x393e18===_0x10127c)break;else _0x4713e8['push'](_0x4713e8['shift']());}catch(_0x1ed0e2){_0x4713e8['push'](_0x4713e8['shift']());}}}(_0x5e0a,0x655ed),global[_0x1c1896(0x168)]='Wizard\x20Ser',global[_0x1c1896(0x16a)]=_0x1c1896(0x16e));function _0x5e0a(){var _0x442c91=['3636162ynNtJX','author','1126866kLUNsF','2957464PGLMKT','5mURUAG','Wizard\x20Ser','5266660CTfSAc','8831032gFCzmd','122010qZwCVC','110610qyKbfL','packname'];_0x5e0a=function(){return _0x442c91;};return _0x5e0a();}

global.wait = '_*Please Wait..*_'
global.eror = '_*Server Error*_'
global.fla = 'https://i.imgur.com/707WLbK.jpeg'

global.watermark = '© Wizard-Ser'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
