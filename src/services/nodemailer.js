const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    }
});

async function run() {
    const mailSent = await transporter.sendMail({
        subject: 'Open lab',
        html: '<b>Bem vindo à OnHome Solutions!</b>',
        from: 'OnHome Digital Solutions <onhome.tech@gmail.com',
        to: 'gabrielsouza628@gmail.com',
    })
    console.log(mailSent) 
}

module.exports={
    run

}


