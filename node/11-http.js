var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
    // 服务端默认发送的数据，是 utf8 编码的内容
    // 但是浏览器不知道你 utf8 编码的内容
    // 浏览器在不知道服务器响应内容的编码情况下，会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是 gbk
    // 解决办法就是正确告诉浏览器我给你发送的内容是什么编码
    // 在 http 协议中，Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('hello 世界')
    var url = req.url

    if (url === '/plain') {
        // text/plain 普通文本
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('hello 世界')
    } else if (url === '/html') {
        // 如果发送的是 html 格式的字符串，侧也要告诉浏览器
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<p>hello html <a href="">点我</a></p>')
    }
    
})

server.listen(3000, function() {
    console.log('Server is running...')
})