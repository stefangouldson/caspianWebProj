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

//displayDetails('StefanG')

module.exports = {
    displayDetails,
}