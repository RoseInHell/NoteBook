const bar = require('./bar.js')

console.log(bar.name)

setTimeout(() => {
  console.log(bar.name) // coderwhy
  console.log(bar.info.name) // 2222
},4000)