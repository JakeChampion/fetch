const serverEndpoints = require('./server')

module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['mocha', 'chai'],
    client: {
      mocha: {
        ui: 'tdd'
      }
    },
    files: [
      'node_modules/promise-polyfill/promise.js',
      'node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js',
      'node_modules/url-search-params/build/url-search-params.max.js',
      'dist/fetch.umd.js',
      'test/test.js'
    ],
    reporters: process.env.CI ? ['dots'] : ['progress'],
    port: 9876,
    colors: true,
    logLevel: process.env.CI ? config.LOG_WARN : config.LOG_INFO,
    browsers: ['ChromeHeadlessNoSandbox', 'FirefoxHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
        displayName: 'HeadlessFirefox'
      }
    },
    beforeMiddleware: ['custom'],
    plugins: [
      'karma-*',
      {
        'middleware:custom': ['value', serverEndpoints]
      }
    ]
  })
}
