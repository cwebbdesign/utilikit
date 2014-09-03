// Declare dependencies
// -----------------------------------------------
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jsValidate = require('gulp-jsvalidate');
var esformatter = require('gulp-esformatter');
var mocha = require('gulp-mocha');


// Configuration
// ----------------------------------------------
var config = {
  paths: {
    assets: {
      js: ['*.js', './lib/**/*.js']
    },
    dist: {},
    test: {
      js: './test/**/*.js'
    }
  }
};


// Tasks
// -----------------------------------------------

// JS Hint
gulp.task('lint', function() {
  return gulp.src(config.paths.assets.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// JS Validate
gulp.task('validate', function() {
  return gulp.src(config.paths.assets.js, config.paths.test.js)
    .pipe(jsValidate());
});

// JS Formatting
gulp.task('format', function() {
  return gulp.src(config.paths.assets.js, config.paths.test.js)
    .pipe(esformatter()) // use .esformatter
    .pipe(gulp.dest('')); // replace the existing file
});

// Tests
gulp.task('test', function() {
  return gulp.src(config.paths.test.js, {
    read: false
  })
    .pipe(mocha({
      reporter: 'mocha-unfunk-reporter'
    }));
});


// Task flows.
gulp.task('default', function(cb) {
  runSequence('format', 'validate', 'lint', 'test', cb);
});