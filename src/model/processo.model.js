const db = require('../config/database');

async function selecionarProcessosPorUsuario(usuario) {
  const connection = await db.connect();
  const sql = `SELECT
                    nomeUsuario,
                    nomeProcesso,
                    usoCpu,
                    usoMemoria,
                    dataCaptura
                FROM Usuario
                    JOIN Computadores ON fkUsuario = idUsuario
                        JOIN Processo ON fkComputador = idComputador
                            WHERE idUsuario = ${usuario}
                                ORDER BY idProcesso DESC;`;
  return await connection.query(sql);
}

async function selecionarTodosProcessos() {
  const connection = await db.connect();
  const sql = `SELECT
                    TOP 10
                    nomeProcesso,
                    usoCpu,
                    usoMemoria,
                    dataCaptura
                FROM Processo
                WHERE usoCpu > 1
                    ORDER BY usoCpu DESC;` 
  return await connection.query(sql);
}

module.exports = {
  selecionarProcessosPorUsuario,
  selecionarTodosProcessos,
};
