goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
    this.x = 100
    this.y = 100
    this.layer = new lime.Layer()
    this.torso = new lime.Sprite()
    this.actions = []
    
    // Set properties
    this.layer.setPosition(this.x, this.y)
    this.torso.setSize(71, 71).setFill('/assets/display/actors/torsos/torso.png')
    
    // Handle movement
    lime.scheduleManager.schedule(function(){
      var desert = client.maps.desert
          i = this.actions.length
      
      while (i--) {
        switch (this.actions[i]) {
          case 'moveRight':
            if (this.x >= window.innerWidth / 2 && desert.x > window.innerWidth - desert.width) {
              desert.layer.setPosition(desert.x -= 5, desert.y)
              desert.draw()
            } else {
              this.layer.setPosition(this.x += 5, this.y)
              this.orient(client.mouse)
            }
            break
          case 'moveDown':
            if (this.y >= window.innerHeight / 2 && desert.y > window.innerHeight - desert.height) {
              desert.layer.setPosition(desert.x, desert.y -= 5)
              desert.draw()
            } else {
              this.layer.setPosition(this.x, this.y += 5)
              this.orient(client.mouse)
            }
            break
          case 'moveLeft':
            if (this.x <= (window.innerWidth / 2) + 5 && desert.x < 0) {
              desert.layer.setPosition(desert.x += 5, desert.y)
              desert.draw()
            } else {
              this.layer.setPosition(this.x -= 5, this.y)
              this.orient(client.mouse)
            }
            break
          case 'moveUp':
            if (this.y <= (window.innerHeight / 2) + 5 && desert.y < 0) {
              desert.layer.setPosition(desert.x, desert.y += 5)
              desert.draw()
            } else {
              this.layer.setPosition(this.x, this.y -= 5)
              this.orient(client.mouse)
            }
            break
        }
      }
    }, this);
    
    // Add torso to screen
    client.scene.appendChild(this.layer)
    this.layer.appendChild(this.torso)
  },

  realX: function() {
    return -(-this.x - client.maps.desert.x)
  },
  
  realY: function() {
    return -(-this.y - client.maps.desert.y)
  },
  
  orient: function(target) {
    // FIX: this needs to be updated to support more classes than Actor
    // Currently, these checks are simply to determine wether to orient based on the map or the window
    var x = target instanceof Actor ? this.realX() : this.x
      , y = target instanceof Actor ? this.realY() : this.y
      , direction = Math.atan2(target.y - y, target.x - x) * (180 / Math.PI) + 90
    this.layer.setRotation(-direction)
  }
});