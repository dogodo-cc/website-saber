#!/usr/bin/env node

const program = require('commander'); // 编写指令和处理命令行

program
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command('init', '创建一个基于 gulp 自动化构建的前端项目')

program.parse(process.argv);