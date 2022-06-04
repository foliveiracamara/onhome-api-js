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
                    fkUsuario as idUsuario, 
                    SUM(qtdPontos) AS qtdPontos
                FROM Gamificacao
                    JOIN Usuario ON fkUsuario = idUsuario
                        JOIN Empresa ON fkEmpresa = idEmpresa
                            WHERE idEmpresa = ${empresa}
                                GROUP BY fkUsuario;`
    return await connection.query(sql)
}

module.exports = {
    selecionarComputadorPorUsuario,
    selecionarComputadoresPorEmpresa
};