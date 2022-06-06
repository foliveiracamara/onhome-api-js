const gamificacaoController = require("../controller/gamificacao.controller")

module.exports = (app) => {
  app.get('/pontuacao-total/:id', gamificacaoController.selecionarPontosUsuarios)
  app.get('/pontuacao/empresa/:id', gamificacaoController.pontuacaoSemanaAtualESemanaPassada)
}