"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dbCards = _interopRequireDefault(require("./dbCards.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// App config
var app = (0, _express["default"])();
var port = process.env.PORT || 8001;
var connection_url = "mongodb+srv://admin:2JnKU67Ga5ikpWJC@cluster0.jrlf0.mongodb.net/tindercards?retryWrites=true&w=majority\n"; // Middlewares

app.use(_express["default"].json());
app.use((0, _cors["default"])()); // DB Config

_mongoose["default"].connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}); // API endpoints


app.get('/', function (req, res) {
  return res.status(200).send("Hello World");
});
app.post('/tinder/cards', function (req, res) {
  var dbCard = req.body;

  _dbCards["default"].create(dbCard, function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get('/tinder/cards', function (req, res) {
  _dbCards["default"].find(function (err, data) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}); // Listener

app.listen(port, function () {
  return console.log("Listening on localhost: ".concat(port));
});