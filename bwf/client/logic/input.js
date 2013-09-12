goog.provide('Input');
require('lime.animation.MoveBy');

// Mousedown
Input.mousedown = function(event) {
  switch (event.event_.which) {
    case 1: // Left-click
      break
    case 3: // Right-click
      break
  }
  
  return true
}
goog.events.listen(document, goog.events.EventType.MOUSEDOWN, Input.mousedown);

//WASD down
Input.keydown = function(event) {
  var puppet = client.actors.puppet
  switch (event.event_.which) {
    case 68:
      if (puppet.actions.indexOf('moveRight') == -1) puppet.actions.push('moveRight')
      break
    case 83:
      if (puppet.actions.indexOf('moveDown') == -1) puppet.actions.push('moveDown')
      break
    case 65:
      if (puppet.actions.indexOf('moveLeft') == -1) puppet.actions.push('moveLeft')
      break
    case 87:
      if (puppet.actions.indexOf('moveUp') == -1) puppet.actions.push('moveUp')
      break
  }

  return true
}
goog.events.listen(document, goog.events.EventType.KEYDOWN, Input.keydown);

//WASD up
Input.keyup = function(event) {
  var puppet = client.actors.puppet
  switch (event.event_.which) {
    case 68:
      puppet.actions.splice(puppet.actions.indexOf('moveRight'))
      break
    case 83:
      puppet.actions.splice(puppet.actions.indexOf('moveDown'))
      break
    case 65:
      puppet.actions.splice(puppet.actions.indexOf('moveLeft'))
      break
    case 87:
      puppet.actions.splice(puppet.actions.indexOf('moveUp'))
      break
  }

  return true
}
goog.events.listen(document, goog.events.EventType.KEYUP, Input.keyup);

// Drag
Input.drag = function(event) {
  // Will be needed for inventory item re-arranging
  return true
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
  return false
}
goog.events.listen(document, goog.events.EventType.CONTEXTMENU, Input.contextmenu);

// Text selection
Input.selectstart = function(event) {
  event.preventDefault(); // Kill the i-beam cursor
  return false
}
goog.events.listen(document, goog.events.EventType.SELECTSTART, Input.selectstart);

// The loop
lime.scheduleManager.schedule(function(){ 
  var puppet = client.actors.puppet,
      i = puppet.actions.length
  while (i--) {
    switch (puppet.actions[i]) {
      case 'moveRight':
        puppet.legs.setPosition(puppet.x += 1, puppet.y)
        break
      case 'moveDown':
        puppet.legs.setPosition(puppet.x, puppet.y += 1)
        break
      case 'moveLeft':
        puppet.legs.setPosition(puppet.x -= 1, puppet.y)
        break
      case 'moveUp':
        puppet.legs.setPosition(puppet.x, puppet.y -= 1)
        break
    }
  }
},this); 