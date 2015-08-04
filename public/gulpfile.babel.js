import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import watchify from 'watchify';
import del from 'del';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import {output as pagespeed} from 'psi';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const path = {
  HTML: './src/*.html',
  JS: ['./src/js/**/*.js', './src/js/components/*.jsx', './src/js/*.js', './src/js/*.jsx'],
  DEST: 'dist',
  OUT: 'bundle.js',  
  MINIFIED_OUT: 'bundle.min.js',
  ENTRY_POINT: './src/js/app.js'
};

// Lint JavaScript with eslint
gulp.task('lint', () => {
  return gulp.src(path.JS)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('copy', () => {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('devReplace', () => {
  gulp.src(path.HTML)
    .pipe($.htmlReplace({
      'js': path.OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', () => {
  gulp.watch(path.HTML, ['copy']);
  
  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    extensions: ['.jsx', '.js'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', () => {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('build', ['copy', 'devReplace']);

gulp.task('default', ['devReplace', 'watch']);