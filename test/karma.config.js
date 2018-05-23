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
    files: ['dist/fetch.umd.js', 'test/test.js'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
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
