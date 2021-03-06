const name = 'why';
const age = 18;
const sayHello = function(name) {
  console.log(123)
}

// 导出方式三种
// 1.方式一：
// export const name = 'why';
// export const age = 18;
// export const sayHello = function(name) {
//   console.log(123)
// }

// 2.方式二： {}中统一导出
// {}是大括号，但是不是一个对象
// {放置要导出的变量的引用列表}
export {
  name,
  age,
  sayHello
}

// 3.方式三： {}导出时，可以给变量起别名
export {
  name as fName,
  age as fAge,
  sayHello as fsayHello
}