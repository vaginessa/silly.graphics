var gulp         = require('gulp'),
    shell        = require('gulp-shell'),
    postcss      = require('gulp-postcss'),
    atImport     = require('postcss-import'),
    cssnext      = require('postcss-cssnext'),
    cssnano      = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin      = require('gulp-htmlmin'),
    gzip         = require('gulp-gzip'),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload;

var processors = [
  atImport(),
  cssnext({
    'browsers': ['last 2 versions'],
    'features': {
      'customProperties': {
        preserve: true,
        appendVariables: true
      },
      'colorFunction': true,
      'customSelectors': true,
      'sourcemap': true,
      'rem': false
    }
  })
];

// styles
gulp.task('styles', function() {
  return gulp.src('_assets/src/style.css')
    .pipe(postcss(processors))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('_assets/css'));
});

// styles > serve
gulp.task('serve', ['styles'], function() {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    notify: false
  });
  gulp.watch('_assets/src/*.css', ['styles']);
  gulp.watch('_assets/css/style.css').on('change', reload);
  gulp.watch('_site/**/*.*').on('change', reload);
});

// styles > serve > default(buildWatch)
gulp.task('default', ['serve'], shell.task(
  'JEKYLL_ENV=development bundle exec jekyll build --watch'
));

// PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS /
// TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION
// PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS /
// TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION TASKS / PRODUCTION


var path = '_site';

// styles > build
gulp.task('build', ['styles'], shell.task(
  // 'bundle exec jekyll build --destination ' + path
  'JEKYLL_ENV=production bundle exec jekyll build'
));

// styles > build > minify
gulp.task('minify', ['build'], function() {
  return gulp.src(path + '/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest(path));
});

// styles > build > minify > compress
gulp.task('compress', ['minify'], function () {
  return gulp.src(path + '/**/*.html')
    .pipe(gzip())
    .pipe(gulp.dest(path));
});

// styles > build > minify > compress > deploy
gulp.task('deploy', ['compress'], shell.task(
  'cd _site; rm -rf assets; git add -A; git commit -S -m "Deploy"; git push live master'
));
