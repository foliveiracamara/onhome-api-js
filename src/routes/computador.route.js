const computadorController = require("../controller/computador.controller");

module.exports = (app) => {
    app.get('/computador/usuario/:usuario', (req, res) => computadorController.selecionarComputadorPorUsuario(req, res));
    app.get('/computador/empresa/:empresa', (req, res) => computadorController.selecionarComputadoresPorEmpresa(req, res));
}