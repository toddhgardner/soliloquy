
var express = require("express");
var slow = require('connect-slow');

var app = express();
var port = process.env.PORT || 3000;
var db = require("./server/db.js");

app.use(slow({
  url: /\?slow/i,
  delay: 8000
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./server/controllers/customers")(app, db);
require("./server/controllers/statements")(app, db);
require("./server/controllers/profile")(app, db);

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Express server listening on port " + port);

// var altPort = 3001;
// app.listen(altPort);
// console.log("Alt Express server listening on port " + altPort);
