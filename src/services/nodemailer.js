const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("../config/smtp");

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
  },
});

async function enviarEmail(data) {
  const { customerName, customerEmail } = data;
  console.log(customerEmail, customerName);
    await transporter.sendMail({
    subject: "Open lab",
    html: `<body>
        <header style="background-color: #7879F1; height: 50px;"></header>
        <div 
            style="background-color: #c1c1fa; 
                   height: 200px; 
                   display: flex;
                   flex-direction: column;
                   justify-content: center; 
                   align-items: center;"
            >
        <h3>${customerName}<h3/>
        <h3 style="font-size: 20px;">Obrigado por fazer o seu cadastro!</h3> 
        <h3 style="font-size: 20px; display: inline-block">Estamos ansiosos para te-lo como parceiro de negócios!!</h3>
        <h3 style="font-size: 20px;">Falta só mais um pouco, basta clicar <a href="">aqui!</a></h3>
        </div>
        <div style="background-color: #ffffff; height: 80px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center;">
            <img src="./img/onhome.png"></span>
        </div>
    </body>`,
    from: "OnHome Digital Solutions <onhome.tech@gmail.com",
    to: `${customerEmail}`,
    // attachments: [ {
    //         filename: 'onhome.png', path: './img/onhome'
    //     }
    // ]
  });


module.exports = {
  enviarEmail,
};
