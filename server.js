
var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
var db = require("./server/db.js");

require("./server/controllers/statements")(app, db);
require("./server/controllers/profile")(app, db);

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Express server listening on port " + port);

