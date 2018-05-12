const calc = {
  add: function(a, b, cb) {
    cb(a + b);
  },
  subtract: function(a, b, cb) {
    cb(a - b);
  },
  multiply: function(a, b, cb) {
    cb(a * b);
  },
  divide: function(a, b, cb) {
    cb(a / b);
  },
  operate: function(operation, a, b, cb) {
    this[operation](a, b, cb);
  }
}

module.exports = calc;
