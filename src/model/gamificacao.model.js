const db = require("../config/database")

async function selecionarPontuacaoUsuarios(usuario) {
    const connection = await db.connect();
    const sql = `SELECT 
                    qtdPontos
                FROM Gamificacao;`
    return await connection.query(sql)
}

async function pontuacaoSemanaAtualPorEmpresa(idEmpresa) {
    const connection = await db.connect();
    const sql = `SELECT SUM(qtdPontos) AS atual
                    FROM Gamificacao
                        JOIN Usuario ON fkUsuario = idUsuario
                            JOIN Empresa ON fkEmpresa = idEmpresa
                                WHERE idEmpresa = ${idEmpresa}
                                    AND DATEDIFF(day, dataHoraCaptura, GETDATE()) < 7;`
    return await connection.query(sql)
}

async function pontuacaoSemanaPassadaPorEmpresa(idEmpresa) {
    const connection = await db.connect();
    const sql = `SELECT SUM(qtdPontos) AS passada
                    FROM Gamificacao
                        JOIN Usuario ON fkUsuario = idUsuario
                            JOIN Empresa ON fkEmpresa = idEmpresa
                                WHERE idEmpresa = ${idEmpresa} 
                                        AND
                                    DATEDIFF(day, dataHoraCaptura, GETDATE()) >= 7
                                        AND
                                    DATEDIFF(day, dataHoraCaptura, GETDATE()) <= 14;`
    return connection.query(sql)
}

module.exports = { 
    selecionarPontuacaoUsuarios, 
    pontuacaoSemanaAtualPorEmpresa, 
    pontuacaoSemanaPassadaPorEmpresa 
}