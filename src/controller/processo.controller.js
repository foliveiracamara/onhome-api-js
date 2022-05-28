const tb = require('../model');

exports.selecionarProcessosPorUsuario = async (req, res) => {
    const usuario = req.params.id
    const informacoesProcessos = await tb.processo.selecionarProcessosPorUsuario(usuario);
    res.status(200).json(informacoesProcessos.recordsets)
}