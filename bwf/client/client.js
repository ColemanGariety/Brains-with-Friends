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
    
    // The loop
    lime.scheduleManager.schedule(function(){ 
      var puppet = client.actors.puppet,
          desert = client.maps.desert
          i = puppet.actions.length
      
      while (i--) {
        switch (puppet.actions[i]) {
          case 'moveRight':
            if (puppet.x >= window.innerWidth / 2 && desert.x > window.innerWidth - desert.width) {
              desert.layer.setPosition(desert.x -= 5, desert.y)
            } else {
              puppet.layer.setPosition(puppet.x += 5, puppet.y)
            }
            break
          case 'moveDown':
            if (puppet.y >= window.innerHeight / 2 && desert.y > window.innerHeight - desert.height) {
              desert.layer.setPosition(desert.x, desert.y -= 5)
            } else {
              puppet.layer.setPosition(puppet.x, puppet.y += 5)
            }
            break
          case 'moveLeft':
            if (puppet.x <= window.innerWidth / 2 && desert.x < 0) {
              desert.layer.setPosition(desert.x += 5, desert.y)
            } else {
              puppet.layer.setPosition(puppet.x -= 5, puppet.y)
            }
            break
          case 'moveUp':
            if (puppet.y <= window.innerHeight / 2 && desert.y < 0) {
              desert.layer.setPosition(desert.x, desert.y += 5)
            } else {
              puppet.layer.setPosition(puppet.x, puppet.y -= 5)
            }
            break
        }
      }
    },this); 
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
