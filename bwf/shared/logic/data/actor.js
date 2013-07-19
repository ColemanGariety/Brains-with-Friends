goog.provide('Actor');

var Actor = new Class({
  constructor: function() {
    var position = ?
  }
});

lime.Sprite().setSize(40,36).setFill('/legs/legAni2.png').setPosition(100,100); 



goog.events.listen(gameMap, ['mousedown','touchstart'], function(e) {         
    var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(1);        
    Actor.runAction(movement);     
});
