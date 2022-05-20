const db = require("../config/database");

async function inserirLicenca(data) {
    const { plano, periodo, qtdComputadores } = await data

    const connection = await db.connect();
    const sql = `INSERT INTO Licenca (
                    plano,
                    periodo,
                    quantComputadores,
                    dataAquisicao
                    ) VALUES (
                        '${plano}', 
                        '${periodo}', 
                        '${qtdComputadores}',
                        GETDATE()
                    );
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql)
} 

module.exports = { inserirLicenca }