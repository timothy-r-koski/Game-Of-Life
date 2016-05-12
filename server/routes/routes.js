/**
 * Created with IntelliJ IDEA.
 * User: Tim
 * Date: 5/9/16
 * Time: 11:59 PM
 * To change this template use File | Settings | File Templates.
 */
var appRouter = function(app) {
    var express = require('express');
    var options = {
        root: __dirname + '/../..'
    };

    app.get("/", function(req, res) {
        res.sendFile('/client/views/index.html', options);
    });
    app.use(express.static('client'));
    app.use(express.static('server/node_modules'));
}

module.exports = appRouter;
