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
  
  draw: _.debounce(function() {
    var _this = this,
        _thisX = _this.x,
        _thisY = _this.y
    
    var i = this.layer.children_.length
    while (i--) {
      var node = this.layer.children_[i]
        , nodeOffsetX = (node.position_.x + _thisX + node.size_.width / 2)
        , nodeOffsetY = (node.position_.y + _thisY + node.size_.height / 2)
      
      if (nodeOffsetX <= window.innerWidth + 64 && nodeOffsetX > -64 && nodeOffsetY <= window.innerHeight + 64 && nodeOffsetY > -64) {
        if (node.hidden_ == true) node.setHidden(false)
      } else if (node.hidden_ == undefined || node.hidden_ == false) {
        node.setHidden(true)
      }
    };
    
    _.each(this.layer.children_, function(node) {
    })
  }, 50, { maxWait: 50 })
});