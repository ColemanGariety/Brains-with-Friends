goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
    this.x = 100
    this.y = 100
    this.layer = new lime.Layer()
    this.legs = new lime.Sprite()
    
    this.legs.setSize(80,72).setFill('/assets/display/actors/legs/foo.png')
    
    // Add legs to screen
    client.scene.appendChild(this.layer);
    this.layer.appendChild(this.legs);
    
    // Move it
    this.move()
  },
  
  move: function() {
    this.legs.setPosition(this.x, this.y)
  }
});