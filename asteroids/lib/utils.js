(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function (childClass, parentClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };

  Asteroids.Util.randomVec = function(length) {
    return [Math.random(), Math.random()];
  };

  Asteroids.Util.distance = function(object1, object2) {
    var x1 = object1.pos[0];
    var y1 = object1.pos[1];
    var x2 = object2.pos[0];
    var y2 = object2.pos[1];
    return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
  };
})();
