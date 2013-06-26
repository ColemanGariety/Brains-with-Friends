goog.provide('bwf');
goog.require('input');
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
bwf.start = function() {
  return lime.Director;
};

goog.exportSymbol("bwf.start", bwf.start);