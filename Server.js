/**
 * Created by DEV on 2/13/2017.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongodb = require('mongodb');
var url = "mongodb://localhost:27017/User";
var mongoClient = mongodb.MongoClient;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "login.html");
});
app.post('/login', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.pass;

    mongoClient.connect(url, function (err, db) {
        db.collection("Department").findOne({"user": user_name, "pass": password}, function (err, result) {

            if(err){
                return res.send('not found');

            }else{
                res.sendFile(__dirname + "/public/" + "Buoi 4.html")
            }
        });
    });
});
app.listen(3000, function () {
    console.log("Started on PORT 3000");
})

