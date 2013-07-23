goog.provide('Input');
goog.require('Actor');

// Mousedown
Input.mousedown = function(event) {
  switch (event.event_.which) {
    case 1: // Left-click
      break;
    case 3: // Right-click
      break;
  }
  
  return true;
}
goog.events.listen(document, goog.events.EventType.MOUSEDOWN, Input.mousedown);

//there are 12 frames in the walking animation, which cannot be divided evenly
//by 1 second, there's some testing that needs to be done as far as the anim loop
switch (event_.which) {
      var anim = new lime.animation.KeyframeAnimation().setDelay(.1)
      .addFrame(legAni1.png).addFrame(legAni2.png).addFrame(legAni3.png)
      .addFrame(legAni4.png).addFrame(legAni5.png).addFrame(legAni6.png)
      .addFrame(legAni7.png).addFrame(legAni8.png).addFrame(legAni9.png)
      .addFrame(legAni10.png).addFrame(legAni11.png).addFrame(legAni12.png);

  case 87: function moveUp(){
    lime.animation.MoveBy(0,ya+10)
    sprite.runAction(anim);
  }
    function moveUp()
    break;
  case 65: function moveLeft(){
    lime.animation.MoveBy(xa-10,0)
    sprite.runAction(anim).rotateBy(270);
  }
    break;
  case 83: function moveDown(){
    lime.animation.MoveBy(0,ya-10)
    sprite.runAction(anim).rotateBy(180);
  }
    break;
  case 68: function MoveRight(){
    lime.animation.MoveBy(xa+10,0)
    sprite.runAction(anim).rotateBy(90);
    break;
}
//should there be a return statement for every case or is the line below defunct?
return goog.events.KeyCodes.isCharacterKey(87);



// Drag
Input.drag = function(event) {
  // Will be needed for inventory item re-arranging
  return true;
}
goog.events.listen(document, goog.events.EventType.DRAG, Input.drag);

// Mouse-move
Input.mousemove = function(event) {
  // Update the game's knowledge of the mouse cursor
  return client.mouse = {
    x: event.clientX,
    y: event.clientY
  }
}
goog.events.listen(document, goog.events.EventType.MOUSEMOVE, Input.mousemove);

// Right-click
Input.contextmenu = function(event) {
  event.preventDefault(); // Kill the context menu
  return false;
}
goog.events.listen(document, goog.events.EventType.CONTEXTMENU, Input.contextmenu);

// Text selection
Input.selectstart = function(event) {
  event.preventDefault(); // Kill the i-beam cursor
  return false;
}
goog.events.listen(document, goog.events.EventType.SELECTSTART, Input.selectstart);

