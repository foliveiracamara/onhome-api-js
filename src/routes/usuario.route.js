const usuarioController = require('../controller/usuario.controller');

module.exports = (app) => {
    app.post('/usuario', (req, res) => usuarioController.inserirEmpresa(req, res));
}