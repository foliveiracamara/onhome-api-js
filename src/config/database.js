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
    const sqls = require("mssql");
    const connection2 = sqls.connect(config);
    global.connection = connection2;
    console.log("Conexão com banco efetuada com sucesso");
    return connection2;

    while (true) {
        try {
            const sqls = require("mssql");
            const connection2 = sqls.connect(config);
            global.connection = connection2;
            console.log("Conexão com banco efetuada com sucesso");
            return connection2;
        } catch(err) {
            console.log(`Erro: ${err}`)       
        }
    }
}

module.exports = { connect }