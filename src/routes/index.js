const EmpresaRoute = require('./empresa.route');
const AuthRoute = require('./auth.route')

module.exports = (app) => {
    EmpresaRoute(app);
    AuthRoute(app);
}