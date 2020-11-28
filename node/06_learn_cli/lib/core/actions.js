const { promisify } = require('util');
const path = require('path');

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal');
const { compile, writeToFile } = require('../utils/utils');

// callpack -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
  console.log('why helps you create project');

  // 1.clone项目 需要依赖 npm install download-git-repo
  await download(vueRepo, project, {clone: true});
  console.log(`download ${project} successfully~`);

  // 2.执行 npm install
  // windows系统中需要判断使用npm.cmd
  // linux 和 Mac 中使用 npm
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await commandSpawn(command, ['install'], {cwd: `./${project}`});
  console.log('依赖已经装好辣~')

  // 3.运行 npm run serve
  commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`});

  // 4.打开浏览器 需要依赖第三方库 npm install open
  open("http://localhost:8080/");
  console.log('打开浏览器 开始跑项目~')
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  /* 
    1.有对应的ejs模块
    2.编译ejs模板result 需要依赖 npm install ejs
    3.将result写入到.vue文件中
    4.放到对应的文件夹中 
  */
  // 1.有对应的ejs模块
  // 2.编译ejs模板result 需要依赖 npm install ejs
  const result = await compile("vue-component.vue.ejs", {name, lowername: name.toLowerCase()})
  
  // 3.将result写入到.vue文件中
  const targetPath = path.resolve(dest, `${name}.vue`);
  writeToFile(targetPath, result);
}

module.exports = {
  createProjectAction,
  addComponentAction
}