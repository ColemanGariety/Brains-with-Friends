goog.provide('Map'); //provides this file to client.js

var Map = new Class({ // Defines map-rendering logic
  constructor: function () {
    this.x = 0
    this.y = 0
    this.layer = new lime.Layer()
    
    var tmx = new lime.parser.TMX('assets/display/maps/testmap2.tmx')

    client.scene.appendChild(this.layer);

    for (var j = 0; j < tmx.layers.length; j++) {
      for (var i = 0; i < tmx.layers[j].tiles.length; i++) {
        tile = tmx.layers[j].tiles[i];
        sprite = new lime.Sprite().setPosition(tile.px, tile.py);
        sprite.setFill(tile.tile.frame);
        this.layer.appendChild(sprite);
      }
    }
  }
});