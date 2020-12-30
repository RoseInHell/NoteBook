const app = require('../src/app/index');
const config = require('../src/app/config');


app.listen(config.APP_PORT, () => {
  console.log(`服务器在${process.env.APP_PORT}端口启动成功~`);
})