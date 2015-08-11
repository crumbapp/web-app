import gulp from 'gulp';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
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
  CSS: './src/styles/css/*.css',
  IMAGES: './src/images/*.png',
  LESS: './src/styles/less/*.less',
  JS: ['./src/js/**/*.js', './src/js/*.js', './src/js/components/*.jsx', './src/js/*.jsx'],
  DEST: 'dist',
  OUT: 'bundle.js',
  MINIFIED_OUT: 'bundle.min.js',
  ENTRY_POINT: './src/js/app.js'
};

gulp.task('copy-html', () => {
  return gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copy-css', () => {
  return gulp.src(path.CSS)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copy-less', () => {
  return gulp.src(path.LESS)
    .pipe($.less({}))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copy-images', () => {
  return gulp.src(path.IMAGES)
    .pipe(gulp.dest(path.DEST));
});


// Lint JavaScript with eslint
gulp.task('lint', () => {
  return gulp.src(path.JS)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('copy', ['copy-html','copy-css','copy-less','copy-images']);

gulp.task('devReplace', () => {
  gulp.src(path.HTML)
    .pipe($.htmlReplace({
      'js': path.OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', () => {
  gulp.watch(path.HTML, ['copy-html', 'devReplace']);
  gulp.watch(path.CSS,  ['copy-css']);
  gulp.watch(path.LESS, ['copy-less']);

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

/* * Production Task * */
gulp.task('buildReplace', () => {
  return gulp.src(path.HTML)
    .pipe($.htmlReplace({
      'js': path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('build', () => {
  return browserify({
    entries: [path.ENTRY_POINT],
    extensions: ['.jsx', '.js'],
    transform: [babelify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(buffer())
    .pipe($.concat(path.MINIFIED_OUT))
    .pipe($.uglify())
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', () => {
  return runSequence('copy', 'buildReplace', 'build');
});

gulp.task('default', () => {
  return runSequence('copy', 'devReplace', 'watch');
});