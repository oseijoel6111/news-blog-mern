const express = require('express')

// create a router
const app = express.Router()

app.get('/', (req, res)=>{
    res.send("It is working!!!!");
});

// creating a resources in the db 
app.post('/posts/create', (req, res)=>{
    res.json(req.body)
})

// creating a resources to get all 
app.get('/posts', (req, res)=>{
    res.send('All Posts');
})

// localhost:4000/posts/create

// export router 
module.exports = app;