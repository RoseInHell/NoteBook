var http = require('http');

var server = http.createServer();

server.on('request', (request, response) => {
  console.log('收到客户端的请求了，请求路径是：' + request.url );
  response.write('nodejs');
  response.write(' useful');

  response.end()
});

server.listen(4000, () => {
  console.log('服务器启动成功，可通过 http://127.0.0.1:4000/ 来进行访问')
})