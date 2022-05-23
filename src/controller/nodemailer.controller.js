const enviarEmail = require('../services/nodemailer')

exports.enviarEmail = async (req, res) => {
    const data = req.body
    const result = await enviarEmail.enviarEmail(data)
    console.log(res)
    res.status(201).send("Email enviado com sucesso")
}
