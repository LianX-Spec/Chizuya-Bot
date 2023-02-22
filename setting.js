const fs = require('fs')
const chalk = require('chalk')
global.owner = ['6285742344873']
global.ownernomer = "6285742344873"
global.premium = ['']
global.packname = 'Sticker By'
global.author = 'Iyan Ganteng\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('https://telegra.ph/file/5b49b2565a3f5552ce809.jpg')
global.faall = fs.readFileSync('https://telegra.ph/file/5b49b2565a3f5552ce809.jpg')
global.mygit = 'https://github.com/AkuIyan'
global.webmy = 'https://portofolio.akuiyan.repl.co'
global.ghme = 'https://github.com/AkuIyan'
global.gcbot = "https://chat.whatsapp.com/C3IAVrX1RzFIOsTP0Fpqe8"
global.botname = 'Chizuya Imoet'
global.omlen = '© Iyan'
global.weem = 'Iyan Ganteng'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
