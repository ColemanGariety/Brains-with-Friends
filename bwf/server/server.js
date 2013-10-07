// Load node dependencies
var express = require('express'),
    http = require('http'),
    server = express(),
    nclosure = require('nclosure').nclosure(),
    Handlebars = require('hbs'),
    uuid = require('node-uuid'),
    // couchbase = require("couchbase"),
    config = require('./config.json')

// Provide
goog.provide('server');

// Require
goog.require('utilities.server');
goog.require('utilities.shared');

// Express middleware
server.use(express.compress()); // Gzip data for speed
server.use(express.bodyParser()); // Form parsing
server.use(express.cookieParser(config.cookie_secret)); // Signed cookies
server.use(express.cookieSession()); // Sessions
server.use(express.csrf()); // Secure cookies

// Templating
server.set('views', __dirname + '/../client')
server.set('view engine', 'html');
server.engine('html', Handlebars.__express);

// Pools
var players = {}

// Dynamic routes
server.get('/', function (req, res) {
  console.log("User '" + req.session.user_id + "' is joining.");
  
  var user_id = req.session.user_id || uuid.v4()
  
  players[user_id] = {}
  
  res.render('index', { user_id: user_id });
});

server.get('/login', function (req, res) {
  req.session.user_id = req.query.id || uuid.v4();
  
  // bucket.add("foo", {
  //   name: "John"
  // }, function() {
  //   if (err) throw err;
  // });
  
  res.redirect('/');
});

server.get('/players', function (req, res) {
  res.send(JSON.stringify(players))
})

// Static routes
server.use(express.static(__dirname + "/../client")); // The public files
server.use(express.static(__dirname + "/../../")); // Closure, lime and Box2D dependency

// Start the server
// couchbase.connect({
//     "user" : config.couchbase.username,
//     "password" : config.couchbase.password,
//     "hosts" : [ config.couchbase.host ],
//     "bucket" : config.couchbase.bucket
// }, function(err, bucket) {
//   if (err) throw err;
  
  http.createServer(server).listen(1337);
// });