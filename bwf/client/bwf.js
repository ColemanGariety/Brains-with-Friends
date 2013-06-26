goog.provide('bwf');
goog.require('Class')
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');

// Is called from index.html after Google dependencies load
bwf.start = function() {
  bwf.director = new lime.Director(document.body, window.innerWidth, window.innerHeight);
  bwf.scene = new lime.Scene();
};

goog.exportSymbol("bwf.start", bwf.start);