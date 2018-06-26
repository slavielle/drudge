'use strict';

var gulp = require("gulp");
var conf = require('../options');
var gulpclean = require('gulp-clean');

module.exports = function (){
    return gulp.src([ conf.paths.dist.index ])
        .pipe(gulpclean());
}
