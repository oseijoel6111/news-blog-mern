const express = require('express')
const db = require('../config/db_manuplate')

// create a router
const app = express.Router()

app.get('/', (req, res) => {
    res.send("It is working!!!!");
});

// creating a resources in the db 
app.post('/posts/create', async (req, res) => {
    // extract user data
    const { title, sub_title, description } = req.body;
    // save post
    try {
        const createdPost = await db.Post.create({ title, sub_title, description })
        res.status(201).json({ msg: 'Post created successfully' })
    } catch (error) {
        res.status(500).json({ msg: 'Unable to create post' })
    }
})

app.put('/posts/update/:id', async (req, res) => {
    // id param
    const { id } = req.params;

    // content to update
    const { title, sub_title, description } = req.body;

    try {
        const [updated] = await db.Post.update({ title, sub_title, description }, { where: { id } })
        if (updated > 0)
            res.json({ msg: 'post updated succesfully' })
        else
            res.json({ msg: 'unable to update post ' })
    }
    catch (error) {
        res.json({ msg: 'server error' });
    }
});


app.delete('/posts/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const recordDelete = await db.Post.destroy({ where: { id } });
        if (recordDelete > 0)
            res.json({ msg: 'post deleted successfully' })
        else
            res.json({})
    } catch (error) {
        res.json({ msg: 'server error' })
    }
})

// creating a resources to get all 
app.get('/posts', async (req, res) => {
    try {
        const allPost = await db.Post.findAll()
        res.json({ data: allPost })
    } catch (error) {
        res.json({ msg: 'server error' })
    }
})

// export router 
module.exports = app;