const db = require("../config/database");

async function inserirEndereco(data, lastID) {
    const {
        cep,
        logradouro,
        numero,
        bairro,
        complemento,
        estado,
        cidade
    } = data

    const connection = await db.connect();
    const sql = `INSERT INTO Endereco(
                    cep,
                    logradouro,
                    numero,
                    bairro,
                    complemento,
                    estado,
                    cidade,
                    fkEmpresa) 
                        VALUES (
                            '${cep}', 
                            '${logradouro}', 
                            '${numero}', 
                            '${bairro}', 
                            '${complemento}', 
                            '${estado}', 
                            '${cidade}', 
                            ${lastID}
                        );`;
    return connection.query(sql)
}

module.exports = { inserirEndereco };