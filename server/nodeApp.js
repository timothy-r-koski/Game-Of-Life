/**
 * Created with IntelliJ IDEA.
 * User: Tim
 * Date: 5/9/16
 * Time: 11:53 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
