// Provide the base game class
goog.provide('client');

// Modules
goog.require('lime.Director');
goog.require('shared.utilities');
goog.require('client.utilities');
goog.require('client.input');

// Singleton class for the client
var client = (function() {
  
  // Public methods
  var _this = {
    construct: function() {
      delete _this.construct;
      _this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight); // Setup the rendering engine
    }
  }
  return _this;
})();

// Fire when dependencies are loaded
window.onload = client.construct;