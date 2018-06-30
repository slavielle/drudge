'use strict';

var gulp = require("gulp");
var conf = require('../options');
var template = require('gulp-template');
var es = require('event-stream');
var rename = require('gulp-rename');

module.exports = function () {

  var previousItem = null;
  conf.breakpoints.forEach(function(item){
    if(previousItem !== null){
      previousItem._ = {drupal_mediaquery: 'all and (min-width: ' + (previousItem.pixel_value) + 'px) and (max-width: ' + (item.pixel_value - 1) + 'px)'};
    }
    item._ = {drupal_mediaquery:'all and (min-width: ' + item.pixel_value + 'px)'}
    if(item.targets && item.targets.drupal){
      previousItem = item;
    }
  });

  return es.concat(
    gulp.src(conf.paths.gulp_templates + '_boostrap-breakpoints.scss')
      .pipe(template({
        source: '<theme-dir>/' +  conf.paths.gulp_templates + '_boostrap-breakpoints.scss',
        breakpoints: conf.breakpoints
      }))
      .pipe(gulp.dest(conf.paths.src.sass_common)),
    gulp.src(conf.paths.gulp_templates + 'breakpoints.yml')
      .pipe(template({
        source: '<theme-dir>/' + conf.paths.gulp_templates + 'breakpoints.yml',
        breakpoints: conf.breakpoints,
        theme_name: conf.theme_name
      }))
      .pipe(rename(function (path) {
        path.basename = conf.theme_name + ".breakpoints";
      }))
      .pipe(gulp.dest("./"))
  );
}
