var gulp = require("gulp")
var less = require("gulp-less")
var connect = require("gulp-connect")

gulp.task("connect", function () {
    connect.server({
        root: "app/",
        port: 8888
    })
})