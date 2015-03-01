
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = function (app, db) {

  app.get("/api/profile", function (req, res, next) {
    res.json({
      _id: "@toddhgardner",
      name: "Todd H Gardner",
      image: "/img/Hello.jpg"
    });
    next();
  });

};
