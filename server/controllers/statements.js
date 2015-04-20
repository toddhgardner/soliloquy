
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = function (app, db) {

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
