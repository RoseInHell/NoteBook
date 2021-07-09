/* 
  1.内存泄漏：程序中已动态分配的堆内存由于某种原因未释放或者无法释放
    根据JS的垃圾回收机制，当内存中引用的次数为0的时候内存才会被回收
    全局执行上下文中的对线被标记为不再使用才会被释放
*/

/* 
  场景一：全局变量过多：通常是变量未被定义或者胡乱引用了全局变量
*/

function a() {
  b = 10;
}

a();
b++

setTimeout(() => {
  console.log(b)
}, 1000);

/* 
  场景二：闭包：未手动解决必报遗留的内存引用。定义了闭包就要消除闭包带来的副作用
*/
function closuer() {
  const b = 0;
  return (c) => b+c
}

const render = closuer();
render();

render = null; // 手动设置未null 

/*
  场景三：事件监听未被移除
*/
function adEvent() {
  const node = document.getElementById('wrap');
  node.addEventListener('touchmove', () => {
    console.log('In Move');
  })
}

/* 
  场景四：缓存 不管是啥缓存，都需要设置好过期时间
*/

// 那你能不能说说你是如何排查内存泄露的？
