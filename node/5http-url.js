var http = require('http');

var server = http.createServer();

server.on('request', (request, response) => {
  console.log('收到客户端的请求了，请求的路径是' + request.url)
  var url = request.url;
  if (url === '/') {
    response.end('index page')
  } else if (url === '/login') {
    response.end('login page')
  } else {
    response.end('404 Not Found')
  }
})

server.listen(5000, () => {
  console.log('服务器启动成功，可通过 http://127.0.0.1:5000/ 来进行访问')
})