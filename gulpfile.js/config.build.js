const {cssBuild} = require('./tasks/css');
const {jsBuild} = require('./tasks/js');

module.exports = [cssBuild, jsBuild];