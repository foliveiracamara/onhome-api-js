const tb = require('../model');

exports.inserirEmpresa = async (req, res) => {
    const data = req.body

    const result = await tb.usuario.inserirUsuario(data);
    const [ recordObject ] = result.recordset
    const [ lastID ] = Object.values(recordObject)
    
    // Inserir também na computador e processo usando o lastID

    res.status(201).send("Usuário cadastrado com sucesso")
}