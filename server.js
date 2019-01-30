/// require the express module in server.js =============================
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/www")); // for html template and css ,js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(5000);
console.log("server running on port 5000");


