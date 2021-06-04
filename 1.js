Function.prototype.bind2 = function(context) {
  var self = this;

  var args = Array.prototype.slice(arguments,1);

  var fNOP = function() {};

  var fbound = function() {
    var bindArgs = Array.prototype.slice(arguments);

    return self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = self.prototype
  fbound.prototype = new fNOP();
  return fbound;
}
