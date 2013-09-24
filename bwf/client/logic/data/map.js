goog.provide('Map'); //provides this file to client.js

var Map = new Class({ // Defines map-rendering logic
  constructor: function() {
    var _this = this
    this.x = 0
    this.y = 0
    this.layer = new lime.Layer()
    this.background = new lime.Layer()
    this.foreground = new lime.Layer()
    
    var tmx = new lime.parser.TMX('assets/display/maps/desert/desert.tmx')
    
    this.width = tmx.width * tmx.tilewidth
    this.height = tmx.height * tmx.tileheight
    
    this.layer.appendChild(this.background)
    this.layer.appendChild(this.foreground)
    client.scene.appendChild(this.layer)
    
    // Render objects
    _.each(tmx.objects, function(object) {
      switch (object.name) {
        case 'background':
          _this.background.appendChild(new lime.Sprite().setFill(new lime.fill.Image(tmx.filename.substring(0, tmx.filename.lastIndexOf("/") + 1) + object.properties.image).setSize(32, 32)).setSize(object.width * 2, object.height * 2))
          break
      }
    })
    
    // Render tiles
    for (var j = 0; j < tmx.layers.length; j++) {
      for (var i = 0; i < tmx.layers[j].tiles.length; i++) {
        tile = tmx.layers[j].tiles[i];
        sprite = new lime.Sprite().setPosition(tile.px, tile.py);
        sprite.setFill(tile.tile.frame);
        this.foreground.appendChild(sprite);
      }
    }
    
    this.draw()
  },
  
  draw: _.debounce(function() {
    var _this = this,
        _thisX = _this.x,
        _thisY = _this.y
    
    var i = this.foreground.children_.length
    while (i--) {
      var node = this.foreground.children_[i]
        , nodeOffsetX = (node.position_.x + _thisX + node.size_.width / 2)
        , nodeOffsetY = (node.position_.y + _thisY + node.size_.height / 2)
        , renderPadding = client.renderPadding
      
      if (nodeOffsetX <= window.innerWidth + renderPadding && nodeOffsetX > -renderPadding && nodeOffsetY <= window.innerHeight + renderPadding && nodeOffsetY > -renderPadding) {
        if (node.hidden_ == true) node.setHidden(false)
      } else if (node.hidden_ == undefined || node.hidden_ == false) {
        node.setHidden(true)
      }
    }
  }, 100, { maxWait: 100 })
});