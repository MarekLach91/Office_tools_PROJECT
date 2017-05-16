var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');

gulp.task('hint', function() {
  return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}))
  .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});


gulp.task('watch', function(){ 
    gulp.watch('scss/*.scss', ['sass']); })
