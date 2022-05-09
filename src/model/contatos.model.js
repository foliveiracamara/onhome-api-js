const db = require("../config/database");

async function inserirContato(data, lastID) {
    const values = [data.telefoneEmpresa, data.emailEmpresa, lastID]
    const connection = await db.connect();
    const sql = `INSERT INTO Contatos(
                    telefoneEmpresa,
                    emailEmpresa,
                    fkEmpresa) VALUES (?, ?, ?);`;
    return connection.query(sql, values)
}

module.exports = { inserirContato };