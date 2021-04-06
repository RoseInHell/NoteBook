const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader"
        ]        
      },
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
          },
          {
            loader: "eslint-loader"
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
        
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "coder why",
      template: "./index.html"
    }),
    new VueLoaderPlugin()
  ]

}