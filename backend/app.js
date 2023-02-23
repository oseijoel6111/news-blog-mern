const express = require('express')
require('dotenv').config();


// creating express app
const app = express()

// app port
const port = process.env.PORT || 4000


app.listen(port, ()=>{
    console.log(`Server `);
})