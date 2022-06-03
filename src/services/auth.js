const tb = require('../model')

async function autenticarUsuario(email, senha) {
    const resultadoConsulta = await tb.usuario.selecionarUsuarioPorEmail(email, senha)
    const [[informacoesUsuario]] = await resultadoConsulta.recordsets
    const { fkEmpresa } = informacoesUsuario
    const primeiroAcesso = fkEmpresa === null ? true : false


    if (informacoesUsuario.nomeUsuario !== null) {
        return [true, informacoesUsuario, primeiroAcesso]
    } else {
        return [false, null]
    }
}

module.exports = autenticarUsuario