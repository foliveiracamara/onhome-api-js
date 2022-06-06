const tb = require('../model');
const agruparPontos = require('../utils/agruparPontos');

exports.selecionarPontosUsuarios = async (req, res) => {
    const idEmpresa = req.params.id
    const pontuacaoTotal = await tb.computador.selecionarComputadoresPorEmpresa(idEmpresa)
    const [ruim, baixa, media, alta] = agruparPontos(pontuacaoTotal.recordsets)
    const agrupamento = [
      { name: "0 a 25 pontos", value: ruim},
      { name: "26 a 50 pontos", value: baixa},
      { name: "51 a 75 pontos", value: media},
      { name: "76 a 100 pontos", value: alta},
    ]
    res.status(200).json(agrupamento)
}

exports.pontuacaoSemanaAtualESemanaPassada = async (req, res) => {
    const idEmpresa = req.params.id
    const pontuacaoPassada = await tb.gamificacao.pontuacaoSemanaPassadaPorEmpresa(idEmpresa)
    const pontuacaoAtual = await tb.gamificacao.pontuacaoSemanaAtualPorEmpresa(idEmpresa)

    const pontuacaoAgrupada = [...pontuacaoPassada.recordset, ...pontuacaoAtual.recordset]


    res.status(200).json(pontuacaoAgrupada)
}