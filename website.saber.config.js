const config = {
  pathJs : 'src/js/*.js',
  pathCss : 'src/css/*.styl',
  pathHtmlWatch: 'src/views/**/*.html', // watch 的时候需要包括 layout 文件夹的文件
  pathHtml: 'src/views/*.html',         // 编译的时候 忽略 layout 文件夹的文件
  outputJs : 'dist/js/',
  outputCss : 'dist/css/',
  outputHtml: 'dist/'
};

module.exports = config;