goog.provide('bwf');
goog.require('Class');
goog.require('Dll');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('bwf.input');

// Is called from index.html after Google dependencies load
bwf.start = function() {
  bwf.director = new lime.Director(document.body, window.innerWidth, window.innerHeight);
  bwf.scene = new lime.Scene();
  bwf.director.replaceScene(bwf.scene);
};

goog.exportSymbol("bwf.start", bwf.start);