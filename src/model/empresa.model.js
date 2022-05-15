const db = require("../config/database");

async function inserirEmpresa(data) {
    const { nomeFantasia, cnpj } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Empresa (
                    nomeFantasia,
                    cnpj) VALUES ('${nomeFantasia}', '${cnpj}');
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql)
}

async function selecionarEmpresa() {
    const connection = await db.connect();
    const sql = `SELECT * FROM Empresa 
                    JOIN Contatos contato ON contato.fkEmpresa = idEmpresa
                    JOIN Endereco endereco ON endereco.fkEmpresa = idEmpresa; 
                `
    return await connection.query(sql)
}

module.exports = { inserirEmpresa, selecionarEmpresa };