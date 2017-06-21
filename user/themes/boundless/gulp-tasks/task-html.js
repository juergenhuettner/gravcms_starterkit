var gulpif = require('gulp-if');
var htmlreplace = require('gulp-html-replace');
var render = require('gulp-nunjucks-render');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var minifyHtml = require('gulp-minify-html');

module.exports = function (gulp, config) {
  return function () {
    return gulp.src(config.src_folder + '*.html')
    .pipe(
      gulpif(config.nunjucks,
        render(
          {
            path: [config.src_folder + 'templates']
          }
        )
      )
    )
    .pipe(
      gulpif(config.inline_critical_css,
        htmlreplace({
          criticalCSS: {
            src: gulp.src(config.src_folder + config.critical_css_entry)
            .pipe(sass())
            .pipe(autoprefixer({browsers: config.config_autoprefixer}))
            .pipe(gulpif(config.build, csso())),
            tpl: '<style>%s</style>'
          }
        }),
        htmlreplace({
          criticalCSS: {
            src: null,
            tpl: ''
          }
        })
      )
    )
    .pipe(
      gulpif(config.build,
        minifyHtml(
          {
            conditionals: true,
            empty: true,
            quotes: true
          }
        )
      )
    )
    .pipe(gulp.dest(config.dist_folder));
  };
};