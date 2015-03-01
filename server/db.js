
var Datastore  = require("nedb");

var db = {};
db.statements = new Datastore({
  filename: "./data/statements.db",
  autoload: true
});

module.exports = db;
