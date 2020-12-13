const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 拿到body中的数据
      req.setEncoding('utf-8'); //二进制使用 binary
      req.on('data', (data) => {
        const { username, password } = JSON.parse(data)
        console.log(username, password);
      })
    }
    res.end('欢迎回来~')
  }
})

server.listen(8888, '0.0.0.0', () => {
  console.log('server run successfully~')
})