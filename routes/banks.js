const express = require('express');
const Router = express.Router();
var cors = require('cors')
const mySqlDb = require('../connection');

Router.get("/", cors(), (req, res) => {
    mySqlDb.query("SELECT * from bank_branches", (err, rows, fields) => {
        if(!err) {
            console.log(rows.length)
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/banks", (req, res) => {
    mySqlDb.query("SELECT * from banks", (err, rows, fields) => {
        if(!err) {
            console.log(rows.length)
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/branches", cors(), (req, res) => {
    let n = parseInt(req.query.page);
    let m = parseInt(req.query.offset);
    let b = req.query.q;
    let q = b.toUpperCase();
    mySqlDb.query('SELECT * FROM bank_branches where ? in (ifsc, bank_id, branch, address, city, district, state, bank_name) LIMIT ? OFFSET ?',[ q, n, m ], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

Router.get("/branches/autocomplete", (req, res) => {
    let n = parseInt(req.query.page);
    let m = parseInt(req.query.offset); 
    let b = req.query.q;
    let q = b.toUpperCase();
    mySqlDb.query("SELECT * from bank_branches where branch = ? ORDER BY ifsc ASC LIMIT ? OFFSET ?", [q, n, m], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

module.exports = Router;