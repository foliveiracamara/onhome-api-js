const monitoramentoController = require("../controller/monitoramento.controller");

module.exports = (app) => {
    app.get('/monitoramento/usuario/:id', (req, res) => monitoramentoController.selecionarProcessosPorUsuario(req, res));
}