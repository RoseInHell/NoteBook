/* 
  1.创建一个新对象
  2.链接到原型 obj.__proto__ = constructor.prototype
  3.绑定this. apply
  4.返回新对象(如果函数有返回对象则返回该对象)
*/

function objectFactory() {
  var obj = new Object();
  var Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);

  // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
  return typeof ret === 'object' ? ret || obj : obj;
}