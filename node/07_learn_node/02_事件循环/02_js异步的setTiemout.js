
const message = 'hello world';

console.log(message);

function sum (num1, num2) {
  return num1 + num2
}

function foo() {
  const result = sum(20, 30);
  console.log(result);
}

setTimeout(() => {
  console.log('setTiemout');
}, 1000);
// setTimeout中有两个函数  一个是setTiemout 另一个是回调函数

foo();