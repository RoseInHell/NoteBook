const path = require('path');


module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
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
      }
    ]
  }

}