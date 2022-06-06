const db = require("../config/database");

async function selecionarMonitoramentoPorUsuario(usuario) {
    const connection = await db.connect();
    const sql = `SELECT
                    TOP 15
                    processadorLogico,
                    processadorFisico,
                    usandoCpu,
                    usandoDisco,
                    usandoRam,
                    dataHoraCaptura,
                    tempoLigada
                FROM Usuario
                    JOIN Computadores ON fkUsuario = idUsuario
                        JOIN Monitoramento ON fkComputador = idComputador
                            WHERE idUsuario = ${usuario}
                                ORDER BY idMonitoramento DESC;`
    return await connection.query(sql)
}

module.exports = { selecionarMonitoramentoPorUsuario }