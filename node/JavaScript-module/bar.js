/*   
  字符串是赋值引用，
  1处 coderwhy赋值给 name，
  3处通俗点来理解也是把字符串coderwhy给对象里的name
  所以2处无论怎么改 name 的值在对象在 
  module.exports中的name的值依旧是coderwhy
  除非 4 处的修改
*/

let name = 'coderwhy' // 1

setTimeout(() => {
  name = '11111' // 2
}, 1000);

setTimeout(() => {
  module.exports.name = '33333' // 4
},2000)


/*
  对象是引用类型的
*/
const info = {
  name: 'li'
}

setTimeout(() => {
  info.name = '2222'
}, 3000);


module.exports = {
  name: name, // 3   name: coderwhy
  info: info
}
