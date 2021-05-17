const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  devtool: 'inline-source-map',
  // 专门为webpack-dev-server
  // devserver为开发过程中，开启一个本地服务
  devServer: {
    hot: true,
    publicPath: "",
    // contentBase: "", //打包后html依赖的静态资源的路径 最好填写绝对路径
    compress: false, // 本地开发是否 开启 content-encoding:gzip 模式
    proxy: {
      // "/api": "http://localhost:8888",
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false
      }
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
    // 在打包之后的静态资源前面进行一个路径的拼接
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}