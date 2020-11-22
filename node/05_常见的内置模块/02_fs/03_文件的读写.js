const fs = require('fs');

// 1.文件写入
// const content = ' world';

// fs.writeFile('./abc.txt', content, {flag: 'a'}, err => {
//   console.log(err)
// })


// 2.文件读取
fs.readFile('./abc.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(data)
})