const nodemailerController = require('../controller/nodemailer.controller');

module.exports = async (app) => {
    app.post('/mailer', async (req, res) => await nodemailerController.enviarEmail(req, res));
}