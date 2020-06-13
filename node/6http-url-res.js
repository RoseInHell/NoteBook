var http = require('http');

var server = http.createServer();

server.on('request', (request, response) => {
    console.log('收到请求了，请求路径是： ' + request.url)
    var products = [
        {
            name: 'iphone x',
            price: 8888
        },
        {
            name: 'apple x',
            price: 7777
        },
        {
            name: 'orange x',
            price: 666
        },
    ]

    // 响应内容只能是二进制数据或者字符串

    response.end(JSON.stringify(products))
    
})


server.listen(3000, () => {
    console.log('服务器启动成功，可通过 http://127.0.0.1:3000/ 来访问')
})