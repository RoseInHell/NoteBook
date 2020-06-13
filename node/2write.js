var fs = require('fs');

fs.writeFile('./write.txt', 'nodejs的写能力', error => {
  console.log('write successfully')
})

