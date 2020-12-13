const http = require('http');

// 1.创建server的两种方式
const server1 = http.createServer((req, res) => {
  res.end('Server1');
})

server1.listen(8000, () => {
  console.log('server1启动成功');
})

// const server2 = http.createServer((req, res) => {
//   res.end('Server2');
// })

// server2.listen(9000, () => {
//   console.log('server2启动成功');
// })

const server3 = new http.Server((res, req) => {
  res.end('server3');
});

server3.listen(9500, () => {
  console.log('server3启动成功');
})


// 2.监听方法的
server3.listen(() => {
  console.log(server3.address().port);
})