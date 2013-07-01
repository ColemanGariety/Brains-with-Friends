// Provide the base game class
goog.provide('client');

// Modules
goog.require('lime.Director');
goog.require('lime.parser.TMX');  
goog.require('utilities.shared');
goog.require('utilities.client');

// Singleton class for the client
var Client = (function() {
  var instance; // Private instance

  function Client() { // Constructor
    goog.requireAsync('client.input');
    goog.requireAsync('Map');

    this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight); // Setup the rendering engine
    this.maps.desert = new Map;
    
    instance = this; // Keep a closured reference to the instance
  }

  // Public methods
  Client.prototype = {
    
  }

  Client.getSingletonInstance = function() {
    if (typeof instance == "undefined") {
      return new this();
    }
    else {
      return instance;
    }
  }

  // Return the constructor
  return Client;
})();

// Initialize the client when dependencies are loaded
window.onload = function() {
   client = Client.getSingletonInstance();
};