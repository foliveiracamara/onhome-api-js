const db = require("../config/database")

async function selecionarPontuacaoUsuarios(usuario) {
    const connection = await db.connect();
    const sql = `SELECT 
                    qtdPontos
                FROM Gamificacao;`
    return await connection.query(sql)
}

async function pontuacaoSemanaAtualESemanaPassada() {
    const connection = await db.connect();
    const sql = `SELECT SUM(qtdPontos) as atual
                    FROM Gamificacao
                    WHERE DATEDIFF(day, dataHoraCaptura, 
                        GETDATE()) < 7;`
    return await connection.query(sql)
}

module.exports = { selecionarPontuacaoUsuarios, pontuacaoSemanaAtualESemanaPassada }