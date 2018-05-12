// build script

var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("js", function() {
  return browserify("./src/app.js")
    .transform(babelify, {
      presets: ["es2015"]
    })
    .bundle()
    .pipe(source("error-causing-file-name.js"))
    .pipe(gulp.dest("./public"));
});

gulp.task("default", ["js"]);

gulp.task("watch", function() {
  return gulp.watch("./src/**.js", ["default"]);
});
