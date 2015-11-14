var gulp = require("gulp");
var rimraf = require("gulp-rimraf");
var browserify = require("browserify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");
var less = require("gulp-less");
var connect = require("gulp-connect");
var runSequence = require("run-sequence");

gulp.task("clean", function (done) {
    return gulp.src("./dist/**/*.*", { read: false })
        .pipe(rimraf({ force: true }));
});

gulp.task("watchify", function() {
    var b = watchify(browserify({
        entries: ["./src/app/bang.module.js"],
        debug: true
    }));
    b.on("update", function () {
      bundle(b);
    })
    bundle(b);
})

gulp.task("html", function () {
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
});

gulp.task("connect", function() {
    connect.server({
        root: "dist/",
        port: 8888
    })
})

gulp.task("build", function() {
    runSequence(
        ["clean"],
        ["watchify", "html"]
    );
});

gulp.task("default", ["build", "connect"]);

function bundle(b) {
    b.bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./dist/app'));  
}