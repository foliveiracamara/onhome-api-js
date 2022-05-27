const jwt = require("jsonwebtoken");
// const usuarioModel = require("../model/usuario.model")
// Criar model de selecionarUsuarioPorID

const authenticatedRoute = async (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded.id == req.params.id) {
                next();
            } else {
                res.status(401).json("Token inválido!")
            }
        } catch(err) {
            res.status(401).json("Não autorizado, Token inválido!")
        }
    }
}

module.exports = authenticatedRoute