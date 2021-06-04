// 声明一个变量a,同时指定它的类型为number
let a:number;
// a 的类型设置为number, 在以后的使用过程中a的值只能是数字

let b: string = 'hello';

let c: boolean = true;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let d = false;

function sum(a: number, b: number): number {
  return a + b;
}

let res = sum(123, 456)