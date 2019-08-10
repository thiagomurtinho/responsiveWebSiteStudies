const gulp = require('gulp')
const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug')
const sass = require('gulp-ruby-sass')
const watch = require('gulp-watch')


gulp.task('pug', () => {
    return src('pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('src'))
})


gulp.task('sass', () => {
    return sass('sass/**/*.sass')
    .pipe(gulp.dest('src/css'))
})



gulp.task('watch', () => {
    gulp.watch('sass/**/*.sass', gulp.series('sass'))
    gulp.watch('pug/*.pug', gulp.series('pug'))
})


gulp.task('default', (done) => {
    console.log('Hello Gulp')
    done()
})

