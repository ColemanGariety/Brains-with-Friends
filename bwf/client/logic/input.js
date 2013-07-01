goog.provide('client.input');

// Mousedown
client.input.mousedown = function(event) {
  switch (event.event_.which) {
    case 1: // Left-click
      break;
    case 3: // Right-click
      break;
  }
  
  return true;
}
goog.events.listen(document, goog.events.EventType.MOUSEDOWN, client.input.mousedown);

// Drag
client.input.drag = function(event) {
  // Will be needed for inventory item re-arranging
  return true;
}
goog.events.listen(document, goog.events.EventType.DRAG, client.input.drag);

// Mouse-move
client.input.mousemove = function(event) {
  // Update the game's knowledge of the mouse cursor
  return client.mouse = {
    x: event.clientX,
    y: event.clientY
  }
}
goog.events.listen(document, goog.events.EventType.MOUSEMOVE, client.input.mousemove);

// Right-click
client.input.contextmenu = function(event) {
  event.preventDefault(); // Kill the context menu
  return false;
}
goog.events.listen(document, goog.events.EventType.CONTEXTMENU, client.input.contextmenu);

// Text selection
client.input.selectstart = function(event) {
  event.preventDefault(); // Kill the i-beam cursor
  return false;
}
goog.events.listen(document, goog.events.EventType.SELECTSTART, client.input.selectstart);