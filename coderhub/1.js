function foo() {
  console.log(this.a)
}

function doFoo(fn) {
  // var a = 3
  fn()
}

var obj = {
  a:2,
  foo: foo
}

var a = 'window'
var aaa = obj.foo
// doFoo(obj.foo)
foo()
obj.foo()
aaa()