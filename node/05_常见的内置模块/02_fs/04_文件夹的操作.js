const fs = require('fs');
const path = require('path')

// 1.创建文件夹
const dirname = './why';
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err);
  })
}

// 2.读取文件夹中的所有文件
// fs.readdir(dirname, (err, files) => {
//   console.log(files);
// })

function getFile(dirname) {
  fs.readdir(dirname, {withFileTypes: true}, (err, files) => {
    for (let file of files) {
      if (file.isDirectory()) {
        const filepath = path.resolve(dirname, file.name)
        getFile(filepath)
      } else {
        console.log(file.names)
      }
    }
  })
}
getFile(dirname)

// 3.重命名
fs.rename('./why/', './kobe', err => {
  console.log(err)
})