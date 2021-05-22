const express = require('express');
const bodyParser = require('body-parser');
const bankRouter = require('./routes/banks');
const cors = require('cors');

const mySqlDb = require('../connection');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api", bankRouter);
app.use(cors());
app.get("/", cors(), (req, res) => {
    mySqlDb.query("SELECT * from bank_branches", (err, rows, fields) => {
        if(!err) {
            console.log(rows.length)
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;
