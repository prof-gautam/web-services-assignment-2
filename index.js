// importing necessary library
const express = require("express")
const https = require("https")
const fs = require('fs')

//importing local modules
const firstApp = require('./routes/firstApp')


//Setting express server

const app = express()

const httsOptions = {
    //here goes our ssl
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

// now creating server using https
const server = https.createServer(httsOptions, app)
app.use(express.json())
app.use('/myApp/api/v1', firstApp)

//listening to server 
const PORT = process.env.PORT || 3001
server.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})