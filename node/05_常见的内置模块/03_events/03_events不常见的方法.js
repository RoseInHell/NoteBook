const EventEmitter = require('event');

const emitter = new EventEmitter();

emitter.on('click', args => {
  console.log(args)
})

// 移除事件，传参移除指定的
emitter.removeAllListeners("click");