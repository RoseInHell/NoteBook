const http = require('http');

const server = http.createServer((req, res) => {

});

server.listen(8888, '0.0.0.0', () => {
  console.log('server is running~');
})