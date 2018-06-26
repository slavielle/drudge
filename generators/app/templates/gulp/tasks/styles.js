'use strict';

var conf = require('../options'),
    argv = require('minimist')(process.argv.slice(2)),
    gulp = require('gulp'),
    util = require('gulp-util'),
    onError = require('./helpers/onError'),
    less = require(conf.style_compiler),
    autoprefixer =  require('gulp-autoprefixer'),
    cleanCss =  require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    production = argv.production;

module.exports = function () {

  return gulp.src(conf.paths.src.styles)
  .pipe(onError())
  .pipe(!production ? sourcemaps.init() : util.noop())
  .pipe(less())
  .pipe(autoprefixer({ browsers: conf.module.autoprefixer.browsers }))
  .pipe(cleanCss())
  .pipe(!production ? sourcemaps.write() : util.noop())
  .pipe(gulp.dest(conf.paths.dist.styles))
}
