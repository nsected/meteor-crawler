var gulp = require('gulp');var plumber = require('./../plumber-wrapper');var config = require('./../config');gulp.task('client.fonts', function () {    return gulp.src(config.src.fonts)        .pipe(plumber())        .pipe(gulp.dest(config.dest.public + '/fonts'));});