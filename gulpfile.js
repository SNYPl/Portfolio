const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();
const minify = require('gulp-csso');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
// const sccsfiles = ['./site1/SCSS/style.scss', './site1/SCSS/footer.scss']




gulp.task("sass",  function () {
     return gulp.src('./scss/style.scss')
         .pipe(plumber())
         .pipe(sourcemaps.init())
         .pipe(sass().on('error', sass.logError))
         .pipe(autoprefixer({
             overrideBrowserslist: ['last 2 version'],
             cascade: false
         }))
         .pipe(concat('./style.css'))
         .pipe(gulp.dest("./css"))
         .pipe(minify())
         .pipe(sourcemaps.write('css.map'))
         .pipe(browserSync.stream())
         .pipe(rename("style.min.css"))
         .pipe(gulp.dest('./css'));

});



gulp.task('watch', function(){
     gulp.watch('./scss/**/*.scss', gulp.series('sass'))

});


gulp.task('serve', function(done) {

    browserSync.init({
        server: "./site1"
    });

    gulp.watch("./SCSS/**/*.scss", gulp.series('sass'));
    gulp.watch("./*.html").on("change",  browserSync.reload);

        done();
    });



gulp.task('default', gulp.series('sass', 'serve'));





