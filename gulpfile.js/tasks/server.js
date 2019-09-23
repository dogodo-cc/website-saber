const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function server(cb) {
  browserSync.init({
    server: {
      baseDir: './dist/',
    },
    open: false,
    notify: false
  })
  cb();
}

// 不能抛出事件的都需要使用 cb() 手动触发
function serverReload(cb) {
  reload();
  cb();
}

module.exports = {
  server,
  reload,
  serverReload
}