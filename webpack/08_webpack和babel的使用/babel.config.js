module.exports = {
  presets: [
    ["@babel/preset-env", {
      // false：不用任何的 polyfill 相关的代码
      // usage：代码中需要哪些 polyfill, 就引用相关的api 
      useBuiltIns: "entry",
      corejs: 3
    }],
    ["@babel/preset-react"]
  ]
}