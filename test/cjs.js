/* global describe, it, require */

var isFunction = require('chai').assert.isFunction
var WHATWGFetch = require('../')

describe('Common JS exports', function() {
  it('should provide all the CJS exports', function() {
    isFunction(WHATWGFetch.fetch)
    isFunction(WHATWGFetch.Headers)
    isFunction(WHATWGFetch.Request)
    isFunction(WHATWGFetch.Response)
  })
})
