'use strict';

var argv = require('minimist')(process.argv.slice(2));
var gulp = require("gulp");
var util = require("gulp-util");
var conf = require('../options');
var onError = require('./helpers/onError');

var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var production = argv.production;

module.exports = function () {

  return gulp.src(conf.paths.src.scripts + '*.js', {read : false })  // no need of reading file because browserify does.
  .pipe(onError())
  .pipe(!production ? sourcemaps.init() : util.noop())
  .pipe(tap(function (file) {
    file.contents = browserify(file.path, {
      debug: true,
      paths: ['assets/scripts/helpers','assets/scripts/modules', 'node_modules']
    })
    .bundle()
    .on('error', function(error){
      util.log('Browserify ' + error);
      this.emit('end');
    });
  }))
  .pipe(buffer())
  .pipe(!production ? util.noop() : uglify())
  .pipe(!production ? sourcemaps.write() : util.noop())
  .pipe(gulp.dest(conf.paths.dist.scripts))

}
