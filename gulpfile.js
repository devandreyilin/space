let gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rsync = require('gulp-rsync');

gulp.task('browser-sync', function () {
   browserSync({
      // proxy: "domain.local",
      server: {
         baseDir: 'app'
      },
      notify: false,
      open: false,
      // online: false, // Work Offline Without Internet Connection
      // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
   })
});

gulp.task('styles', function () {
   return gulp.src('app/scss/**/*.scss')
       .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
       .pipe(rename({suffix: '.min', prefix: ''}))
       .pipe(autoprefixer(['last 15 versions']))
       .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.stream())
});

gulp.task('scripts', function () {
   return gulp.src([
      'app/libs/jquery/dist/jquery.min.js',
      'app/libs/bootstrap/dist/js/bootstrap.min.js',
      'app/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
      'app/libs/jQuery.equalHeights-master/jquery.equalheights.min.js',
      'node_modules/@iconfu/svg-inject/dist/svg-inject.min.js',
      'app/js/common.js', // Always at the end
   ])
       .pipe(concat('scripts.min.js'))
       // .pipe(uglify()) // Minify js (opt.)
       .pipe(gulp.dest('app/js'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function () {
   return gulp.src('app/*.html')
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('rsync', function () {
   return gulp.src('app/**')
       .pipe(rsync({
          root: 'app/',
          hostname: 'username@yousite.com',
          destination: 'yousite/public_html/',
          // include: ['*.htaccess'], // Includes files to deploy
          exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
          recursive: true,
          archive: true,
          silent: false,
          compress: true
       }))
});

gulp.task('watch', function () {
   gulp.watch('app/scss/**/*.scss', gulp.parallel('styles'));
   gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
   gulp.watch('app/*.html', gulp.parallel('code'));
});
gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));