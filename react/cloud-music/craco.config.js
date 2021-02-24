const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "component": resolve("src/components")
    },
    babel: {
      plugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        ['@babel/plugin-proposal-decorators', { legacy: true }]
      ]
    },
    mode: "development",
    devtool: false
  },
  
}