const tb = require('../model');

exports.selecionarProcessosPorUsuario = async (req, res) => {
    const usuario = req.params.id
    const informacoesProcessos = await tb.processo.selecionarProcessosPorUsuario(usuario);
    res.status(200).json(informacoesProcessos.recordsets)
}

exports.selecionarTodosProcessos = async (req, res) => {
    const informacoesProcessos = await tb.processo.selecionarTodosProcessos();
    res.status(200).json(informacoesProcessos.recordsets)
}

