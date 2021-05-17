const ReactRefreshWebpackPlugin = require('ReactRefreshWebpackPlugin')
const isProduction = false;

module.exports = {
  mode: "development",
  // 专门为webpack-dev-server
  devServer: {
    hot: true,
    hotOnly: true,
    compress: true
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
}