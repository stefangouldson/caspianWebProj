const mysql = require('mysql')
const {promisify} = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "caspian" 
})

const promisifiedQuery = promisify(connection.query).bind(connection)

const getInfo = async (id) =>{
    try{
        const querystring = `select * from users where id=${id};`;
        let data = await promisifiedQuery(querystring)
        console.log('fetching data')
        return(data[0].username)
    }
    catch (error) {
        console.log('get error')
        console.log(error.sqlmessage)
    }
}

//getInfo(2)

module.exports = {
    getInfo
}