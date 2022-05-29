const enviarEmail = require('../services/nodemailer')
const generatePassword = require('../utils/generatePassword');
const tb = require('../model');

exports.enviarEmail = async (req, res) => {
    const data = req.body
    const senhaGerada = generatePassword();

    tb.usuario.inserirUsuarioPrimeiroAcesso(data, senhaGerada)

    const result = await enviarEmail.enviarEmail(data)

    res.status(201).send({result})
}
