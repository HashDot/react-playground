var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// Default
// =====================================

gulp.task('default', ['webpack-dev-server'], function() {});

gulp.task('webpack-dev-server', function() {
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '',
    publicPath: '/',
    noInfo: true
  }).listen(8090, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/');
  });
});
