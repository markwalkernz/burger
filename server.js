// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// set up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static directory to be served
app.use(express.static("./public"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});