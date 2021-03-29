module.exports = {
  presets: [
    ["@babel/preset-env", {
      // false：不用任何的 polyfill 相关的代码
      // usage：代码中需要哪些 polyfill, 就引用相关的api,
      // entry: 手动在入口文件中导入 core-js/regenerator-runtime，根据目标浏览器引入所有对应的polyfill
      useBuiltIns: "usage",
      corejs: 3
    }],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"]
  ]
}