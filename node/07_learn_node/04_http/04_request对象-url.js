const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  
  // 最基本的使用方式 
  // if (req.url === '/login') {
  //   res.end('欢迎回来~');
  // } else if (req.url === '/users') {
  //   res.end('用户列表');
  // } else {
  //   res.end('404')
  // }
  // res.end('hello server');

  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    const { username, password } = qs.parse(query);
    res.end('请求结果');
  }
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功');
})