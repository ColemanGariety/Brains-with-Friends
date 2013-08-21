goog.provide('Actor');
goog.require('Input');

var Actor = new Class({
  constructor: function() {
var xa = 100;
var ya = 100;
var target = function() {
	//passing the variables from line 63 of input.js into these params is legal?
//	Math.atan2( Clienty, Clientx );
//	console.log(Math.atan2);
//legs
var legs = new lime.Sprite().setSize(40,36).setFill('/legs/legAni2.png').setPosition(xa, ya); 
layer.appendChild(legs);
//torso
/*
var legs = new lime.Sprite().setSize(40,36).setFill('/Torso/Torso.png').setPosition(xa, ya).RotateTo(target);
layer.appendChild(legs);
  }
}
});
*/