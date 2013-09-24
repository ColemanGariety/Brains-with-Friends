goog.provide('Map'); //provides this file to client.js

var Map = new Class({ // Defines map-rendering logic
  constructor: function() {
    this.x = 0
    this.y = 0
    this.layer = new lime.Layer()
    
    var tmx = new lime.parser.TMX('assets/display/maps/desert.tmx')
    
    this.width = tmx.width * tmx.tilewidth
    this.height = tmx.height * tmx.tileheight
    
    client.scene.appendChild(this.layer);

    for (var j = 0; j < tmx.layers.length; j++) {
      for (var i = 0; i < tmx.layers[j].tiles.length; i++) {
        tile = tmx.layers[j].tiles[i];
        sprite = new lime.Sprite().setPosition(tile.px, tile.py);
        sprite.setFill(tile.tile.frame);
        if (sprite.position_.x >= window.innerWidth || sprite.position_.x < 0 || sprite.position_.y >= window.innerHeight || sprite.position_.y < 0) sprite.setHidden(true);
        this.layer.appendChild(sprite);
      }
    }
  },
  
  draw: function() {
    _.each(this.layer.children_, function(node) {
      console.log(node.positionDrawn_.x)
      if (node.positionDrawn_.x <= window.innerWidth && node.positionDrawn_.x > 0 && node.positionDrawn_.y <= window.innerHeight && node.positionDrawn_.y > 0) node.setHidden(false)
    })
  }
});