goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
    var xa = 100
      , ya = 100
      , layer = new lime.Layer()
      , legs = new lime.Sprite().setSize(40,36).setFill('/assets/display/actors/legs/foo.png').setPosition(xa, ya)
    
    // Add legs to screen
    client.scene.appendChild(layer);
    layer.appendChild(legs);
    
  }
});