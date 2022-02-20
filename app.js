//Importing the dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const DoubtsRoute = require('./routes/doubts')

//Create express app
const app = express()

//Connecting to the database
mongoose.connect('mongodb://localhost/doubts')
mongoose.Promise = global.Promise;
//Initializing our databse
const db= mongoose.connection

//Checking whether our dtabase is connected or not
db.on('open', function(){
    console.log("Connected to the MongoDB database")
})

//Middleware
app.use(express.json())

//Starting the server
app.listen(8000, function(){
    console.log("Server is started at port 8000")
})
 
// Basic Route
app.get("/", function(req, res){
    res.send("Hello World")
})

app.use('/doubts', DoubtsRoute)