const EmpresaRoute = require('./empresa.route');
const AuthRoute = require('./auth.route')
const nodemailerRoutes = require('./mailer.route')
const ComputadorRoute = require('./computador.route');
const ProcessoRoute = require('./processo.route');
const MonitoramentoRoute = require('./monitoramento.route');
const UsuarioRoute = require('./usuario.route');
const GamificacaoRoute = require('./gamificacao.route');

module.exports = (app) => {
    EmpresaRoute(app);
    AuthRoute(app);
    ComputadorRoute(app);
    ProcessoRoute(app);
    MonitoramentoRoute(app);
    nodemailerRoutes(app);
    UsuarioRoute(app);
    GamificacaoRoute(app);
}