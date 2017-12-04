// dependencies
var express = require("express");

var router = express.Router();

// import the burger model to access database functions
var burger = require("../models/burger.js");

// routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create({burger_name: req.body.burger_name, devoured: 0}, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var devouredID = req.params.id;
  var newValues = req.body;

  console.log("devouredID " + devouredID);
  console.log(JSON.stringify(newValues));

  burger.update(newValues, "id", devouredID, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
