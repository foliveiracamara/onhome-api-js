const nodemailerService = ('../services/nodemailer')

module.exports = async (app) => {
    app.get('/mailer', (req, res) => await nodemailerService.run());
}