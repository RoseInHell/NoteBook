const http = require('http');

const server = http.createServer((req, res) => {
  // 设置响应的 header
  // 设置方式一：
  res.setHeader("Content-Type", "text/plain;charset=utf8");
  // 设置方式二：
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf8"
  })

  // 响应结果
  res.write("响应结果一");
  res.end('hello world');
});

server.listen(9999, '0.0.0.0', () => {

})