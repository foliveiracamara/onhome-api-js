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
                            WHERE fkEmpresa = ${idEmpresa}
                `
    return connection.query(sql)
}

module.exports = { inserirUsuario, selecionarUsuariosPorEmpresa }