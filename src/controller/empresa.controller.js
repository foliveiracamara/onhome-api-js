const tb = require('../model');
const licencaController = require('./licenca.controller');

exports.inserirEmpresa = async (req, res) => {
    const data = req.body
    const fkLicenca = await licencaController.inserirLicenca(req, res);

    const result = await tb.empresa.inserirEmpresa(data, fkLicenca);
    const [ recordObject ] = result.recordset
    const [ lastID ] = Object.values(recordObject)
    
    tb.contatos.inserirContato(data, lastID)
    tb.endereco.inserirEndereco(data, lastID)
    // Pegar idUsuario - provavelmente após a autenticação do login, setar no front
    // tb.usuario.atualizarUsuarioPorID(idUsuario, lastID)

    res.status(201).send("Empresa cadastrada com sucesso")
}

exports.selecionarEmpresa = async (req, res) => {
    const informacoesEmpresa = await tb.empresa.selecionarEmpresa();
    res.status(200).json(informacoesEmpresa.recordset)
}
