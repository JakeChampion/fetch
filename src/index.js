/* jslint node: true */
var Headers = require('./Headers');
var Request = require('./Request');
var Response = require('./Response');

var fetch = require('./fetch');

(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = fetch;
  self.fetch.polyfill = true
})();
