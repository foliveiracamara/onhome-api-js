const databaseController = require('../controller/empresa.controller');

module.exports = (app) => {
    app.post('/empresa', (req, res) => databaseController.inserirEmpresa(req, res));
}