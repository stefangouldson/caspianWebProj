const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 4000

const { displayDetails, addUser } = require("./app")

//tells express to use views file for display
app.set('view engine', 'hbs');

//serves all the public files i.e css, javascript
app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//*defines endpoints for each page

app.get("/", (req, res) => {
    res.render("index", {});
});

app.get("/user", (req, res) => {
    res.render("user", {});
})

app.get("/insurances", (req, res) => {
    res.render("insurances", {})
})

//*endpoints for database queries

app.get("/details", async (req, res) => {
    const data = await displayDetails(req.query.username);
    res.send({
        id: data.id,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        balance: data.balance
    })
})

app.post("/register", async (req, res) =>{

    let newUser = {
        username:req.body.username,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        balance:req.body.balance
    }

    console.log(newUser)

    const data = await addUser(newUser)
    console.log('user added')
    res.send(data)
})


//Which port to listen on

app.listen(port, () => {
    console.log('listening to localhost:4000 or live port')
})