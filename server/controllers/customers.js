
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

module.exports = function (app, db) {

  app.get("/api/customers/1", function (req, res, next) {
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
        res.json({message:"loaded customer 1"});
        next();
      });
    });
  });


  app.get("/api/customers/2", function (req, res, next) {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({
        image: "/img/Hello.jpg",
        text: 42, // <-- this is the bad data, since its supposed to be a string.
        timestamp: new Date().toISOString()
      });
    }
    db.statements.remove({}, {multi:true}, function () {
      db.statements.insert(data, function (err, saved) {
        res.json({message:"loaded customer 2"});
        next();
      });
    });
  });


};
