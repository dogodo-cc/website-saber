const { serverReload, server } = require('./tasks/server');
const {cssDev} = require('./tasks/css');
const {jsDev} = require('./tasks/js');
const { pathJs, pathCss } = require('../website.saber.config');

const watch = require('gulp-watch');
const { series } = require('gulp');

function go(cb) {
  watch(pathJs, {events: ['change'],ignoreInitial: false}, series(jsDev, serverReload));
  watch(pathCss, {events: ['change'],ignoreInitial: false}, series(cssDev));
  cb();
}

module.exports = [go, server];