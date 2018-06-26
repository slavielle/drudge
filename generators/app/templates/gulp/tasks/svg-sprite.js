'use strict';

var gulp = require("gulp");
var conf = require('../options');
var onError = require('./helpers/onError');

var svgo =  require('gulp-svgo');
var svgstore =  require('gulp-svgstore');

module.exports = function () {

  return gulp.src(conf.paths.src.svg_sprites)
  .pipe(onError())
  .pipe(svgo())
  .pipe(svgstore({inlineSvg: true}))
  .pipe(gulp.dest(conf.paths.dist.images))

}
