goog.provide('Map');															//provides this file to client.js
								//requires lime's parser for TMX files is now in client.js

var Map = new Class ({														//base class for importing the game map
        constructor: function () {
				var tmx = new lime.parser.TMX('assets/display/maps/testmap.tmx'),
						layer = new lime.Layer();					//digitalfruit lime creator tmx example

						client.scene.appendChild(layer);

					for(var j = 0; j < tmx.layers.length; j++)
					{
						for(var i = 0; i < tmx.layers[j].tiles.length; i++)
						{
							tile = tmx.layers[j].tiles[i];
							sprite = new lime.Sprite().setPosition(tile.px,tile.py);
							sprite.setFill(tile.tile.frame);
							layer.appendChild(sprite);
		}
	}
        },
    })
;

//initializing 
