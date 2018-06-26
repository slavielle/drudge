'use strict';

var gulp = require("gulp");
var conf = require('../options');

module.exports = function () {
  return gulp.src(conf.paths.src.metas + '*')
  .pipe(gulp.dest(conf.paths.dist.metas))
}
