const tb = require('../model');

exports.inserirEmpresa = async (req, res) => {
    const data = req.body
    const result = await tb.empresa.inserirEmpresa(data);
    const [ recordObject ] = result.recordset
    const [ lastID ] = Object.values(recordObject)
    tb.contatos.inserirContato(data, lastID)
    tb.endereco.inserirEndereco(data, lastID)
    res.status(201).send("Empresa cadastrada com sucesso")
}

exports.selecionarEmpresa = async (req, res) => {
    const informacoesEmpresa = await tb.empresa.selecionarEmpresa();
    res.status(200).json(informacoesEmpresa.recordset)
}
