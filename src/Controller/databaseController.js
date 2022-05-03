const tb = require('../Model');

exports.get_last_user = async (req, res) => {
    const last_user = await tb.user.getLastUser();
    res.status(200).json(last_user)
}

exports.post_users = async (req, res) => {
    tb.user.insertUser(req.body);
    res.status(201).send("Cadastrado com sucesso")
}
