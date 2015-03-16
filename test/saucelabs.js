var Promise = require('es6-promise').Promise;
var https = require('https');

function fetchJSON(options, obj) {
  var data = JSON.stringify(obj);
  options.headers['Content-Type'] = 'application/json';
  options.headers['Content-Length'] = data.length;

  return new Promise(function(resolve, reject) {
    var req = https.request(options, function(res) {
      var json = '';
      res.on('data', function(d) { json += d; });
      res.on('end', function() {
        resolve(JSON.parse(json));
      });
    });
    req.end(data);
    req.on('error', reject);
  });
}

function timeout(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error('timeout'));
    }, ms);
  });
}

function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

fetchJSON({
  method: 'POST',
  hostname: 'saucelabs.com',
  path: '/rest/v1/' + process.env.SAUCE_USERNAME + '/js-tests',
  headers: {},
  auth: process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY
}, {
  'build': process.env.TRAVIS_BUILD_NUMBER,
  'tags': [process.env.TRAVIS_PULL_REQUEST, process.env.TRAVIS_BRANCH],
  'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  'platforms': [[process.env.SAUCE_PLATFORM, process.env.SAUCE_BROWSER, process.env.SAUCE_VERSION]],
  'url': process.argv[2],
  'framework': 'qunit'
}).then(function(obj) {
  function check() {
    return fetchJSON({
      method: 'POST',
      hostname: 'saucelabs.com',
      path: '/rest/v1/' + process.env.SAUCE_USERNAME + '/js-tests/status',
      headers: {},
      auth: process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY
    }, obj).then(function(obj) {
      if (obj.completed === true) {
        return obj;
      } else {
        return wait(2 * 1000).then(check);
      }
    });
  }
  return Promise.race([check(), timeout(180 * 1000)]);
}).then(function(obj) {
  var test = obj['js tests'][0];

  console.log(test.url);
  console.log(test.platform);
  console.log(test.result);

  var passed = test.result && (typeof test.result === 'object') &&
    test.result.passed === test.result.total;

  if (!passed) {
    throw 'tests failed';
  }
}).then(function() {
  global.process.exit(0);
}, function(error) {
  setImmediate(function() {
    throw error;
  });
});
