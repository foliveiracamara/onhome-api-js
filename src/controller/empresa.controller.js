const tb = require('../model');
const licencaController = require('./licenca.controller');

exports.inserirEmpresa = async (req, res) => {
    const data = req.body
    const fkLicenca = await licencaController.inserirLicenca(req, res);

    const result = await tb.empresa.inserirEmpresa(data, fkLicenca);
    const [recordObject] = result.recordset
    const [lastID] = Object.values(recordObject)

    tb.contatos.inserirContato(data, lastID)
    tb.endereco.inserirEndereco(data, lastID)
    tb.usuario.atualizarUsuarioPorID(data, lastID)

    res.status(201).send("Empresa cadastrada com sucesso")
}

exports.selecionarEmpresa = async (req, res) => {
    const idEmpresa = req.params.id
    const informacoesEmpresa = await tb.empresa.selecionarEmpresaPorID(idEmpresa);
    res.status(200).json(informacoesEmpresa.recordset)
}
