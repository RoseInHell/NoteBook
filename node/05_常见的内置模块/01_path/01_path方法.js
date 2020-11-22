const path = require('path');

// 1.获取路径的信息
const filepath = '/User/why/abc.tex';

// 获取完整路径
console.log(path.dirname(filepath));

// 获取文件名
console.log(path.basename(filepath));

// 获取后缀名
console.log(path.extname(filepath));

// 2.resolve 路径拼接
// resolve会判断拼接的路径字符串中，是否有以 / 或 ./ 或 ../ 开头的路径
const basepath = '/working';

const totalpath = path.resolve(basepath, filepath);

// 3.join路径拼接

const bpath = '/User/why';
const fpath = 'abc.txt';

const filpath = path.join(bpath, fpath);

console.log(filpath);

