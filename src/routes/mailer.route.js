const nodemailerService = require("../services/nodemailer")

module.exports = async (app) => {
    app.get('/mailer', (req, res) => {
        nodemailerService.run();
    });
}