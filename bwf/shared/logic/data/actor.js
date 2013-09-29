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
      var puppet = client.actors.puppet,
          desert = client.maps.desert
          i = puppet.actions.length
      
      while (i--) {
        switch (puppet.actions[i]) {
          case 'moveRight':
            if (puppet.x >= window.innerWidth / 2 && desert.x > window.innerWidth - desert.width) {
              desert.layer.setPosition(desert.x -= 5, desert.y)
              desert.draw()
            } else {
              puppet.layer.setPosition(puppet.x += 5, puppet.y)
              this.orient(client.mouse)
            }
            break
          case 'moveDown':
            if (puppet.y >= window.innerHeight / 2 && desert.y > window.innerHeight - desert.height) {
              desert.layer.setPosition(desert.x, desert.y -= 5)
              desert.draw()
            } else {
              puppet.layer.setPosition(puppet.x, puppet.y += 5)
              this.orient(client.mouse)
            }
            break
          case 'moveLeft':
            if (puppet.x <= (window.innerWidth / 2) + 5 && desert.x < 0) {
              desert.layer.setPosition(desert.x += 5, desert.y)
              desert.draw()
            } else {
              puppet.layer.setPosition(puppet.x -= 5, puppet.y)
              this.orient(client.mouse)
            }
            break
          case 'moveUp':
            if (puppet.y <= (window.innerHeight / 2) + 5 && desert.y < 0) {
              desert.layer.setPosition(desert.x, desert.y += 5)
              desert.draw()
            } else {
              puppet.layer.setPosition(puppet.x, puppet.y -= 5)
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
  
  orient: function(target) {
    // Orient the player
    var direction = Math.atan2(target.y - this.y, target.x - this.x)
    this.layer.setRotation(-(direction * (180 / Math.PI) + 90))
  }
});