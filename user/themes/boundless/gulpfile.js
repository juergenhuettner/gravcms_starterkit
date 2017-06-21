var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = require('./gulp-tasks/_config');

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, config);
}

gulp.task('styles', getTask('task-styles'));
gulp.task('critical', getTask('task-critical'));
gulp.task('js', getTask('task-js'));
gulp.task('images', getTask('task-images'));

gulp.task('default', function () {
  runSequence(['styles', 'critical', 'js', 'images'], function() {
    if(!config.build) {
      browserSync(config.config_browsersync);
      gulp.watch(config.src_folder + 'sass/**/*.{sass,scss,css}', function() { runSequence(['styles', 'critical'], reload); });
      gulp.watch(config.src_folder + '/js/**/*.js', function() { runSequence(['js'], reload); });
      gulp.watch(config.src_folder + 'images/**/*.*', function() { runSequence(['images'], reload); });
    }
  });
});