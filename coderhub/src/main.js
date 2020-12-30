const app = require('./app/index')
require('./app/database')

const config = require('./app/config')

// 此处的config也可用 process.env代替
// 因为 config 中 process.env 有了APP_PORT属性
app.listen(config.APP_PORT, () => {
  console.log(`服务器在${process.env.APP_PORT}端口启动成功~`);
})