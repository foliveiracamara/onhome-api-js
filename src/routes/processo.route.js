const processoController = require("../controller/processo.controller");

module.exports = (app) => {
    app.get('/processo/usuario/:usuario', (req, res) => processoController.selecionarProcessosPorUsuario(req, res));
}