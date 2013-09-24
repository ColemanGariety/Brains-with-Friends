goog.provide('Map'); //provides this file to client.js

var Map = new Class({ // Defines map-rendering logic
  constructor: function() {
    var _this = this
    
    // Properties
    this.x = 0
    this.y = 0
    this.layer = new lime.Layer()
    this.background = new lime.Layer()
    this.foreground = new lime.Layer()
    
    // Parse TMX
    var tmx = new lime.parser.TMX('assets/display/maps/desert/desert.tmx')
    this.width = tmx.width * tmx.tilewidth
    this.height = tmx.height * tmx.tileheight
    
    // Render & draw background
    _.each(tmx.objects, function(object) {
      switch (object.name) {
        case 'background':
          var background = new lime.fill.Image(tmx.filename.trimLastPathSegment() + object.properties.image).setSize(32, 32),
              sprite = new lime.Sprite().setFill(background).setSize(object.width * 2, object.height * 2)
          
          _this.background.appendChild(sprite)
          break
      }
    })
    
    // Render foreground
    for (var j = 0; j < tmx.layers.length; j++) {
      for (var i = 0; i < tmx.layers[j].tiles.length; i++) {
        var tile = tmx.layers[j].tiles[i]
          , sprite = new lime.Sprite().setPosition(tile.px, tile.py)
        
        sprite.setFill(tile.tile.frame)
        
        this.foreground.appendChild(sprite)
      }
    }
    
    // Draw foreground
    this.draw()
    this.layer.appendChild(this.background)
    this.layer.appendChild(this.foreground)
    client.scene.appendChild(this.layer)
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
      } else if (!node.hidden_) {
        node.setHidden(true)
      }
    }
  }, client.renderDebounce, { maxWait: client.renderDebounce })
});