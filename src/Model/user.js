const db = require("./db");

async function getLastUser() {
    const connection = await db.connect();
    const lastUserID = await connection.query(`SELECT id_user FROM tb_user ORDER BY id_user DESC LIMIT 1`);
    const [id] = lastUserID
    return id;
}

async function insertUser(data) {
    const values = [data.user_complete_name, data.user_social_name, data.birth_date, data.user_gender, data.birth_city, data.ethnicity, data.user_father_name, data.user_mother_name]
    const connection = await db.connect();
    const sql = `INSERT INTO tb_user(
                    user_complete_name, 
                    user_social_name, 
                    birth_date, 
                    user_gender, 
                    birth_city, 
                    ethnicity, 
                    user_father_name, 
                    user_mother_name,
                    created_at,
                    updated_at, 
                    uuid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, now(), now(), uuid());`;
    return await connection.query(sql, values);
}

module.exports = {insertUser, getLastUser};
