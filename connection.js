const mysql = require('mysql');
const dotenv = require('dotenv').config();

let mySqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASS,
    database: "bankdb",
    multipleStatements: true,
    insecureAuth: false,
});

mySqlConnection.connect(err => {
    if(!err) {
        console.log("connected");
    } else {
        console.log(err);
    }
})

module.exports = mySqlConnection;