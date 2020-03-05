const mysql = require('mysql')
const { promisify } = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "caspian"
})

const promisifiedQuery = promisify(connection.query).bind(connection)

//*practice function

const displayDetails = async (username) => {
    try {
        const querystring = `select * from users where username='${username}'`;
        let data = await promisifiedQuery(querystring)
        console.log('fetching user details')
        console.log(data[0])
        return data[0]
    }
    catch (error) {
        console.log('ERROR')
        console.log(error.sqlmessage)
        return error
    }
}


const addUser = async (newUser) => {
    try {
        const querystring = `INSERT INTO users (username, first_name, last_name, balance) VALUES ('${newUser.username}','${newUser.first_name}','${newUser.last_name}',${newUser.balance})`;
        let data = await promisifiedQuery(querystring)
        console.log('adding user')
        return data
    }
    catch (error) {
        console.log("this is an error");
        console.log(error)
    }
}


module.exports = {
    displayDetails,
    addUser
}