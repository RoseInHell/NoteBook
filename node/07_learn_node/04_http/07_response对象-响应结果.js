const http = require('http');

const  server = http.createServer((req, res) => {

  // 设置状态码
  // 方式一：直接给属性赋值
  res.statusCode = 401;

  // 方式二：和Head一起设置
  res.writeHead(503);
  
  // 响应结果
  res.write('响应统一结果');
  res.end('hello world');
});

server.listen(9999, '0.0.0.0', () => {
  console.log('server is running~');
})