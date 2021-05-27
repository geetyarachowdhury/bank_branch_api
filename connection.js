const mysql = require('mysql');
const dotenv = require('dotenv').config();

let mySqlConnection = mysql.createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER , 
    password: process.env.DB_PASS,
    database: process.env.DB_NAME ,
    multipleStatements: true,
});


module.exports = mySqlConnection;
