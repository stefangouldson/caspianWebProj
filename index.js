const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "src")))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(4000, () => {
    console.log('listening to localhost:4000')
})