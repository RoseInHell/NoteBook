const { promisify } = require('util');

const download = promisify(require('download-git-repo'));
const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal')

// callpack -> promisify(函数) -> Promise -> async await
const createProjectAction = async (project) => {
  console.log('why helps you create project');

  // 1.clone项目 需要依赖 npm install download-git-repo
  await download(vueRepo, project, {clone: true});

  // 2.执行 npm install
  // windows系统中需要判断使用npm.cmd
  // linux 和 Mac 中使用 npm
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await commandSpawn(command, ['install'], {cwd: `./${project}`});

  // 3.运行 npm run serve
  await commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`});

  // 4.打开浏览器s
}

module.exports = {
  createProjectAction
}