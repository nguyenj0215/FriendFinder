var express = require("express");
var path = require("path");

var app = express();
var PORT = process.argv.PORT || 8080;

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Server listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


