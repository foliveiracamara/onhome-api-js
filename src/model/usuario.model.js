const db = require("../config/database");

// Adicionar fkEmpresa
async function inserirUsuario(data) {
    const { nomeUsuario, emailUser, senhaUser, fkPermissao } = data
    const connection = await db.connect();
    const sql = `INSERT INTO Usuario (
                    nomeUsuario,
                    emailUser,
                    senhaUser,
                    fkPermissao
                    ) VALUES (
                        '${nomeUsuario}', 
                        '${emailUser}', 
                        '${senhaUser}', 
                        '${fkPermissao}'
                    );
                    SELECT SCOPE_IDENTITY()`;
    return connection.query(sql)
}

async function selecinarUsuarioPorID(data) {
    
}

module.exports = { inserirUsuario }