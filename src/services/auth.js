const tb = require('../model')

async function autenticarUsuario(email, senha) {
    const resultadoConsulta = await tb.usuario.selecionarUsuarioPorEmail(email, senha)
    const [informacoesUsuario] = await resultadoConsulta.recordsets
    if (informacoesUsuario.length > 0) {
        return [true, informacoesUsuario]
    } else {
        return [false, null]
    }
}

module.exports = autenticarUsuario