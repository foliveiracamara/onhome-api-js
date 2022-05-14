const EmpresaRoute = require('./empresa.route');
const AuthRoute = require('./auth.route')
const nodemailerRoutes = require('./mailer.route')
module.exports = (app) => {
    EmpresaRoute(app);
    AuthRoute(app);
    nodemailerRoutes(app);
}