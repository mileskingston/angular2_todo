'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('default', ['sass']);
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});