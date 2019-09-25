#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const chalk = require('chalk')
const ora = require('ora')
const ncp = require('ncp').ncp;
const inquirer = require('inquirer');
const exec = require("child-process-promise").exec;


const reslove = (src) =>  {
  return path.join(__dirname, src);
};
const resloveCwd = (src) => {
  return path.join(process.cwd(), src);
}
const getFileName = (name) => {
  const dotIndex = name.lastIndexOf('.');
  if (dotIndex > -1) {
    return name.substring(0, dotIndex);
  }
  return name;
}

program
  .usage('<template-name> [project-name]')
  program.parse(process.argv)

if(program.args.length === 0) return program.help();

const projectName = program.args[0];

// 判断是否已经有同名文件夹
const exists =fs.existsSync(resloveCwd(`./${projectName}`));
if (exists) return console.log(chalk.white.bgRed(`=> 文件夹: ${projectName} 已经存在! `));

inquirer.prompt([
  {
    type: 'input',
    message: '请输入你的项目名称',
    name: 'name'
  },
  {
    type: 'checkbox',
    message: '选择你需要的 gulp 任务',
    name: 'tasks',
    choices: [{
      name: 'css',
      checked: true
    },{
      name: 'js',
      checked: true
    },{
      name: 'html',
    },{
      name: 'server',
      checked: true
    }]
  },
  {
    type: 'list',
    message: '你喜欢 npm 还是 yarn',
    name: 'npmClient',
    choices: ['npm','yarn']
  }
]).then(answer => {
  const spinner = ora('正在创建...');
  spinner.start();

  // 先创建项目目录: ${projeceName}
  fs.mkdirSync(resloveCwd(`./${projectName}/`));

  const copyTask = [
    {
      src: reslove('../gulpfile.js/'),
      dist: resloveCwd(`./${projectName}/gulpfile.js/`),
      option: {
        filter: file => {
    
          // 针对 tasks 文件夹里面的文件，需要根据用户选择的 tasks 判断是否复制
          if(file.includes('gulpfile.js/tasks/')) {
            const name = getFileName(file.split('gulpfile.js/tasks/')[1])
            return answer.tasks.includes(name) || true;
          }
    
          // 关于 config.build.js config.dev.js 也是需要自定义生成的
          if (/(config.build.js|config.dev.js)/i.test(file)) {
            return true;
          }
    
          return true;
        }
      }
    },
    {
      src: reslove('../src/'),
      dist: resloveCwd(`./${projectName}/src/`),
      option: {}
    },
    {
      src: reslove('../website.saber.config.js'),
      dist: resloveCwd(`./${projectName}/website.saber.config.js`),
      option: {}
    },
    {
      src: reslove('../init-file'),
      dist: resloveCwd(`./${projectName}/`),
      option: {}
    }
  ];
  copyTask.forEach(item => {
    ncp(item.src, item.dist, item.option, err => {
      if (err) console.log(err);
    });
  })

  let package = require(reslove('../package.example.json'));
  package.name = answer.name;

  const devDependencies = '@babel/core @babel/preset-env autoprefixer browser-sync gulp gulp-babel gulp-file-include gulp-postcss gulp-sourcemaps gulp-stylus gulp-uglify gulp-watch';
  const install = answer.npmClient === 'npm' ? 'npm install' : 'yarn add';

  fs.writeFile(`./${projectName}/package.json`, JSON.stringify(package), 'utf-8', err => {
    if(err) {
      console.log(err)
    } else {
      exec(`cd ./${projectName} && git init && ${install} ${devDependencies} --dev`).then(() => {
        spinner.succeed();

        console.log(chalk.green('\n 创建成功!'))
        console.log(`\n 启动项目: cd ${projectName} && npm run dev \n`)
      }).catch(err => {
        if(err) console.log(err);
      })
    }
  })
})
