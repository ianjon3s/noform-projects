const gulp       = require("gulp")
const sass       = require('gulp-sass')
const image      = require('gulp-image')

const paths = {
  src: {
    js:     "src/js/**/*.js",
    images: "src/images/**/*",
    fonts:  "src/fonts/*",
    sass:   "src/sass/**/*.+(sass|scss)"
  },
  build: {
    js:     "public/assets/js/",
    images: "public/assets/images/",
    fonts:  "public/assets/fonts/",
    sass:   "public/assets/css/"
  }
};

/**
 *
 */
gulp.task('js:compress', () => {
  return gulp
    .src(paths.src.js)
    .pipe(gulp.dest(paths.build.js))
});



/**
 *
 */
gulp.task('update:fonts', () => {
  return gulp
    .src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
});

/**
 *
 */
gulp.task('update:images', () => {
  return gulp
    .src(paths.src.images)
    .pipe(image())
    .pipe(gulp.dest(paths.build.images))
});

/**
 *
 */
gulp.task('update:js', gulp.series('js:compress'));

/**
 *
 */
gulp.task('update:sass', () => {
  return gulp
    .src(paths.src.sass)
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest(paths.build.sass))
});

/**
 *
 */
gulp.task('watch:fonts', () =>
  gulp.watch(paths.src.js, gulp.series('update:fonts'))
);

/**
 *
 */
gulp.task('watch:images', () =>
  gulp.watch(paths.src.images, gulp.series('update:images'))
);

/**
 *
 */
gulp.task('watch:js', () =>
  gulp.watch(paths.src.js, gulp.series('update:js'))
);

/**
 *
 */
gulp.task('watch:sass', () =>
  gulp.watch(paths.src.sass, gulp.series('update:sass'))
);

/**
 *
 */
gulp.task('watch:all', gulp.parallel('watch:js', 'watch:sass', 'watch:images', 'watch:fonts'))
gulp.task('default', gulp.series('watch:all'))
gulp.task('build', gulp.parallel('js:compress', 'update:fonts', 'update:images', 'update:sass'))
