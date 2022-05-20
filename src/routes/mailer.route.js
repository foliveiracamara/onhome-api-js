const nodemailerService = require('../services/nodemailer')

module.exports = async (app) => {
    app.get('/mailer', async (req, res) => {
        const result = JSON.stringify(await nodemailerService.run())
        console.log(result)
        res.status(200).send({result: `${result}`})
    });
}