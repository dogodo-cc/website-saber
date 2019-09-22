function isJavaScript(file) {
  return file.extname === '.js';
}

function isStylus(file) {
  return file.extname === '.stylus';
}
const isDev = process.env.NODE_ENV === 'development';
const isBuild = process.env.NODE_ENV === 'production';

module.exports = {
  isJavaScript,
  isStylus,
  isDev,
  isBuild
}