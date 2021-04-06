const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

const config = require('./webpack.config');

const compiler = webpack(config);

const middleware = webpackDevMiddleware(compiler)

app.use(middleware)

app.listen(3000, () => {
  console.log("服务已经开启在3000端口上~");
})