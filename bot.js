const {Telegraf} = require('telegraf');

const bot = new Telegraf('1267994416:AAHGS-jQdpMH1dqKkhAL7uQKnv1DOiJuODM')

bot.start((ctx) => {
    ctx.reply('Wenas pa');
})

bot.command(['wenas', 'Wenas', 'WENAS'], (ctx) => {
    ctx.reply('Wenas ' + ctx.from.first_name)
})

bot.hears('menores', ctx =>{
    ctx.reply('alguien dijo menores? *insete meme de la josstop xd*')
})

bot.launch()
