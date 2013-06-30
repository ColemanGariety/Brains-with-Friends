// Provide the base game class
goog.provide('client');

// Modules
goog.require('lime.Director');
goog.require('utilities.shared');
goog.require('utilities.client');

// Singleton class for the client
var Client = (function() {
  var instance; // Private instance

  function Client() { // Constructor
    // Throw error if constructed multiple times
    if (typeof instance != "undefined") {
      throw new Error("Client may only be instantiated once.");
    }
    
    goog.requireAsync('client.input');
    
    this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight);
    
    // Keep a closured reference to the instance
    instance = this;
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