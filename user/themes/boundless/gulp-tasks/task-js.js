var gulpif = require('gulp-if');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = function (gulp, config) {
  return function () {
    return gulp.src(config.jsfiles)
    .pipe(concat('app.js'))
    .pipe(gulpif(config.babel, babel({presets: ['es2015']})))
    .pipe(gulpif(config.build, uglify()))
    .pipe(gulp.dest(config.dist_folder + 'js/dist'));
  };
};