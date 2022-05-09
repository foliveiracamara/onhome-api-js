const empresaController = require('../controller/empresa.controller');

module.exports = (app) => {
    app.post('/empresa', (req, res) => empresaController.inserirEmpresa(req, res));
}