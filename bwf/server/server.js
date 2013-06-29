// Load node dependencies
var express = require('express'),
    http = require('http'),
    app = express(),
    nclosure = require('nclosure').nclosure();

// Provide
goog.provide('server');

// Modules
goog.require('shared.utilities');

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

// Dynamic routes
app.get('/', function(req, res) {
  console.log("User '" + req.session.user_id + "' requested.");
  res.render('index', { user_id: req.session.user_id });
});

app.get('/login', function(req, res) {
  req.session.user_id = 30
  res.redirect('/')
});

// Static routes
app.use(express.static(__dirname + "/../client")); // The public files
app.use(express.static(__dirname + "/../../")); // Closure, lime and Box2D dependency

// Start the server
http.createServer(app).listen(1337);