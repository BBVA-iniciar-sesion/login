const express = require('express')
const server = express()

const bodyparser = require('body-parser')

const mongo = require('mongoose')
mongo.connect('mongodb+srv://rastogna:alal1010@rastogna.2emzrq2.mongodb.net/?retryWrites=true&w=majority').then(x => console.log("Conectado"))
const registerschem = require('./schema.js')


server.use(bodyparser.urlencoded({ extended: false }))
server.use(bodyparser.json())

server.listen(5555)

server.post('/post', (req, res) => {

    const user = req.body.username
    const pass = req.body.password

    let register = registerschem.create({

        Username: user,
        Password: pass

    }).then(x => {console.log(x)
   
})


})