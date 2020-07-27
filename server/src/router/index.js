var express = require('express')
var router = express.Router()
const mysql = require('mysql')
const bodyParser = require('body-parser')

// db connection 
const con = mysql.createConnection({
    host: "localhost",
    database: "booking_engine",
    user: "root",
    password: "admin"
});

con.connect((err) => {
    if(err) throw err;
    console.log("connection established")
});

//json parser
const jsonParser = bodyParser.json()
//url encoded
const urlEncodedParser = bodyParser.urlencoded({extended: false})

router.get("/", jsonParser, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let phone_number = req.body.phone_number;
    let qr = `insert into users(username,password,phone_number) values('${username}', '${password}', '${phone_number}')`
    con.query(qr, (err) => {
        if(err) {
            return res.send(err);
        }
        res.send("data added successfully!")
    });
})

module.exports = router;