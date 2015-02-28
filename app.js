
var express = require("express");
var bodyParser = require("body-parser");
var Datastore = require('nedb');

var app = express();
var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();

var db = {};
db.status = new Datastore({ filename: 'db/status.db', autoload: true });


app.get("/api/status/reset", function (req, res, next) {
  var data = [];
  for (var i = 0; i < 100; i++) {
    data.push({
      img: "/img/Hello.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in risus lacinia nunc facilisis dignissim. Suspendisse pharetra tempus dolor eu fringilla. Suspendisse tincidunt rhoncus turpis non cursus. Proin mi purus, maximus aliquet dictum at, ullamcorper at augue. Proin molestie augue id eros ultricies malesuada. Curabitur elit sem, scelerisque id porta.",
      timestamp: new Date().toISOString()
    });
  }
  db.status.remove({}, {multi:true}, function () {
    db.status.insert(data, function (err, saved) {
      res.json({});
      next();
    });
  });
});

app.get("/api/status", function (req, res, next) {
  db.status.find({}).sort({ timestamp: 1 }).exec(function (err, docs) {
    res.json(docs);
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

app.get("/api/ad/inline", function (req, res, next) {
  res.json({
    text: "hey an ad"
  });
  next();
});

app.use(express.static(__dirname + "/public"));

app.listen(port);
console.log("Express server listening on port " + port);