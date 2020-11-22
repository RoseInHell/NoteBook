const EventEmitter = require("events");

// 1.创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on  addListener
// once 只监听一次 
// prependListener多个监听在最前面
// prependOnceListener 多个监听在最前面但只执行一次
emitter.on('click', (args) => {
  console.log("监听1到click事件", args);
})

const listener2 = (args) => {
  console.log(args);
}
emitter.on('click', listener2)

// 3.发出一个事件
setTimeout(() => {
  emitter.emit("click", "coderwhy", "kobe");
  emitter.off("click", listener2);
  emitter.emit("click", "kobe");
}, 2000)