const db = require("../config/database")

async function selecionarPontuacaoUsuarios(usuario) {
    const connection = await db.connect();
    const sql = `SELECT 
                    qtdPontos
                FROM Gamificacao;`
    return await connection.query(sql)
}

module.exports = { selecionarPontuacaoUsuarios }