import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";
import bro from "gulp-browserify";
import babelify from "babelify";
import del from "del";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "static/js",
    watch: "assets/js/**/*.js",
  },
};

const clean = () => del(["static"]);
const js = () =>
  gulp
    .src(paths.js.src)
    .pipe(
      bro({
        transform: babelify.configure({
          presets: ["@babel/preset-env"],
        }),
      })
    )
    .pipe(gulp.dest(paths.js.dest));

const styles = () =>
  gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));

const watchFile = () => {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.js.watch, js);
};

const dev = gulp.series(clean, styles, js, watchFile);

const build = gulp.series(clean, styles, js);

export default dev;
