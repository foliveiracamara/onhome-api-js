const processoController = require("../controller/processo.controller");

// Adicionar autenticação

module.exports = (app) => {
    app.get('/processo/usuario/:id', processoController.selecionarProcessosPorUsuario);
    app.get('/processos', processoController.selecionarTodosProcessos);
}