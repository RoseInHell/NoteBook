const path = require("path");
const merge = require('webpack-merge');
const commonConfig = {
    
  // 绝对路径
  context: path.resolve(__dirname, "../"),
  // entry写上相对路径时，并不是相对于文件所在的路径，而是相对于context配置的路径
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../build"),
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
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "less-loader",
        ],
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
            loader: "eslint-loader",
          },
        ],
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
        use: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "coder why",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
}
const proConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

module.exports = function (env) {
  console.log("=-----", env);
  const isProduction = env.production;
  return isProduction ? merge(commonConfig, proConfig) : merge(commonConfig, devConfig);
};
