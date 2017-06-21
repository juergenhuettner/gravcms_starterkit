var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

module.exports = function (gulp, config) {
  return function () {
    return gulp.src(config.src_folder + 'images/**/*.*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: true}],
      use: [pngquant()],
      multipass: true
    }))
    .pipe(gulp.dest(config.dist_folder + 'images'));
  };
};