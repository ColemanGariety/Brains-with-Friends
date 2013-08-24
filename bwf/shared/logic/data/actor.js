goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
    this.xa = 100
    this.ya = 100
    this.layer = new lime.Layer()
    this.legs = new lime.Sprite().setSize(40,36).setFill('/assets/display/actors/legs/foo.png').setPosition(this.xa, this.ya)
    
    // Add legs to screen
    client.scene.appendChild(this.layer);
    this.layer.appendChild(this.legs);
  }
});