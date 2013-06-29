var routes = function(app, express) {
  // Dynamic routes
  var index = app.get('/', function(req, res) {
    console.log("User '" + req.session.user_id + "' requested.");
    res.render('index', { user_id: req.session.user_id });
  });
  
  var login = app.get('/login', function(req, res) {
    req.session.user_id = 30
    res.redirect('/')
  });
  
  // Static routes
  var dirpublic = app.use(express.static(__dirname + "/../client")); // The public files
  var dirlib = app.use(express.static(__dirname + "/../../")); // Closure, lime and Box2D dependency
}

module.exports = routes