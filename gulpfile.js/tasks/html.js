const fileinclude = require('gulp-file-include');
const { src, dest, lastRun } = require('gulp');
const { pathHtml, outputHtml } = require('../../website.saber.config');
 
function html() {
  return src(pathHtml, { since: lastRun(html)})
    .pipe(fileinclude({
      prefix: '@@',
      suffix: '',
      basepath: '@file'
    }))
    .pipe(dest(outputHtml))
}

module.exports = {
  html
}