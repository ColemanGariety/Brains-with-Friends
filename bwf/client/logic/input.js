goog.provide('Input');
require('lime.animation.MoveBy');

// Mousedown
goog.events.listen(document, goog.events.EventType.MOUSEDOWN, function(event) {
  switch (event.event_.which) {
    case 1: // Left-click
      break
    case 3: // Right-click
      break
  }
  
  return true
});

//WASD down
goog.events.listen(document, goog.events.EventType.KEYDOWN, function(event) {
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
});

//WASD up
goog.events.listen(document, goog.events.EventType.KEYUP, function(event) {
  var puppet = client.actors.puppet
  switch (event.event_.which) {
    case 68:
      puppet.actions.remove('moveRight')
      break
    case 83:
      puppet.actions.remove('moveDown')
      break
    case 65:
      puppet.actions.remove('moveLeft')
      break
    case 87:
      puppet.actions.remove('moveUp')
      break
  }

  return true
});

// Drag
goog.events.listen(document, goog.events.EventType.DRAG, function(event) {
  // Will be needed for inventory item re-arranging
  return true
});

// Mouse-move
goog.events.listen(document, goog.events.EventType.MOUSEMOVE, function(event) {
  // Update the game's knowledge of the mouse cursor
  client.mouse = {
    x: event.clientX,
    y: event.clientY
  }
  
  var direction = Math.atan2(client.mouse.y - client.actors.puppet.y, client.mouse.x - client.actors.puppet.x)
  
  client.actors.puppet.layer.setRotation(-(direction * (180 / Math.PI) + 90))
  
  return client.mouse
});

// Right-click
goog.events.listen(document, goog.events.EventType.CONTEXTMENU, function(event) {
  event.preventDefault(); // Kill the context menu
  return false
});

// Text selection
goog.events.listen(document, goog.events.EventType.SELECTSTART, function(event) {
  event.preventDefault(); // Kill the i-beam cursor
  return false
});

// The loop
lime.scheduleManager.schedule(function(){ 
  var puppet = client.actors.puppet,
      desert = client.maps.desert
      i = puppet.actions.length
  
  while (i--) {
    switch (puppet.actions[i]) {
      case 'moveRight':
        if (puppet.x >= window.innerWidth / 2) {
          desert.layer.setPosition(client.maps.desert.x -= 5, client.maps.desert.y)
        } else {
          puppet.layer.setPosition(puppet.x += 5, puppet.y)
        }
        break
      case 'moveDown':
        if (puppet.y >= window.innerHeight / 2) {
          desert.layer.setPosition(client.maps.desert.x, client.maps.desert.y -= 5)
        } else {
          puppet.layer.setPosition(puppet.x, puppet.y += 5)
        }
        break
      case 'moveLeft':
        if (puppet.x <= window.innerWidth / 2) {
          desert.layer.setPosition(client.maps.desert.x += 5, client.maps.desert.y)
        } else {
          puppet.layer.setPosition(puppet.x -= 5, puppet.y)
        }
        break
      case 'moveUp':
        if (puppet.y <= window.innerHeight / 2) {
          desert.layer.setPosition(client.maps.desert.x, client.maps.desert.y += 5)
        } else {
          puppet.layer.setPosition(puppet.x, puppet.y -= 5)
        }
        break
    }
  }
},this); 