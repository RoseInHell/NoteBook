// 能在实例的 原型对象链 
// 中找到该构造函数的prototype属性所指向的 
// 原型对象，就返回true
// Obj 被检测对象 
// Constructor 构造函数
function instance_of(Obj, Constructor) {
  let implicitPrototype = Obj.__proto__; // 隐式原型
  let displayPrototype = Constructor.prototype; // 显示原型
  
  while(true) {
    if (implicitPrototype === null) {
      return false;
    } else if (implicitPrototype === displayPrototype) {
      return true;
    }

    implicitPrototype = implicitPrototype.__proto__;
  }
}

console.log(instance_of([], Array)) // true
console.log(instance_of([], String)) // false