'use strict'

const express  = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT  ||  5501

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`)
})