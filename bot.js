const {Telegraf} = require('telegraf'); 

const NSFW = require("discord-nsfw");
const nsfw = new NSFW();



const bot = new Telegraf('1267994416:AAHGS-jQdpMH1dqKkhAL7uQKnv1DOiJuODM')

bot.start((ctx) => {
    ctx.reply('Wenas pa');
})

bot.help((ctx) => {
    ctx.reply('Puedes hacer uso de los siguientes comandos\n Anal /anal\n 4K /fourk\n Ass /ass\n Gonewild /gonewild\n Porngif /pgif\n Pussy /pussy\n Thigh /thigh\n Boobs /boobs\n Hentai Ass /hentaiass\n Hentai /hentai\n Hentai Midriff /hmidriff\n Hentai Thigh /hentaithigh\n Erokemo /erokemo\n Kitsune /kitsune\n Lewd /lewd\n Neko Feet /nekofeet\n Neko Pussy /nekopussy\n Neko Tits /nekotits\n Solo /solo\n  Wallpaper /wallpaper\n');
})

bot.command(['wenas', 'Wenas', 'WENAS'], (ctx) => {
    ctx.reply('Wenas ' + ctx.from.first_name)
})

bot.hears(['menores', 'MENORES', 'Menores'], ctx =>{
    ctx.reply('alguien dijo menores?')
    ctx.replyWithPhoto("https://contactohoy.com.mx/wp-content/uploads/2021/06/Yoseline-Hoffman.png")
})

// antojo xd
bot.command(['anal'], (ctx) => {
    async function di () {
        const image = await nsfw.anal();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['fourk'], (ctx) => {
    async function di () {
        const image = await nsfw.fourk();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['ass'], (ctx) => {
    async function di () {
        const image = await nsfw.ass();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['gonewild'], (ctx) => {
    async function di () {
        const image = await nsfw.gonewild();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['pgif'], (ctx) => {
    async function di () {
        const image = await nsfw.pgif();
        ctx.replyWithVideo(image);
        }
    di();
})

bot.command(['pussy'], (ctx) => {
    async function di () {
        const image = await nsfw.pussy();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['thigh'], (ctx) => {
    async function di () {
        const image = await nsfw.thigh();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['boobs'], (ctx) => {
    async function di () {
        const image = await nsfw.boobs();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['hentaiass'], (ctx) => {
    async function di () {
        const image = await nsfw.hentaiass();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['hentai'], (ctx) => {
    async function di () {
        const image = await nsfw.hentai();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['hmidriff'], (ctx) => {
    async function di () {
        const image = await nsfw.hmidriff();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['hentaithigh'], (ctx) => {
    async function di () {
        const image = await nsfw.hentaithigh();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['erokemo'], (ctx) => {
    async function di () {
        const image = await nsfw.erokemo();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['kitsune'], (ctx) => {
    async function di () {
        const image = await nsfw.kitsune();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['lewd'], (ctx) => {
    async function di () {
        const image = await nsfw.lewd();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['nekofeet'], (ctx) => {
    async function di () {
        const image = await nsfw.nekofeet();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['nekopussy'], (ctx) => {
    async function di () {
        const image = await nsfw.nekopussy();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['nekotits'], (ctx) => {
    async function di () {
        const image = await nsfw.nekotits();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['solo'], (ctx) => {
    async function di () {
        const image = await nsfw.solo();
        ctx.replyWithPhoto(image);
        }
    di();
})

bot.command(['wallpaper'], (ctx) => {
    async function di () {
        const image = await nsfw.wallpaper();
        ctx.replyWithPhoto(image);
        }
    di();
})
bot.launch()
