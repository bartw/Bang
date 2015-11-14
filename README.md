# Bang

## Intro
Bang is an acronim of Browserify, Angular, Node and Gulp.
In this repo I will try to build a basic app using these technologies.

## References
I don't make this stuff up. Mostly I just copy it from other websites like the ones
below.

- http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/

## Let's get started

- Open a terminal in you project folder.

```shell
npm init
npm install gulp --save-dev
npm install gulp-connect --save-dev
npm install gulp-less --save-dev
```

- Create gulpfile.js

```javascript
var gulp = require("gulp")
var less = require("gulp-less")
var connect = require("gulp-connect")

gulp.task("connect", function () {
    connect.server({
        root: "app/",
        port: 8888
    })
})
```

- Create a folder app with an index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Bang</title>
</head>
<body>
	<div>
		<h1>Bang</h1>
		<p>Bang is an acronim of Browserify, Angular, Node and Gulp.</p>
	</div>
</body>
</html>
```

- Run gulp connect and browse to http://localhost:8888/