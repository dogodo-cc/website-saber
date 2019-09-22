const { src, dest, lastRun } = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const { reload } = require('./server');
const { pathCss, outputCss } = require('../../website.saber.config');

function cssDev() {
  return src(pathCss, { since: lastRun(cssDev) })
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(outputCss))
    .pipe(reload({stream: true}))
}

function cssBuild() {
  return src(pathCss)
    .pipe(stylus({
      compress: true
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest(outputCss))
}


module.exports = {
  cssDev,
  cssBuild
}