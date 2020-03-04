const mysql = require('mysql')
const {promisify} = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "caspian" 
})

const promisifiedQuery = promisify(connection.query).bind(connection)

const getInfo = async (user_id) =>{
    try{
        const querystring = `select * from users where id=${user_id}`;
        let data = await promisifiedQuery(querystring)
        console.log('fetching data')
        return data
    }
    catch (error) {
        console.log('get error')
        console.log(error.sqlmessage)
    }
}

// getInfo(1)
// console.log("app.js");

module.exports = {
    getInfo
}