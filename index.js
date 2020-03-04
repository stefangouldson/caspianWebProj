const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT || 4000

const {getInfo} = require("./app")

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "./public")));
// app.use("/insurances",express.static(path.join(__dirname, "public/insurances.html")));
// app.use("/users",express.static(path.join(__dirname,"public/user.html")));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/usersTest', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/user.html'));
// });

app.get("/", (req, res) => {
   
    res.render("index", {
        name: "Hello"
    });
});

app.get("/user", (req,res) => {
    res.render("user",{
        object:"content"
    });
})

app.get("/insurances", (req,res) =>{
    res.render("insurances",{
        object: "content"
    })
})

app.get("/info", async(req,res)=>{
    const info = await getInfo(1);
    res.send({username:info});
})


app.listen(port, () => {
    console.log('listening to localhost:4000')
})