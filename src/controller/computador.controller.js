const tb = require('../model');

exports.selecionarComputadorPorUsuario = async (req, res) => {
    const usuario = req.params.id
    const informacoesComputador = await tb.computador.selecionarComputadorPorUsuario(usuario);
    res.status(200).json(informacoesComputador.recordsets)
}

exports.selecionarComputadoresPorEmpresa = async (req, res) => {
    const empresa = req.params.id
    const informacoesComputadorEmpresa = await tb.computador.selecionarComputadoresPorEmpresa(empresa);
    const nomesUsuario = await tb.usuario.selecinarNomesUsuariosPorEmpresa(empresa)

    const listandoNomes = informacoesComputadorEmpresa.recordset.map(usuario => {
        const listaNome = []
        nomesUsuario.recordset.map(usuario2 => {
            if (usuario.idUsuario === usuario2.idUsuario) {
                const { nomeUsuario } = usuario2
                listaNome.push(nomeUsuario)
            }
        })
        return listaNome
    })

    informacoesComputadorEmpresa.recordset.map((info, index) => {
        const nomes = listandoNomes
        return [info.nomeUsuario] = nomes[index]
    })

    res.status(200).json(informacoesComputadorEmpresa.recordset);
}