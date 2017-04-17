var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("app.bundle.js"))
        .pipe(gulp.dest("."))
});

// gulp.task("copy", ["bundle"], function () {
//     return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/style.css"])
//         .pipe(gulp.dest("app/dist"));
// });

gulp.task("default",["bundle"],function(){
   console.log("Gulp completed..."); 
});
