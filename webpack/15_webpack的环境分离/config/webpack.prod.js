const { CleanWebpackPlugin } = require('CleanWebpackPlugin')

const isProduction = true;

module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({})
  ]
}