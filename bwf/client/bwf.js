goog.provide('bwf');
goog.require('Class')
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');

bwf.start = function() {
  return lime.Director;
};

var Person = new Class();

goog.exportSymbol("bwf.start", bwf.start);