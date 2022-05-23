const enviarEmail = require('../services/nodemailer')

exports.enviarEmail = async (req, res) => {
    const data = req.body
    const result = await enviarEmail.enviarEmail(data)
    res.status(201).send({result: result})
}
