const authController = require("../controller/auth.controller");

module.exports = (app) => {
    app.get('/login', authController.login)
}