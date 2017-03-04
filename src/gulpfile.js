var gulp = require("gulp");
var shell = require('gulp-shell');

gulp.task('basic', function(){
    require('./basic.js');
});

gulp.task('routerLevel', function(){
    require('./routerLevel.js');
});

gulp.task('routerUse',function(){
    require('./routerUse.js')
});