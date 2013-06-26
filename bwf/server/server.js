var express = require('express'),
    http = require('http'),
    app = express();

app.use(express.compress());

app.use(express.static(__dirname + "/../client")); // The public files
app.use(express.static(__dirname + "/../../")); // Closure, lime and Box2D dependency

http.createServer(app).listen(1337);