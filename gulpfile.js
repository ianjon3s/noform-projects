const gulp       = require("gulp")
const babel      = require("gulp-babel")
const prettier   = require("@bdchauvette/gulp-prettier")
const watch      = require('gulp-watch')
const concat     = require('gulp-concat')
const terser     = require('gulp-terser')
const sass       = require('gulp-sass')
const notify     = require('gulp-notify')
const plumber    = require('gulp-plumber')
const image      = require('gulp-image')
const font       = require('gulp-font')
const mode       = require('gulp-mode')()

const paths = {
  src: {
    js:     "src/js/**/*.js",
    images: "src/images/**/*",
    fonts:  "src/fonts/*",
    sass:   "src/sass/**/*.+(sass|scss)"
  },
  build: {
    js:     "assets/js/",
    images: "assets/images/",
    fonts:  "assets/fonts/",
    sass:   "assets/css/"
  }
};

/**
 *
 */
gulp.task('js:compress', () => {
  return gulp
    .src(paths.src.js)
    .pipe(plumber())
    .pipe(babel())
    .pipe(terser())
    .pipe(concat('all.js'))
    .pipe(gulp.dest(paths.build.js))
});

/**
 *
 */
gulp.task("js:prettify", () => {
  return gulp
    .src(paths.src.js)
    .pipe(plumber())
    .pipe(
      prettier({
        singleQuote:   true,
        trailingComma: "all",
        insertPragma: true
      })
    )
    .pipe(gulp.dest(file => file.base))
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
  var onError = function(err) {
    notify.onError({
            title:    "Gulp",
            subtitle: "Failure!",
            message:  "Error: <%= error.message %>",
            sound:    "Beep"
        })(err);

        this.emit('end');
    };

  return gulp
    .src(paths.src.sass)
    .pipe(plumber({errorHandler: onError}))
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
