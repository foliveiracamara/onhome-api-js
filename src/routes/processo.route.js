const processoController = require("../controller/processo.controller");

module.exports = (app) => {
    app.get('/processo/usuario/:id', processoController.selecionarProcessosPorUsuario);
    app.get('/processos', processoController.selecionarTodosProcessos);
    app.get('/processos/empresa/:id', processoController.selecionarProcessosPorEmpresa);
}