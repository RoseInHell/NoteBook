var http = require('http');

var server = http.createServer();

server.on('request', () => {
  console.log('收到客户端的请求')
});

server.listen(3000, () => {
  console.log('服务器启动成功，可通过 http://127.0.0.1:3000/ 访问')
})