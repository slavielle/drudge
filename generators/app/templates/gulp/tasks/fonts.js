'use strict';

var gulp = require("gulp");
var conf = require('../options');

var flatten = require('gulp-flatten');

module.exports = function () {

  return gulp.src(conf.paths.src.fonts + '**/*')
  .pipe(flatten())
  .pipe(gulp.dest(conf.paths.dist.fonts))

}
