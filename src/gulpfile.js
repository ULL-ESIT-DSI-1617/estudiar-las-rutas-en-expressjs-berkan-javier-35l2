var gulp = require("gulp");
var shell = require('gulp-shell');

gulp.task('hello',shell.task([
    'echo "hello"'

]));
