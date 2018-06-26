'use strict';

var gulp = require('gulp');
var conf = require('../options');

module.exports = function() {
    // gulp.watch(conf.paths.src.scripts + '**/*.js', ["scripts"]);
    gulp.watch('./less/**/*.less', ["styles"]);
    // gulp.watch(conf.paths.src.fonts, ["fonts"]);
    // gulp.watch(conf.paths.src.svg_sprites, ["svg"]);
}
