require("dotenv/config");

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    var config = {
        user: 'AdminOnHome',
        password: '2ads@grupo10',
        server: 'onhomesolutions.database.windows.net',
        database: 'onHome'
    };

    // Organizar estrutura de envio
    const mysql = require("mysql2/promise");
    const sqls = require("mssql");
    const connection = await mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:3306/onhome`);
    const connection2 = sqls.connect(config);
    // global.connection = connection2;
    global.connection = connection;
    console.log("Conexão com banco efetuada com sucesso");
    return connection;
}

module.exports = { connect }