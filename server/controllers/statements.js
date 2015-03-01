
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = function (app, db) {

  app.get("/api/statements/reset", function (req, res, next) {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({
        image: "/img/Hello.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        timestamp: new Date().toISOString()
      });
    }
    db.statements.remove({}, {multi:true}, function () {
      db.statements.insert(data, function (err, saved) {
        res.json({});
        next();
      });
    });
  });


  app.get("/api/statements/bad", function (req, res, next) {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({
        image: "/img/Hello.jpg",
        text: 42,
        timestamp: new Date().toISOString()
      });
    }
    db.statements.remove({}, {multi:true}, function () {
      db.statements.insert(data, function (err, saved) {
        res.json({});
        next();
      });
    });
  });


  app.get("/api/statements", function (req, res, next) {
    db.statements.find({}).sort({ timestamp: 1 }).exec(function (err, docs) {
      res.json(docs);
      next();
    });
  });

  app.post("/api/statements", jsonParser, function (req, res, next) {
    var statements = {
      text: (req.body || {}).text,
      timestamp: new Date().toISOString(),
      image: "/img/Hello.jpg",
    };
    db.statements.insert(statements, function (err, saved) {
      res.json(saved);
      next();
    });
  });

  app.delete("/api/statements/:id", function (req, res, next) {
    db.statements.remove({ _id: req.params.id }, function (err, removed) {
      res.json({});
      next();
    });
  });

};
