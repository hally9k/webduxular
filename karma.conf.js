// Karma configuration
// Generated on Mon Jun 20 2016 11:42:26 GMT+1200 (NZST)

const webpackEnv = { test: true };
const webpackConfig = require('./webpack.config')(webpackEnv);
webpackConfig.entry = {};
const testGlob = 'app/**/*.tests.js';
process.env.BABEL_ENV = 'test';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      testGlob
    ],
    preprocessors: {
      [testGlob]: ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress'/*, 'coverage'*/],
    // coverageReporters: [
    //   // { type: 'lcov', dir: 'coverage/', subdir: '.' },
    //   // { type: 'json', dir: 'coverage/', subdir: '.' },
    //   { type: 'text-summary' }
    // ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
