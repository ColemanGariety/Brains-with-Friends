var express = require('express'),
    http = require('http'),
    app = express();

app.use(express.compress());

app.use(express.static(__dirname + "/../client"));

http.createServer(app).listen(1337);