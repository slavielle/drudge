'use strict';

var gulp = require("gulp");
require('gulp-stats')(gulp);

// Single tasks
gulp.task("scripts", require("./gulp/tasks/scripts"));
gulp.task("styles", require("./gulp/tasks/styles"));
// gulp.task("fonts", require("./gulp/tasks/fonts"));
// gulp.task("svg", require("./gulp/tasks/svg-sprite"));
// gulp.task("metas", require("./gulp/tasks/copy-metas"));
// gulp.task("image", require("./gulp/tasks/img-opti"));

gulp.task("clean", require("./gulp/tasks/clean"));

// Meta tasks
// gulp.task("build", ["image","styles", "scripts", "fonts", "svg", "metas"]);
gulp.task("build", ["styles", "scripts"]);

// default tasks
gulp.task("default", ["clean"], function() {
  gulp.start('build');
});

// dev tasks
gulp.task("w", ['default'], require("./gulp/tasks/watch"));
gulp.task("watch", ['default'], require("./gulp/tasks/watch"));
