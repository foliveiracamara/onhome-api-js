const db = require("../config/database");

async function inserirEmpresa(data) {
    const values = [data.nomeFantasia, data.cnpj]
    const connection = await db.connect();
    const sql = `INSERT INTO Empresa(
                    nomeFantasia,
                    cnpj) VALUES (?, ?);`;
    return connection.query(sql, values)
}

module.exports = { inserirEmpresa };