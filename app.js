const express = require('express')
// import dotenv module
require('dotenv').config()

// import database connection

const dbConn= require('./config/dbConn')

// call database connection function

dbConn()

const app = express()

// import some middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// import routes

// export app
module.exports = app