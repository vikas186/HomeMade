const express = require ('express');
const app = express();
require('dotenv').config()

app.use(express.json())

const conn = require('./database/db');
const mongoose = require('mongoose');

mongoose.connect(conn.url).then(() => {
        console.log("Databse Connected Successfully!!");    
     }).catch(err => {
        console.log('Could not connect to the database', err);
         process.exit();
     });

module.exports = app

