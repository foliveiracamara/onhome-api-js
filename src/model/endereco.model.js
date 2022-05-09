const db = require("../config/database");

async function inserirEndereco(data, lastID) {
    const values = [data.cep, data.logradouro, data.bairro, data.complemento, data.estado, data.cidade, lastID]
    const connection = await db.connect();
    const sql = `INSERT INTO Endereco(
                    cep,
                    logradouro,
                    numero,
                    bairro,
                    complemento,
                    estado,
                    cidade,
                    fkEmpresa) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    return connection.query(sql, values)
}

module.exports = { inserirEndereco };