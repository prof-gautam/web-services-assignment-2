const express = require('express')

const firstApp = express.Router()

firstApp.get('/', (req, res)=>{
    res.send('Hello world, Its my first app! ')
})

firstApp.get('/home',(req, res)=>{
    res.send('Hey! Now you are in my home page! Web service is up!')
})

module.exports = firstApp