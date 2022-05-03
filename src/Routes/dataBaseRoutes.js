const databaseController = require('../Controller/databaseController');

module.exports = (app) => {
    app.get('/users/all', databaseController.get_all_users);
    app.post('/users/post', (req, res) => databaseController.post_users(req, res));
}