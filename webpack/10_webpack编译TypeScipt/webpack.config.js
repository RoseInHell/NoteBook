const path = require('path');
const { CleanWebpackPlugin } = require('../11_webpack中ESLint的使用/node_modules/clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   presets: [
            //     ["@babel/preset-env", {
            //       target: ["chrome 88"]
            //     }]
            //   ]
            // }
          }
        ]
      },
      // ts-loader编译typescipt
      // {
      //   test: /\.ts$/,
      //   use: "ts-loader"
      // }
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "babel-loader",
        
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "coder why",
      template: "./index.html"
    })
  ]

}