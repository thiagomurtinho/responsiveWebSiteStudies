const gulp = require('gulp')
const sass = require('gulp-ruby-sass')



gulp.task('sass', (done) => {
    return sass('sass/*.sass')
    .pipe(gulp.dest('css'))
})


gulp.task('default', (done) => {
    console.log('Hello Gulp')
    done()
})