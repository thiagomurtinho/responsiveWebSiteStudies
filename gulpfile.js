const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const watch = require('gulp-watch')


gulp.task('pug', () => {
    return gulp.src('pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('src'))
})

gulp.task('sass', () => {
    return gulp.src('sass/**/*.sass')
    .pipe(sass({ /* outputStyle: 'compressed' */ }).on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', () => {
    gulp.watch('sass/**/*.sass', gulp.series('sass'))
    gulp.watch('pug/*.pug', gulp.series('pug'))
})

gulp.task('default', gulp.series('pug', 'sass', 'watch'))
