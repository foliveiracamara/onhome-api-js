const db = require("../config/database");

// Adicionar fkEmpresa
// Adicionar coluna cargo
async function inserirUsuario(data) {
    const { userName, userEmail, senha, permission, area } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Usuario (
                    nomeUsuario,
                    emailUser,
                    senhaUser,
                    fkPermissao,
                    fkEspecialidade
                    ) VALUES (
                        '${userName}', 
                        '${userEmail}', 
                        '${senha}', 
                        '${permission}',
                        '${area}'
                    );
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql)
}

async function inserirUsuarioPrimeiroAcesso(data, senhaGerada) {
    const { customerName, customerEmail  } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Usuario (
                    nomeUsuario,
                    emailUser,
                    senhaUser
                    ) VALUES (
                        '${customerName}',
                        '${customerEmail}',
                        '${senhaGerada}'
                    )`
    return connection.query(sql);
}

async function selecinarUsuarioPorID(data) {
    
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

async function atualizarUsuarioPorID(idUsuario, fkEmpresa) {
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
    inserirUsuarioPrimeiroAcesso 
}