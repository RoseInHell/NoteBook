/* 
  执行终端命令相关的代码
*/
const { rejects } = require('assert');
const { exec, spawn } = require('child_process');
const { resolve } = require('path');
// exec 是对 spawn的封装

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    })
  })

}

module.exports = {
  commandSpawn
}