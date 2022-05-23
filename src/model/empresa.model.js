const db = require("../config/database");

async function inserirEmpresa(data, fkLicenca) {
    const { nomeFantasia, cnpj, razaoSocial } = data
    console.log(data)
    const connection = await db.connect();
    const sql = `INSERT INTO Empresa (
                    nomeFantasia,
                    razaoSocial,
                    cnpj,
                    fkLicenca
                    ) VALUES (
                        '${nomeFantasia}', 
                        '${razaoSocial}', 
                        '${cnpj}', 
                        '${fkLicenca}'
                    );
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql)
}

async function selecionarEmpresa() {
    const connection = await db.connect();
    const sql = `SELECT
                    nomeFantasia,
                    razaoSocial,
                    cnpj,
                    telefoneEmpresa,
                    emailEmpresa,
                    cep,
                    logradouro,
                    numero, 
                    bairro,
                    complemento,
                    estado,
                    cidade,
                    plano,
                    periodo,
                    quantComputadores,
                    dataAquisicao  
                
                FROM Empresa 
                    JOIN Contatos contato ON contato.fkEmpresa = idEmpresa
                    JOIN Endereco endereco ON endereco.fkEmpresa = idEmpresa
                    JOIN Licenca ON fkLicenca = idLicenca; 
                `
    return await connection.query(sql)
}

module.exports = { inserirEmpresa, selecionarEmpresa };