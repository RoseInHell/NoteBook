const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 指定入口文件
  entry: './src/index.ts',
  mode: 'development',

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件名
    filename: 'bundle.js',
    // 配置打包的环境 告诉webpack不适用箭头
    environment: {
      arrowFunction: false
    }
  },
  
  // 指定webpack打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": '11'
                    },
                    // 指定corejs的版本
                    "corejs": 3,
                    // 使用corejs的方式 "usage" 表示按需加载
                    "useBuiltIns": 'usage'
                  }

                ]
              ]
            }
          },
          'ts-loader',
        ],
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },
  
  // 配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}