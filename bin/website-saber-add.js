#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const template = require(`${__dirname}/../template`);

const question = [
  {
    name: "name",
    type: "input",
    message: "请输入你的项目名称",
    validate(val) {
      if (val === '') {
        return 'name is required !'
      } else if(template[val]) {
        return 'template has already existed !';
      } else {
        return true;
      }
    }
  },
  {
    name: "url",
    type: "input",
    message: "请输入模板地址",
    validate(val) {
      if (val === '') {
        return 'the url is required !'
      } else {
        return true;
      }
    }
  }
]

inquirer
  .prompt(question).then(answer => {
    const {name, url} = answer;
    template[name] = url.replace(/[\u0000-\u0019]/g, '');

    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(template), 'utf-8', err => {
      if(err) console.log(err);
      console.log('\n')
      console.log(chalk.green('Added successfully!\n'))
      console.log(chalk.grey('The latest template list is: \n'))
      console.log(template)
      console.log('\n')
    })
  }).catch(err => {
    console.log(err)
  })

