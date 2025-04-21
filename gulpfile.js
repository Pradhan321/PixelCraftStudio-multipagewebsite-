const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser'); // Replace uglify with terser
const concat = require('gulp-concat');

// Minify HTML files in the root folder
gulp.task('minify-html', () => {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Concatenate and minify CSS files from ./css/
gulp.task('minify-css', () => {
  return gulp.src('./css/*.css')
    .pipe(concat('styles.min.css')) // Combine all CSS into a single file
    .pipe(cleanCSS()) // Minify CSS
    .pipe(gulp.dest('dist/css'));
});

// Concatenate and minify JS files from ./js/
gulp.task('minify-js', () => {
  return gulp.src('./js/*.js')
    .pipe(concat('scripts.min.js')) // Combine all JS into a single file
    .pipe(terser()) // Minify JS using terser
    .pipe(gulp.dest('dist/js'));
});

// Define the default task to run all tasks in parallel
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'));