const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  devtool: 'inline-source-map',
  // 专门为webpack-dev-server
  devServer: {
    hot: true
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}