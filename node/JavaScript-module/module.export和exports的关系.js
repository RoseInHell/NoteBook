// exports 和 module.exports 之间的关系
module.exports = exports;
module.exports = {

}
// 此时module.exports 与 exports 无关

// Node 中实现 CommonJS 的本质就是对象的引用赋值(浅拷贝)
