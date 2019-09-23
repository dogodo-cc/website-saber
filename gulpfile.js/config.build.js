const {cssBuild} = require('./tasks/css');
const {jsBuild} = require('./tasks/js');
const {html} = require('./tasks/html');

module.exports = [cssBuild, jsBuild, html];