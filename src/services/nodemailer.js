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

async function enviarEmail(data, senhaGerada) {
  const { customerName, customerEmail } = data;
  await transporter.sendMail({
    subject: "Boas-vindas!",
    html: `<body>
    <div style="text-align: center;">
    <div style="background-color: 
    rgb(61, 5, 126); color: white; height: 70px; display: flex; justify-content: center; align-items: center">
      <h1>Seja bem-vindo(a) à OnHome</h1>
    </div>

    <div style="color: #da00abbe">
      <h3>Suas credenciais de acesso:</h3>
    </div>
    <p><b>Login:</b> ${customerEmail}</p>
    <p><b>Senha:</b> ${senhaGerada}</p>
    <br />
    <h3>Olá ${customerName}, obrigado por preencher nosso formulário!</h3>
    <p>
      Para finalizar a aquisição de nossos serviços vamos precisar de algumas
      informações durante o seu primeiro acesso. Pronto?
    </p>
    <button
      style="
        border: none;
        background-color: rgb(82, 5, 170);
        font-size: 18px;
        color: white;
        width: 150px;
        height: 30px;
        border-radius: 30px;
      "
    >
      Vamos lá!
    </button>
        </div>
        <div style="background-color: rgb(61, 5, 126); height: 70px; margin-top: 30px; color: white;
        display: flex; align-items: center; justify-content: center;">
        © OnHome 2022</div>
    </body>`,
    from: "OnHome Digital Solutions <onhome.tech@gmail.com",
    to: `${customerEmail}`,
  });
}

module.exports = {
  enviarEmail,
};
