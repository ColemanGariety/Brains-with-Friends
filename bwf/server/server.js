// Load node dependencies
var express = require('express'),
    http = require('http'),
    app = express(),
    nclosure = require('nclosure').nclosure(),
    routes = require('./routes.js');

// Provide
goog.provide('server');

// Modules
goog.require('utilities.shared');
goog.require('utilities.server');

// Express middleware
app.use(express.compress()); // Gzip data for speed
app.use(express.bodyParser()); // Form parsing
app.use(express.cookieParser('EIk[PT1ZYaPg36O9JN[Ha)@gzuvP5KTSUx1@p')); // Signed cookies
app.use(express.cookieSession()); // Sessions
app.use(express.csrf()); // Secure cookies

// Templating
app.set('views', __dirname + '/../client')
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Routing
routes(app, express);

// Start the server
http.createServer(app).listen(1337);