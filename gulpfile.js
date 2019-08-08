const gulp = require('gulp')
const sass = require('gulp-ruby-sass')
const watch = require('gulp-watch')


gulp.task('sass', () => {
    return sass('sass/**/*.sass')
    .pipe(gulp.dest('css'))
})


gulp.task('watch', () => {
    gulp.watch('sass/**/*.sass', gulp.series('sass'))
})


gulp.task('default', (done) => {
    console.log('Hello Gulp')
    done()
})