goog.provide('Class')

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