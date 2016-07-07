var gulp = require('gulp');
var inject = require('gulp-inject');
gulp.task('index', function () {
  var target = gulp.src('src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['bower_components/jquery/dist/jquery.min.js',
						  'bower_components/bootstrap/dist/css/bootstrap.css',
						  'bower_components/bootstrap/dist/js/bootstrap.min.js',
						  'bower_components/fancybox/source/jquery.fancybox.css',
						  'bower_components/fancybox/source/jquery.fancybox.js',
						  'bower_components/skrollr/src/skrollr.js',
 						  'bower_components/gsap/src/minified/TweenMax.min.js'], {read: false});
 
  return target.pipe(inject(sources)).pipe(gulp.dest('.'));
});
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./images'));
});

