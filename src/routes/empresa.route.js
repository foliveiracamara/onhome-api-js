const empresaController = require('../controller/empresa.controller');

module.exports = (app) => {
    app.get('/empresa', (req, res) => empresaController.selecionarEmpresa(req, res));
    app.post('/empresa', (req, res) => empresaController.inserirEmpresa(req, res));
}