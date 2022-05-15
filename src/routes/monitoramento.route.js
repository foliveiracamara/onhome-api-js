const monitoramentoController = require("../controller/monitoramento.controller");

module.exports = (app) => {
    app.get('/monitoramento/usuario/:usuario', (req, res) => monitoramentoController.selecionarProcessosPorUsuario(req, res));
}