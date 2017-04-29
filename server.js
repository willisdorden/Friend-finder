var express = require('express');
var bodyParser= require('body-parser');
var path = require("path");

//telling node to use express
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
//telling node to use the port number
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// Add the standard 4 lines of code to use bodyParser as middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// run the module's function to set our app routes
require("./routing/apiRoutes.js")(app);

//add require for html routes
require('./routing/htmlRoutes.js')(app);


// The below code effectively "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});