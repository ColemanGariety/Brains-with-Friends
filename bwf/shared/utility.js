goog.provide('shared.utilities');

// Classes
var Class = (function () {
  function Class(definition) {
    function Class() {}
    var $extend = hasOwnProperty.call(definition, "extend");
    var $;
    if (hasOwnProperty.call(definition, "constructor")) {
      Class = constructor(definition.constructor);
    }
    if (
      $extend &&
      hasOwnProperty.call($ = definition.extend, "definition") &&
      hasOwnProperty.call($ = $.definition, "statics")
    ) {
      extend.call(Class, $.statics);
    }
    if (hasOwnProperty.call(definition, "statics")) {
      extend.call(Class, definition.statics);
    }
    ($extend ?
      extend.call(Class.prototype = create(definition.extend.prototype), definition) :
      
      Class.prototype = create(definition)
    )
      .constructor = Class
    ;
    Class.definition = definition;
    return Class;
  }
  function constructor(constructor) {
    function Class() {
      return constructor.apply(this, arguments);
    }
    return Class;
  }
  function extend(__proto__) {
    for (var key in __proto__) {
      if (hasOwnProperty.call(__proto__, key)) {
        this[key] = __proto__[key];
      }
    }
    return this;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var create = Object.create || (function () {
    function Object() {}
    return function (__proto__) {
      Object.prototype = __proto__;
      return new Object;
    };
  })();
  if (!({toString:null}).propertyIsEnumerable("toString")) {
    extend = (function ($extend) {
      function extend(__proto__) {
        for (var i = length, key; i--;) {
          if (hasOwnProperty.call(__proto__, key = split[i])) {
             this[key] = __proto__[key];
          }
        }
        return $extend.call(this, __proto__);
      }
      var split = "hasOwnProperty.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.valueOf".split(".");
      var length = split.length;
      return extend;
    })(extend);
  }
  Class.prototype = Function.prototype;
  return Class;
})();

// Doubly-linked-lists
var Dll = new Class({
  _head: null,
  _tail: null,
  _length: 0,
  
  // constructor: Dll, // Restores the constructor, but breaks our class implementation
  
  add: function (data) {
        var node = { 
                data: data, 
                next: null,
                prev: null
            };
        if (this._length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this._length++;
    
    },
    
    get: function(index) {
        if (index > -1 && index < this._length){
            var current = this._head,
                i = 0;
            while(i++ < index){
                current = current.next;            
            }
            return current.data;
        } else {
            return null;
        }
    },
    
    remove: function(index) {
        if (index > -1 && index < this._length){
            var current = this._head,
                i = 0;
            if (index === 0){
                this._head = current.next;
                if (!this._head){
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            } else if (index === this._length -1){
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
                while(i++ < index){
                    current = current.next;            
                }
                current.prev.next = current.next;
            }
            this._length--;
            return current.data;            
        
        } else {
            return null;
        }
               
    
    },
    
    size: function() {
        return this._length;
    },
    
    toArray: function() {
        var result = [],
            current = this._head;
        
        while(current){
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    },
    
    toString: function() {
        return this.toArray().toString();
    }
});