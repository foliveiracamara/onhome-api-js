const tb = require('../model');

exports.inserirEmpresa = async (req, res) => {
    const data = req.body
    const [result] = await tb.empresa.inserirEmpresa(data);
    const lastID = result.insertId
    tb.contatos.inserirContato(data, lastID)
    tb.endereco.inserirEndereco(data, lastID)
    res.status(201).send("Empresa cadastrada com sucesso")
}
