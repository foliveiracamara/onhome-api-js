const nodemailerController = require("../controller/nodemailer.controller")

module.exports = async (app) => {
    app.post('/mailer', (req, res) => nodemailerController.enviarEmail(req, res));
}