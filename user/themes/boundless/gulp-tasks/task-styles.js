var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var csso = require('gulp-csso');

module.exports = function (gulp, config) {
  return function () {
    gulp.src(config.src_folder + config.main_css_entry)
    .pipe(gulpif(!config.build, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({browsers: config.config_autoprefixer}))
    .pipe(gcmq())
    .pipe(gulpif(config.build, csso()))
    .pipe(gulp.dest(config.dist_folder + 'css/'));
  };
};