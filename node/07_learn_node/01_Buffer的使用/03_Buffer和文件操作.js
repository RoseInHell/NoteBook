const fs = require('fs');

const sharp = require('sharp');

// 读取文本文件
// fs.readFile("./foo.txt", (err, data) => {
  
//   console.log(data.toString());
// })

// 读取图片文件 对图片裁剪等操作需要 npm install sharp
// fs.readFile("../14-弹出表单.jpg", (err, data) => {
//   console.log(data);
  
//   fs.writeFile("./bar.jpg", data, err => {
//     console.log(err)
//   });
// })

// sharp库的使用
sharp('./bar.jpg')
  .resize(100, 100)
  .toFile('./biz.jpg');

sharp('./foo.txt')
  .resize(300, 300)
  .toBuffer()
  .then(data => {
    fs.writeFile('./bax.jpg', data, err => console.log(err));
  })