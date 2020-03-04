const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000

const {getInfo} = require("./app")

app.use("/",express.static(path.join(__dirname, "public")));
app.use("/insurances",express.static(path.join(__dirname, "public/insurances.html")));
app.use("/users",express.static(path.join(__dirname,"public/user.html")));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/users', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/user.html'));
// });

app.get("/info", async(req,res)=>{
    const info = await getInfo(1);
    res.send(info[0].username);
})

app.listen(port, () => {
    console.log('listening to localhost:4000')
})