const dbConn = require('./db_connection')
const Post = require('../models/Post')


// initialize empty db object with 
const db = {
    dbConn,
    Post
}

module.exports = db