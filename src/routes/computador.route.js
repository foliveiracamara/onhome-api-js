const computadorController = require("../controller/computador.controller");

module.exports = (app) => {
    app.get('/computador/usuario/:id', (req, res) => computadorController.selecionarComputadorPorUsuario(req, res));
    app.get('/computador/empresa/:id', (req, res) => computadorController.selecionarComputadoresPorEmpresa(req, res));
}