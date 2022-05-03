require("dotenv/config");

async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:3306/db_onform`);
    console.log("Conexão com banco efetuada com sucesso");
    global.connection = connection;
    return connection;
}

module.exports = {connect}