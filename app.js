
var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.get("/api/status", function (req, res, next) {
  res.json([]);
  next();
});

app.post("/api/status", function (req, res, next) {
  res.json([]);
  next();
});

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Express server listening on port " + port);