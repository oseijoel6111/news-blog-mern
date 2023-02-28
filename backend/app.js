const express = require('express')
require('dotenv').config();
const frontendRoute = require('./routes/frontend')

// creating express app
const app = express()

// using express body parser
app.use(express.urlencoded({extended: false}))

// app port
const port = process.env.PORT || 4000

// frontend routes
app.use('/',  frontendRoute)


app.listen(port, ()=>{
    console.log(`Server started `);
})