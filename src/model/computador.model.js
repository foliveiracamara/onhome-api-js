const db = require("../config/database");

async function selecionarComputadorPorUsuario(usuario) {
    const connection = await db.connect();
    const sql = `SELECT 
                    hostName,
                    sistemaOperacional,
                    modeloProcessador,
                    tamanhoDisco,
                    tamanhoDiscoSecundario,
                    tamanhoRam
                FROM Computadores WHERE fkUsuario = ${usuario}`
    return await connection.query(sql)
}

async function selecionarComputadoresPorEmpresa(empresa) {
    const connection = await db.connect();
    const sql = `SELECT
                    idUsuario, 
                    nomeUsuario,
                    emailUser,
                    idComputador,
                    hostName,
                    sistemaOperacional,
                    modeloProcessador,
                    tamanhoDisco,
                    tamanhoDiscoSecundario,
                    tamanhoRam
                FROM Empresa
                    JOIN usuario ON fkEmpresa = idEmpresa
                    JOIN Computadores ON fkUsuario = idUsuario
                WHERE idEmpresa = ${empresa};`
    return await connection.query(sql)
}

module.exports = {
    selecionarComputadorPorUsuario,
    selecionarComputadoresPorEmpresa
};