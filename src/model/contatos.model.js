const db = require("../config/database");

async function inserirContato(data, lastID) {
    const { telefoneEmpresa, emailEmpresa } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Contatos(
                    telefoneEmpresa,
                    emailEmpresa,
                    fkEmpresa) 
                        VALUES (
                            '${telefoneEmpresa}', 
                            '${emailEmpresa}', 
                            ${lastID}
                        );`;
    return connection.query(sql)
}

module.exports = { inserirContato };