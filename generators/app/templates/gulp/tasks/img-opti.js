'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

var options = require('../options');

module.exports = function () {
  return gulp.src(options.paths.src.images)
      .pipe(imagemin({optimizationLevel: 5}))
      .pipe(gulp.dest(options.paths.dist.images))
}
