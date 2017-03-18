"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
/*var mqpacker = require("css-mqpacker");*/
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var copy = require("gulp-contrib-copy");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("build", function() {

  gulp.src(["index.html", "products.html"])
    .pipe(copy())
      .pipe(gulp.dest('build'));

  gulp.src('fonts/*')
    .pipe(copy())
      .pipe(gulp.dest('build/fonts'));

  gulp.src("js/*")
    .pipe(copy())
      .pipe(gulp.dest('build/js'));

  gulp.src("css/style.css")
    .pipe(gulp.dest("build/css"));

    return gulp.src("img/**/*.{png,jpg,gif,svg}")
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true
    }))
  .pipe(gulp.dest("build/img"));
});


gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
