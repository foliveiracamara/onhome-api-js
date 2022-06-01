const autenticarUsuario = require('../services/auth');

exports.login = async (req, res) => {
    const { email, senha } = req.headers
    const [usuarioEstaAutenticado, informacoesUsuario] = await autenticarUsuario(email, senha);

    if (usuarioEstaAutenticado) {
        return res.status(200).json(informacoesUsuario)
    } else {
        return res.status(401).json({ message: "Credenciais inválidas" })
    }
    
}