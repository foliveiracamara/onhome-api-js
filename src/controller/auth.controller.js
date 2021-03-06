const autenticarUsuario = require('../services/auth');

exports.login = async (req, res) => {
    const { email, senha } = req.headers
    try {
        const [
            usuarioEstaAutenticado, 
            informacoesUsuario, 
            primeiroAcesso
        ] = await autenticarUsuario(email, senha);
    
        if (usuarioEstaAutenticado) {
            return res.status(200).json({informacoesUsuario, primeiroAcesso})
        } else {
            return res.status(401).json({ message: "Credenciais inválidas" })
        }
    } catch(err) {
        res.status(204).json({ message: "Credenciais inválidas" })
    }
}