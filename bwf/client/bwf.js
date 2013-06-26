goog.provide('bwf');
goog.require('Class')
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');

// Is called from index.html after Google dependencies load
bwf.start = function() {
  // DELETE ME
  var Example = new Class({
    constructor: function () {
      alert("You constructed an example with Google Closure! Fuck yeah!");
    }
  });
  
  var Example1 = new Example;
  // END DELETE ME
};

goog.exportSymbol("bwf.start", bwf.start);