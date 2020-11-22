#!/usr/bin/env node
// commander 需要 npm install commander
const program = require('commander');
const { createCommands } = require('./lib/core/create');

const { helpOptions }  = require('./lib/core/help')

// 定义显示模块的版本号
program.version(require('./package.json').version);

// 帮助和可选信息
helpOptions()

// 创建其他指令
createCommands();

// 传过来的参数交给 parse 解析
program.parse(process.argv);