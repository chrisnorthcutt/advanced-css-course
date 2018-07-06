var gulp = require('gulp');
var sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('sass', function () {
    return gulp.src('sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            postcss([
                postcssPresetEnv({
                    stage: 0,
                    browsers: "last 2 versions",

                })
            ])
        )
        .pipe(gulp.dest('css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});