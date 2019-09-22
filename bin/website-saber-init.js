#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const template = require(`${__dirname}/../template`)

program
  .usage('<template-name> [project-name]')
  program.parse(process.argv)

if(program.args.length === 0) return program.help();

const templateName = program.args[0];
const projectName = program.args[1];

if (!template[templateName]) {
  return console.log(chalk.red('\n Template does not exit! \n '))
}

if (!projectName) {
  return console.log(chalk.red('\n Project should not be empty! \n '))
}

const url = template[templateName];

console.log(chalk.white('\n Start generating... \n'))
const spinner = ora("Downloading... \n");
spinner.start();

download(url, projectName, {clone: true}, err => {
  if(err) {
    spinner.fail();
    return console.log(chalk.red(`Generation failed. ${err}`))
  }

  spinner.succeed();

  console.log(chalk.green('\n Generation completed!'))
  console.log('\n To get started')
  console.log(`\n    cd ${projectName} \n`)

})