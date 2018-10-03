const gulp = require('gulp'),
	  cleanCSS = require('gulp-clean-css'),
	  sass = require('gulp-sass'),
	  postcss = require('gulp-postcss'),
	  prefix = require('autoprefixer'),
	  rename = require('gulp-rename');

gulp.task('css', function() {
	return gulp.src('css/scss/main.scss')
		.pipe(sass())
		.pipe(postcss([prefix()]))
		.pipe(cleanCSS({compatibility:'ie8'}))
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('css/'));
});

gulp.task('watchcss', function() {
	gulp.watch('css/scss/*.scss', gulp.series(['css']));
});