const { src, dest, lastRun } = require('gulp');
const babel = require('gulp-babel');
const { pathJs, outputJs } = require('../../website.saber.config');
const uglify = require('gulp-uglify');

function jsDev() {
  return src(pathJs, { since: lastRun(jsDev) })
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest(outputJs))
}

function jsBuild() {
  return src(pathJs)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest(outputJs))
}


module.exports = {
  jsDev,
  jsBuild
};