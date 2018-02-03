var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass({
        outputStyle: 'expanded'
    }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['sass']);