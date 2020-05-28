const serverEndpoints = require('./server')

module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['detectBrowsers', 'mocha', 'chai'],
    detectBrowsers: {
      preferHeadless: true,
      usePhantomJS: false,
      postDetection: availableBrowsers =>
        availableBrowsers
          .filter(
            browser =>
              !process.env.CI || !browser.startsWith('Chromium') || !availableBrowsers.some(b => b.startsWith('Chrome'))
          )
          .map(browser => (browser.startsWith('Chrom') ? `${browser}NoSandbox` : browser))
    },
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
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      },
      ChromiumHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox']
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
