#!/usr/bin/env node

const program = require('commander'); // 编写指令和处理命令行

program
  .version(require('../package.json').version)
  .usage('<command> [options]')
  .command('add', 'add a new template')
  .command('delete', 'delete a template')
  .command('list', 'list all the template')
  .command('init', 'generate a new project from a template')

program.parse(process.argv);