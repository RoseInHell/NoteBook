Function.prototype.call2 = function(context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for (var i=1; i<arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }

  var res = eval('context.fn(' + args + ')')

  delete context.fn;
  return res;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
