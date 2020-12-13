const fs = require('fs');

// Stream的写法
const reader = fs.createReadStream('./foo.txt');
const writer = fs.createWriteStream('./foz.txt');

reader.pipe(writer);
writer.close();