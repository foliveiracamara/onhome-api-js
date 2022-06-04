const usuarioController = require('../controller/usuario.controller');

module.exports = (app) => {
    app.post('/usuario', (req, res) => usuarioController.inserirUsuario(req, res));
    app.get('/usuarios/:idEmpresa', (req, res) => usuarioController.selecionarUsuariosPorEmpresa(req, res));
}