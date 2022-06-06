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

async function selecionarProcessosPorEmpresa(idEmpresa) {
  const connection = await db.connect();
  const sql = `SELECT
                  TOP 10 
                  avg(usoCpu) AS usoCpu, nomeProcesso
                FROM [dbo].[Processo]
                  JOIN [dbo].[Computadores] ON fkComputador = idComputador
                    JOIN [dbo].[Usuario] ON fkUsuario = idUsuario
                      JOIN [dbo].[Empresa] ON fkEmpresa = idEmpresa
                        WHERE datediff(day, dataCaptura, getdate()) < 7 
                          AND usoCpu > 0.5
                            AND nomeProcesso != 'Idle'
                              AND fkEmpresa = ${idEmpresa}
                                GROUP BY nomeProcesso`
  return connection.query(sql);
}

module.exports = {
  selecionarProcessosPorUsuario,
  selecionarTodosProcessos,
  selecionarProcessosPorEmpresa
};
