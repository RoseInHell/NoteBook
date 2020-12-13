const fs = require('fs');

// 流的方式读取
const reader = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 6,
  highWaterMark: 2
});

// 数据读取的过程
reader.on("data", (data) => {
  console.log(data);
  
  reader.pause();

  setTimeout(() => {
    reader.resume();
  }, 1000);
});

reader.on('open', () => {
  console.log('文件被打开了');
})

reader.on('close,', () => {
  console.log('文件被关闭');
})

