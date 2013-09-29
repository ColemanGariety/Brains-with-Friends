goog.provide('Zombie');


var Zombie = new Class({
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
  }

});
