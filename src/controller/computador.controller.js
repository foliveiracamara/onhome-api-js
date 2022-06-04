const tb = require('../model');

exports.selecionarComputadorPorUsuario = async (req, res) => {
    const usuario = req.params.usuario
    const informacoesComputador = await tb.computador.selecionarComputadorPorUsuario(usuario);
    res.status(200).json(informacoesComputador.recordsets)
}

exports.selecionarComputadoresPorEmpresa = async (req, res) => {
    const empresa = req.params.id
    const informacoesComputadorEmpresa = await tb.computador.selecionarComputadoresPorEmpresa(empresa);
    res.status(200).json(informacoesComputadorEmpresa.recordsets)
}