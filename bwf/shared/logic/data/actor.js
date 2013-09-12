goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
    this.x = 100
    this.y = 100
    this.layer = new lime.Layer()
    this.torso = new lime.Sprite()
    this.actions = []
    
    // Whatever
    this.layer.setPosition(this.x, this.y)
    this.torso.setSize(100, 100).setFill('/assets/display/actors/torsos/torso.png')
    
    // Add torso to screen
    client.scene.appendChild(this.layer)
    this.layer.appendChild(this.torso)
  }
});