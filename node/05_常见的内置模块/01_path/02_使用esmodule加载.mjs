import path from 'path'
// 低版本node无法使用

const basepath = '../user/why';
const filename = 'abc.txt';

const filepath = path.resolve(basepath, filename);
console.log(filepath)
