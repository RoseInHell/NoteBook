var fs = require('fs')

fs.readFile('./hello.txt', (error, data) => {
  console.log(data.toString())

})

