const dbConn = require('../config/db_connection')
const {DataTypes} = require('sequelize')

// defining the structure of the post model
const Post = dbConn.define('post', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sub_title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},
// define table name
{
    tableName: 'posts'
} )

// create the model
Post.sync()

module.exports = Post;