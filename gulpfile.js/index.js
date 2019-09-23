// gulp
const { series } = require('gulp');

// tasks
const taskDev = require('./config.dev');
const taskBuild = require('./config.build');
const {isDev} = require('./utils')

const task = isDev ? [...taskBuild, ...taskDev] : taskBuild;

module.exports.default = series(...task)
