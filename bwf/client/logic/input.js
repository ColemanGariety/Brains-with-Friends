goog.provide('Input');

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

//WASD
Input.keydown = function(event) {
  switch (event.event_.which) {
    case 83: x -= 5px
    break;
  }

  return true;
}
goog.events.listen(document, goog.events.EventType.KEYDOWN, Input.keydown);

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