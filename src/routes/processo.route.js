const processoController = require("../controller/processo.controller");
const authenticatedRoute = require("../middleware/auth");

// Adicionar autenticação

module.exports = (app) => {
    app.get('/processo/usuario/:id', processoController.selecionarProcessosPorUsuario);
    app.get('/processos', processoController.selecionarTodosProcessos);
}