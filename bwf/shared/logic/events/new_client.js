goog.provide('bwf.events.newClient');


bwf.events.newClient = function() {
  if (window) { // Make sure we're in a web browser
    bwf.director = new lime.Director(document.body, window.innerWidth, window.innerHeight);
  };
};