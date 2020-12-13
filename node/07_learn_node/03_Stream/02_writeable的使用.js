const fs = require('fs');

// Stream的写入方式
const writer = fs.createWriteStream('./bar.txt', {
  flags: 'a',
  start: 4,
})

writer.write("你好阿", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('写入成功');
})
writer.write('123', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('第二次写入');
})

// writer.close();
// end 做了两件事情， 1.调用write() 2.调用close() 关闭流
writer.end();

writer.on('close', () => {
  console.log('文件被关闭')
})