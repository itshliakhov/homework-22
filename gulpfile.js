const {task, src, dest, series, watch} = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const jsmin = require('gulp-jsmin');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

task('js:build', ()=> {
    return src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest("dist"));
})
task("scss:build", ()=> {
    return src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest("dist"));
})

task('watch', () => {
    watch('src/*.js', series('js:build'))
    watch('src/*.scss', series('scss:build'))

})