// Provide the base game class
goog.provide('client');

// Modules
goog.require('lime.Director');
goog.require('lime.parser.TMX');  
goog.require('utilities.shared');
goog.require('utilities.client');
goog.require('lime.Layer');

// Singleton class for the client
var Client = (function() {
  var instance; // Private instance

  function Client() { // Constructor
    goog.requireAsync('client.input');

    this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight); // Setup the rendering engine
    this.scene = new lime.Scene();
    this.director.replaceScene(this.scene);

    goog.requireAsync('Map', function() {
      this.maps = {
        desert: new Map
      }
    });

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