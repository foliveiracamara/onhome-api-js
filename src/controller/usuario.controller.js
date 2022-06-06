const tb = require('../model');

exports.inserirUsuario = async (req, res) => {
    const data = req.body
    // Extrair para uma função separada
    if (data.permission === "admin") {
        data.permission = 1
    } else {
        data.permission = 2
    }

    if (data.area === "front") {
        data.area = 1
    } else if (data.area === "back") {
        data.area = 2
    } else {
        data.area = 3
    }

    const result = await tb.usuario.inserirUsuario(data);
    const [ recordObject ] = result.recordset
    const [ lastID ] = Object.values(recordObject)

    res.status(201).send("Usuário cadastrado com sucesso")
}

exports.selecionarUsuariosPorEmpresa = async (req, res) => {
    const idEmpresa = req.params.idEmpresa
    const usuariosCadastrados = await tb.usuario.selecionarUsuariosPorEmpresa(idEmpresa);
    res.status(200).json(usuariosCadastrados.recordsets)
    
}