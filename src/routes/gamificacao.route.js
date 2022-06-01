const gamificacaoController = require("../controller/gamificacao.controller")

module.exports = (app) => {
  app.get('/pontuacao-total', gamificacaoController.selecionarPontosUsuarios )
}