var argv = require('yargs').argv;

module.exports = {
  src_folder: './',
  dist_folder: './',
  config_autoprefixer: [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ],
  build: (argv.build !== undefined),
  jsfiles: [
    'js/test1.js',
    'js/test2.js',
  ],
  babel: false,
  config_browsersync: {
    notify: false,
    open: false,
    proxy: 'gravcms.dev'
  },
  critical_css_entry: 'sass/critical/critical.scss',
  main_css_entry: 'sass/main/main.scss'
};