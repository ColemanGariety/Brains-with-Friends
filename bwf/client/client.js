// Provide the base game class
goog.provide('client');

// Modules
require('utilities.client');
require('utilities.shared');
require('lime.Director');
require('lime.parser.TMX');
require('lime.Layer');
require('Input')
require('Map')
require('Actor')


// Singleton class for the client
var Client = function() {
  var instance; // Private instance

  function Client() { // Constructor
    client = instance = this; // Keep a closured reference to the instance
    
    require('Input');
    
    this.renderPadding = 64
    this.renderDebounce = 150
    this.mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
    
    // Initialize Lime
    this.director = new lime.Director(document.body, window.innerWidth, window.innerHeight) // Setup the rendering engine
    this.scene = new lime.Scene();
    this.director.replaceScene(this.scene);
    
    // Drop in the first map
    require('Map');
    this.maps = {
      desert: new Map
    }

    // Drop in the first actor
    require('Actor');
    this.actors = {
      puppet: new Actor
    }
     
    require('Zombie');
    this.zombies = {
      zombie: new Zombie
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
