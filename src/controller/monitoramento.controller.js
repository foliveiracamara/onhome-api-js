const tb = require('../model');

exports.selecionarProcessosPorUsuario = async (req, res) => {
    const usuario = req.params.id
    const informacoesMonitoramento = await tb.monitoramento.selecionarMonitoramentoPorUsuario(usuario);
    res.status(200).json(informacoesMonitoramento.recordsets)
}