goog.provide('Zombie')
goog.require('Actor')

var Zombie = new Class({
  extend: Actor,

  constructor: function() {
    //Details
    this.x = 400
    this.y = 400
    this.layer = new lime.Layer()
    this.torso = new lime.Sprite()

    // Set properties
    this.layer.setPosition(400, 400)
    this.torso.setSize(71, 71).setFill('/assets/display/npc/Zombie.png')

    //add NPC on screen
    client.maps.desert.layer.appendChild(this.layer)
    this.layer.appendChild(this.torso)
    this.ai()
  },
  
  ai: function() {
    var _this = this
    lime.scheduleManager.schedule(function(){
        px = -client.maps.desert.x + client.actors.puppet.x
        py = -client.maps.desert.y + client.actors.puppet.y
        //ex = this.x
        //ey = this.y
        var direction = Math.atan2(px - _this.x, py - _this.y)
        var x = Math.sin(direction) /2
        var y = Math.cos(direction) /2
        _this.layer.setPosition(_this.x += x, _this.y += y)
        _this.orient(client.actors.puppet)
    })
  }
})
