const db = require("../config/database");

// Adicionar fkEmpresa
// Adicionar coluna cargo
async function inserirUsuario(data) {
    const { userName, userEmail, senha, permission, area, fkEmpresa } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Usuario (
                    nomeUsuario,
                    emailUser,
                    senhaUser,
                    fkEmpresa,
                    fkPermissao,
                    fkEspecialidade
                    ) VALUES (
                        '${userName}', 
                        '${userEmail}', 
                        '${senha}',
                        '${fkEmpresa}', 
                        '${permission}',
                        '${area}'
                    );
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql);
}

async function inserirUsuarioPrimeiroAcesso(data, senhaGerada) {
    const { customerName, customerEmail  } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Usuario (
                    nomeUsuario,
                    emailUser,
                    senhaUser,
                    fkPermissao
                    ) VALUES (
                        '${customerName}',
                        '${customerEmail}',
                        '${senhaGerada}',
                        1
                    )`
    return connection.query(sql);
}

async function selecinarNomesUsuariosPorEmpresa(idEmpresa) {
    const connection = await db.connect();
    const sql = `SELECT
                    idUsuario, 
                    nomeUsuario
                FROM Usuario
                    JOIN Empresa ON fkEmpresa = idEmpresa
                        WHERE idEmpresa = ${idEmpresa} AND idUsuario > 1` 
    return connection.query(sql)
}

async function selecionarUsuarioPorEmail(email, senha) {
    const connection = await db.connect();
    const sql = `SELECT
                    idUsuario, 
                    emailUser,
                    nomeUsuario,
                    fkEmpresa
                FROM Usuario
                    WHERE emailUser = '${email}' AND senhaUser = '${senha}'`
    return connection.query(sql)
}

async function selecionarUsuariosPorEmpresa(idEmpresa) {
    const connection = await db.connect();
    const sql = `SELECT 
                    idUsuario,
                    nomeUsuario,
                    emailUser,
                    senhaUser,
                    nomeEspecialidade,
                    cargo
                FROM Usuario
                    JOIN Especialidade ON fkEspecialidade = idEspecialidade
                        JOIN Permissao ON fkPermissao = idPermissao
                            WHERE fkEmpresa = ${idEmpresa}`
    return connection.query(sql)
}

async function atualizarUsuarioPorID(data, fkEmpresa) {
    const { idUsuario } = data
    const connection = await db.connect();
    const sql = `UPDATE Usuario 
                    SET fkEmpresa = ${fkEmpresa} 
                        WHERE idUsuario = ${idUsuario}`
    return connection.query(sql)
}

module.exports = { 
    inserirUsuario, 
    selecionarUsuariosPorEmpresa,
    atualizarUsuarioPorID,
    inserirUsuarioPrimeiroAcesso,
    selecionarUsuarioPorEmail,
    selecinarNomesUsuariosPorEmpresa 
}