/* gulpfile.js */

/* Plugins */
var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    ftp         = require('vinyl-ftp');

gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, ftp));

/* Default Task */
gulp.task('default', ['deploy']);
