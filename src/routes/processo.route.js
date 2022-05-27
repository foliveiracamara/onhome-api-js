const processoController = require("../controller/processo.controller");
const authenticatedRoute = require("../middleware/auth");

module.exports = (app) => {
    app.get('/processo/usuario/:id', authenticatedRoute, processoController.selecionarProcessosPorUsuario);
}