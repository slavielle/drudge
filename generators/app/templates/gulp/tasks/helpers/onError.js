'use strict';
var gutil = require('gulp-util');

module.exports = function(error) {
    return require('gulp-plumber')(
        function(error) {
            gutil.log(error);
            this.emit('end');
        })
};
