const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebPackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name].[hash:6][ext]"
  },
  module: {
    rules: [
      { 
        // 规则使用正则表达式
        test: /\.css$/, //匹配资源
        use: [
          // 注意: 编写顺序（从下往上，从后往前）
          { loader: "style-loader"},
          { 
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("postcss-preset-env")
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { 
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
           },
          "postcss-loader",
          { loader: "less-loader" }
        ]
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name].[hash:6].[ext]'
      //         // outputPath: "img"
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        // type: "asset/resource", // file-loader的效果
        // type: "asset/inline", // url-loader的效果
        type: "asset",
        generator: {
          filename: "img/[name].[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024 // 100字节
          }
        }
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]"
        }
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'coderwhy webpack',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    }),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              "**/index.html",
              "**/.DS_Store",
              "**/abc.txt"
            ]
          }
        }
      ]
    })
  ]
}