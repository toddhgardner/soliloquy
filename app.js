
var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require('nedb');

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

var db = {};
db.status = new Datastore({ filename: 'db/status.db', autoload: true });


app.get("/api/status", function (req, res, next) {
  db.status.find({}, function (err, status) {
    res.json(status);
    next();
  });
});

app.post("/api/status", jsonParser, function (req, res, next) {
  var status = {
    text: (req.body || {}).text,
    timestamp: new Date().toISOString()
  };
  db.status.insert(status, function (err, saved) {
    res.json(saved);
    next();
  });
});

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Express server listening on port " + port);