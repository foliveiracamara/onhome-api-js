const tb = require('../model')

async function autenticarUsuario(email, senha) {
    try {
        const resultadoConsulta = await tb.usuario.selecionarUsuarioPorEmail(email, senha)
        const [[informacoesUsuario]] = await resultadoConsulta.recordsets
        
        if (informacoesUsuario) {
            const { fkEmpresa } = informacoesUsuario
            const primeiroAcesso = fkEmpresa === null ? true : false
    
            if (informacoesUsuario.nomeUsuario !== null) {
                return [true, informacoesUsuario, primeiroAcesso]
            } else {
                return [false, null]
            }
        }
    } catch(err) {
        throw Error(err)
    }

}

module.exports = autenticarUsuario