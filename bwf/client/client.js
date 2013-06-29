// Provide the base game class
goog.provide('client');

// Modules
goog.require('lime.Director');
goog.require('shared.utilities');
goog.require('client.utilities');
goog.require('client.input');

// Fire when dependencies are loaded
window.onload = function() {
  client.director = new lime.Director(document.body, window.innerWidth, window.innerHeight); // Setup the rendering engine
};