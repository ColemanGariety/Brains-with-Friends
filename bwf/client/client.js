// Provide the base game class
goog.provide('client');

// Modules
goog.require('utilities.client');
goog.require('utilities.shared');
goog.require('lime.Director');
goog.require('lime.parser.TMX');
goog.require('lime.Layer');


// Singleton class for the client
var Client = function() {
  var instance; // Private instance

  function Client() { // Constructor
    client = instance = this; // Keep a closured reference to the instance
    
    require('Input');
    this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight) // Setup the rendering engine
    this.scene = new lime.Scene();
    this.director.replaceScene(this.scene);
    
    require('Map');
    this.maps = {
      desert: new Map
    }

    require('Actor');
    this.actors = {
      puppet: new Actor
    } 
  }
  
  // Public methods
  Client.prototype = {
    
  }

  Client.getInstance = function() {
    if (typeof instance == "undefined") {
      return new this();
    }
    else {
      return instance;
    }
  }

  // Return the constructor
  return Client;
}()

// Initialize the client when dependencies are loaded
window.onload = function() {
   client = Client.getInstance();
};
