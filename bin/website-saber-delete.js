#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const template = require(`${__dirname}/../template`);

const question = [
  {
    name: "name",
    message: "请输入要删除的模板名称",
    validate (val) {
      if (val === '') {
        return 'Name is required!'
      } else if (!template[val]) {
        return 'Template does not exist!'
      } else  {
        return true
      }
    }
  }
]

inquirer
  .prompt(question).then(answer => {
    const {name} = answer;
    delete template[name];

    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(template), 'utf-8', err => {
      if (err) console.log(err);
      console.log('\n')
      console.log(chalk.green('Deleted successfully!\n'))
      console.log(chalk.grey('The latest template list is: \n'))
      console.log(template)
      console.log('\n')
    })
  })