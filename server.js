var express = require('express');
var http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var serveStatic = require('serve-static');

var app = express();
var server = http.createServer(app).listen(3005, function () {
    console.log('Express server listening on port 3005');
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(errorhandler());
app.use(serveStatic(__dirname));
//require('./demo/demo-api')(app, __dirname);

module.exports = server;

// Override: Provide an "use" used by grunt-express.
module.exports.use = function () {
    app.use.apply(app, arguments);
};
