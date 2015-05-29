function readBlobAsText(blob) {
  if ('FileReader' in self) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader()
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
      reader.readAsText(blob)
    })
  } else if ('FileReaderSync' in self) {
    return new FileReaderSync().readAsText(blob)
  } else {
    throw new ReferenceError('FileReader is not defined')
  }
}

function readBlobAsBytes(blob) {
  if ('FileReader' in self) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader()
      reader.onload = function() {
        var view = new Uint8Array(reader.result)
        resolve(Array.prototype.slice.call(view))
      }
      reader.onerror = function() {
        reject(reader.error)
      }
      reader.readAsArrayBuffer(blob)
    })
  } else if ('FileReaderSync' in self) {
    return new FileReaderSync().readAsArrayBuffer(blob)
  } else {
    throw new ReferenceError('FileReader is not defined')
  }
}

test('resolves promise on 500 error', function() {
  return fetch('/boom').then(function(response) {
    assert.equal(response.status, 500)
    assert.equal(response.ok, false)
    return response.text()
  }).then(function(body) {
    assert.equal(body, 'boom')
  })
})

test.skip('rejects promise for network error', function() {
  return fetch('/error').then(function(response) {
    assert(false, 'HTTP status ' + response.status + ' was treated as success')
  }).catch(function(error) {
    assert(error instanceof TypeError, 'Rejected with Error')
  })
})

// https://fetch.spec.whatwg.org/#headers-class
suite('Headers', function() {
  test('constructor copies headers', function() {
    var original = new Headers()
    original.append('Accept', 'application/json')
    original.append('Accept', 'text/plain')
    original.append('Content-Type', 'text/html')

    var headers = new Headers(original)
    assert.deepEqual(['application/json', 'text/plain'], headers.getAll('Accept'))
    assert.deepEqual(['text/html'], headers.getAll('Content-Type'))
  })
  test('headers are case insensitive', function() {
    var headers = new Headers({'Accept': 'application/json'})
    assert.equal(headers.get('ACCEPT'), 'application/json')
    assert.equal(headers.get('Accept'), 'application/json')
    assert.equal(headers.get('accept'), 'application/json')
  })
  test('appends to existing', function() {
    var headers = new Headers({'Accept': 'application/json'})
    assert.isFalse(headers.has('Content-Type'))
    headers.append('Content-Type', 'application/json')
    assert.isTrue(headers.has('Content-Type'))
    assert.equal(headers.get('Content-Type'), 'application/json')
  })
  test('appends values to existing header name', function() {
    var headers = new Headers({'Accept': 'application/json'})
    headers.append('Accept', 'text/plain')
    assert.equal(headers.getAll('Accept').length, 2)
    assert.equal(headers.getAll('Accept')[0], 'application/json')
    assert.equal(headers.getAll('Accept')[1], 'text/plain')
  })
  test('sets header name and value', function() {
    var headers = new Headers()
    headers.set('Content-Type', 'application/json')
    assert.equal(headers.get('Content-Type'), 'application/json')
  })
  test('returns null on no header found', function() {
    var headers = new Headers()
    assert.isNull(headers.get('Content-Type'))
  })
  test('has headers that are set', function() {
    var headers = new Headers()
    headers.set('Content-Type', 'application/json')
    assert.isTrue(headers.has('Content-Type'))
  })
  test('deletes headers', function() {
    var headers = new Headers()
    headers.set('Content-Type', 'application/json')
    assert.isTrue(headers.has('Content-Type'))
    headers.delete('Content-Type')
    assert.isFalse(headers.has('Content-Type'))
    assert.isNull(headers.get('Content-Type'))
  })
  test('returns list on getAll when header found', function() {
    var headers = new Headers({'Content-Type': 'application/json'})
    assert.isArray(headers.getAll('Content-Type'))
    assert.equal(headers.getAll('Content-Type').length, 1)
    assert.equal(headers.getAll('Content-Type')[0], 'application/json')
  })
  test('returns empty list on getAll when no header found', function() {
    var headers = new Headers()
    assert.isArray(headers.getAll('Content-Type'))
    assert.equal(headers.getAll('Content-Type').length, 0)
  })
  test('converts field name to string on set and get', function() {
    var headers = new Headers()
    headers.set(1, 'application/json')
    assert.equal(headers.get(1), 'application/json')
  })
  test('converts field value to string on set and get', function() {
    var headers = new Headers()
    headers.set('Content-Type', 1)
    assert.equal(headers.get('Content-Type'), '1')
  })
  test('throws TypeError on invalid character in field name', function() {
    assert.throws(function() { new Headers({'<Accept>': ['application/json']}) }, TypeError)
    assert.throws(function() { new Headers({'Accept:': ['application/json']}) }, TypeError)
    assert.throws(function() {
      var headers = new Headers();
      headers.set({field: 'value'}, 'application/json');
    }, TypeError)
  })
  test('is iterable with forEach', function() {
    var headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('Accept', 'text/plain')
    headers.append('Content-Type', 'text/html')

    var results = []
    headers.forEach(function(value, key, object) {
      results.push({value: value, key: key, object: object})
    })

    assert.equal(results.length, 3)
    assert.deepEqual({key: 'accept', value: 'application/json', object: headers}, results[0])
    assert.deepEqual({key: 'accept', value: 'text/plain', object: headers}, results[1])
    assert.deepEqual({key: 'content-type', value: 'text/html', object: headers}, results[2])
  })
  test('forEach accepts second thisArg argument', function() {
    var headers = new Headers({'Accept': 'application/json'})
    var thisArg = 42
    headers.forEach(function() {
      assert.equal(this, thisArg)
    }, thisArg)
  })
 })

// https://fetch.spec.whatwg.org/#request-class
suite('Request', function() {
  test('sends request headers', function() {
    return fetch('/request', {
      headers: {
        'Accept': 'application/json',
        'X-Test': '42'
      }
    }).then(function(response) {
      return response.json()
    }).then(function(json) {
      assert.equal(json.headers['accept'], 'application/json')
      assert.equal(json.headers['x-test'], '42')
    })
  })

  test('fetch request', function() {
    var request = new Request('/request', {
      headers: {
        'Accept': 'application/json',
        'X-Test': '42'
      }
    })

    return fetch(request).then(function(response) {
      return response.json()
    }).then(function(json) {
      assert.equal(json.headers['accept'], 'application/json')
      assert.equal(json.headers['x-test'], '42')
    })
  })

  test('construct with url', function() {
    var request = new Request('https://fetch.spec.whatwg.org/')
    assert.equal(request.url, 'https://fetch.spec.whatwg.org/')
  })

  // https://fetch.spec.whatwg.org/#concept-bodyinit-extract
  suite('BodyInit extract', function() {
    ;(Request.prototype.blob ? suite : suite.skip)('type Blob', function() {
      test('consume as blob', function() {
        var request = new Request(null, {method: 'POST', body: new Blob(['hello'])})
        return request.blob().then(readBlobAsText).then(function(text) {
          assert.equal(text, 'hello')
        })
      })

      test('consume as text', function() {
        var request = new Request(null, {method: 'POST', body: new Blob(['hello'])})
        return request.text().then(function(text) {
          assert.equal(text, 'hello')
        })
      })
    })

    suite('type USVString', function() {
      test('consume as text', function() {
        var request = new Request(null, {method: 'POST', body: 'hello'})
        return request.text().then(function(text) {
          assert.equal(text, 'hello')
        })
      })

      ;(Request.prototype.blob ? test : test.skip)('consume as blob', function() {
        var request = new Request(null, {method: 'POST', body: 'hello'})
        return request.blob().then(readBlobAsText).then(function(text) {
          assert.equal(text, 'hello')
        })
      })
    })
  })
})

// https://fetch.spec.whatwg.org/#response-class
suite('Response', function() {
  // https://fetch.spec.whatwg.org/#concept-bodyinit-extract
  suite('BodyInit extract', function() {
    ;(Response.prototype.blob ? suite : suite.skip)('type Blob', function() {
      test('consume as blob', function() {
        var response = new Response(new Blob(['hello']))
        return response.blob().then(readBlobAsText).then(function(text) {
          assert.equal(text, 'hello')
        })
      })

      test('consume as text', function() {
        var response = new Response(new Blob(['hello']))
        return response.text().then(function(text) {
          assert.equal(text, 'hello')
        })
      })
    })

    suite('type USVString', function() {
      test('consume as text', function() {
        var response = new Response('hello')
        return response.text().then(function(text) {
          assert.equal(text, 'hello')
        })
      })

      ;(Response.prototype.blob ? test : test.skip)('consume as blob', function() {
        var response = new Response('hello')
        return response.blob().then(readBlobAsText).then(function(text) {
          assert.equal(text, 'hello')
        })
      })
    })
  })

  test('populates response body', function() {
    return fetch('/hello').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })

  test('parses response headers', function() {
    return fetch('/headers?' + new Date().getTime()).then(function(response) {
      assert.equal(response.headers.get('Date'), 'Mon, 13 Oct 2014 21:02:27 GMT')
      assert.equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8')
    })
  })

  test('creates Headers object from raw headers', function() {
    var r = new Response('{"foo":"bar"}', {headers: {'content-type': 'application/json'}});
    assert.equal(r.headers instanceof Headers, true);
    return r.json().then(function(json){
      assert(json.foo, 'bar');
      return json;
    })
  })
})

// https://fetch.spec.whatwg.org/#body-mixin
suite('Body mixin', function() {
  ;(Response.prototype.arrayBuffer ? suite : suite.skip)('arrayBuffer', function() {
    test('resolves arrayBuffer promise', function() {
      return fetch('/hello').then(function(response) {
        return response.arrayBuffer()
      }).then(function(buf) {
        assert(buf instanceof ArrayBuffer, 'buf is an ArrayBuffer instance')
        assert.equal(buf.byteLength, 2)
      })
    })

    test('arrayBuffer handles binary data', function() {
      return fetch('/binary').then(function(response) {
        return response.arrayBuffer()
      }).then(function(buf) {
        assert(buf instanceof ArrayBuffer, 'buf is an ArrayBuffer instance')
        assert.equal(buf.byteLength, 256, 'buf.byteLength is correct')
        var view = new Uint8Array(buf)
        for (var i = 0; i < 256; i++) {
          assert.equal(view[i], i)
        }
      })
    })

    test('arrayBuffer handles utf-8 data', function() {
      return fetch('/hello/utf8').then(function(response) {
        return response.arrayBuffer()
      }).then(function(buf) {
        assert(buf instanceof ArrayBuffer, 'buf is an ArrayBuffer instance')
        assert.equal(buf.byteLength, 5, 'buf.byteLength is correct')
        var octets = Array.prototype.slice.call(new Uint8Array(buf))
        assert.deepEqual(octets, [104, 101, 108, 108, 111])
      })
    })

    test('arrayBuffer handles utf-16le data', function() {
      return fetch('/hello/utf16le').then(function(response) {
        return response.arrayBuffer()
      }).then(function(buf) {
        assert(buf instanceof ArrayBuffer, 'buf is an ArrayBuffer instance')
        assert.equal(buf.byteLength, 10, 'buf.byteLength is correct')
        var octets = Array.prototype.slice.call(new Uint8Array(buf))
        assert.deepEqual(octets, [104, 0, 101, 0, 108, 0, 108, 0, 111, 0])
      })
    })

    test('rejects arrayBuffer promise after body is consumed', function() {
      return fetch('/hello').then(function(response) {
        assert(response.arrayBuffer, 'Body does not implement arrayBuffer')
        assert.equal(response.bodyUsed, false)
        response.blob()
        assert.equal(response.bodyUsed, true)
        return response.arrayBuffer()
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed')
      })
    })
  })

  ;(Response.prototype.blob ? suite : suite.skip)('blob', function() {
    test('resolves blob promise', function() {
      return fetch('/hello').then(function(response) {
        return response.blob()
      }).then(function(blob) {
        assert(blob instanceof Blob, 'blob is a Blob instance')
        assert.equal(blob.size, 2)
      })
    })

    test('blob handles binary data', function() {
      return fetch('/binary').then(function(response) {
        return response.blob()
      }).then(function(blob) {
        assert(blob instanceof Blob, 'blob is a Blob instance')
        assert.equal(blob.size, 256, 'blob.size is correct')
      })
    })

    test('blob handles utf-8 data', function() {
      return fetch('/hello/utf8').then(function(response) {
        return response.blob()
      }).then(readBlobAsBytes).then(function(octets) {
        assert.equal(octets.length, 5, 'blob.size is correct')
        assert.deepEqual(octets, [104, 101, 108, 108, 111])
      })
    })

    test('blob handles utf-16le data', function() {
      return fetch('/hello/utf16le').then(function(response) {
        return response.blob()
      }).then(readBlobAsBytes).then(function(octets) {
        assert.equal(octets.length, 10, 'blob.size is correct')
        assert.deepEqual(octets, [104, 0, 101, 0, 108, 0, 108, 0, 111, 0])
      })
    })

    test('rejects blob promise after body is consumed', function() {
      return fetch('/hello').then(function(response) {
        assert(response.blob, 'Body does not implement blob')
        assert.equal(response.bodyUsed, false)
        response.text()
        assert.equal(response.bodyUsed, true)
        return response.blob()
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed')
      })
    })
  })

  ;(Response.prototype.formData ? suite : suite.skip)('formData', function() {
    test('post sets content-type header', function() {
      return fetch('/request', {
        method: 'post',
        body: new FormData()
      }).then(function(response) {
        return response.json()
      }).then(function(json) {
        assert.equal(json.method, 'POST')
        assert(/^multipart\/form-data;/.test(json.headers['content-type']))
      })
    })

    test('rejects formData promise after body is consumed', function() {
      return fetch('/json').then(function(response) {
        assert(response.formData, 'Body does not implement formData')
        response.formData()
        return response.formData()
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed')
      })
    })

    test('parses form encoded response', function() {
      return fetch('/form').then(function(response) {
        return response.formData()
      }).then(function(form) {
        assert(form instanceof FormData, 'Parsed a FormData object')
      })
    })
  })

  suite('json', function() {
    test('parses json response', function() {
      return fetch('/json').then(function(response) {
        return response.json()
      }).then(function(json) {
        assert.equal(json.name, 'Hubot')
        assert.equal(json.login, 'hubot')
      })
    })

    test('rejects json promise after body is consumed', function() {
      return fetch('/json').then(function(response) {
        assert(response.json, 'Body does not implement json')
        assert.equal(response.bodyUsed, false)
        response.text()
        assert.equal(response.bodyUsed, true)
        return response.json()
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed')
      })
    })

    test('handles json parse error', function() {
      return fetch('/json-error').then(function(response) {
        return response.json()
      }).catch(function(error) {
        assert(error instanceof Error, 'JSON exception is an Error instance')
        assert(error.message, 'JSON exception has an error message')
      })
    })
  })

  suite('text', function() {
    test('handles 204 No Content response', function() {
      return fetch('/empty').then(function(response) {
        assert.equal(response.status, 204)
        return response.text()
      }).then(function(body) {
        assert.equal(body, '')
      })
    })

    test('resolves text promise', function() {
      return fetch('/hello').then(function(response) {
        return response.text()
      }).then(function(text) {
        assert.equal(text, 'hi')
      })
    })

    test('rejects text promise after body is consumed', function() {
      return fetch('/hello').then(function(response) {
        assert(response.text, 'Body does not implement text')
        assert.equal(response.bodyUsed, false)
        response.text()
        assert.equal(response.bodyUsed, true)
        return response.text()
      }).catch(function(error) {
        assert(error instanceof TypeError, 'Promise rejected after body consumed')
      })
    })
  })
})

// https://fetch.spec.whatwg.org/#methods
suite('Methods', function() {
  test('supports HTTP GET', function() {
    return fetch('/request', {
      method: 'get',
    }).then(function(response) {
      return response.json()
    }).then(function(request) {
      assert.equal(request.method, 'GET')
      assert.equal(request.data, '')
    })
  })

  // TODO: Waiting to verify behavior
  test.skip('GET with body throws TypeError', function() {
    assert.throw(function() {
      new Request('', {
        method: 'get',
        body: 'invalid'
      })
    }, TypeError)
  })

  test.skip('HEAD with body throws TypeError', function() {
    assert.throw(function() {
      new Request('', {
        method: 'head',
        body: 'invalid'
      })
    }, TypeError)
  })

  test('supports HTTP POST', function() {
    return fetch('/request', {
      method: 'post',
      body: 'name=Hubot'
    }).then(function(response) {
      return response.json()
    }).then(function(request) {
      assert.equal(request.method, 'POST')
      assert.equal(request.data, 'name=Hubot')
    })
  })

  test('supports HTTP PUT', function() {
    return fetch('/request', {
      method: 'put',
      body: 'name=Hubot'
    }).then(function(response) {
      return response.json()
    }).then(function(request) {
      assert.equal(request.method, 'PUT')
      assert.equal(request.data, 'name=Hubot')
    })
  })

  var patchSupported = !/PhantomJS/.test(navigator.userAgent)

  ;(patchSupported ? test : test.skip)('supports HTTP PATCH', function() {
    return fetch('/request', {
      method: 'PATCH',
      body: 'name=Hubot'
    }).then(function(response) {
      return response.json()
    }).then(function(request) {
      assert.equal(request.method, 'PATCH')
      assert.equal(request.data, 'name=Hubot')
    })
  })

  test('supports HTTP DELETE', function() {
    return fetch('/request', {
      method: 'delete',
    }).then(function(response) {
      return response.json()
    }).then(function(request) {
      assert.equal(request.method, 'DELETE')
      assert.equal(request.data, '')
    })
  })
})

// https://fetch.spec.whatwg.org/#atomic-http-redirect-handling
suite('Atomic HTTP redirect handling', function() {
  test('handles 301 redirect response', function() {
    return fetch('/redirect/301').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      assert.match(response.url, /\/hello/)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })

  test('handles 302 redirect response', function() {
    return fetch('/redirect/302').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      assert.match(response.url, /\/hello/)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })

  test('handles 303 redirect response', function() {
    return fetch('/redirect/303').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      assert.match(response.url, /\/hello/)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })

  test('handles 307 redirect response', function() {
    return fetch('/redirect/307').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      assert.match(response.url, /\/hello/)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })

  var permanentRedirectSupported = !/PhantomJS|Trident/.test(navigator.userAgent)

  ;(permanentRedirectSupported ? test : test.skip)('handles 308 redirect response', function() {
    return fetch('/redirect/308').then(function(response) {
      assert.equal(response.status, 200)
      assert.equal(response.ok, true)
      assert.match(response.url, /\/hello/)
      return response.text()
    }).then(function(body) {
      assert.equal(body, 'hi')
    })
  })
})

// https://fetch.spec.whatwg.org/#concept-request-credentials-mode
suite('credentials mode', function() {
  var omitSupported = !self.fetch.polyfill

  setup(function() {
    return fetch('/cookie?name=foo&value=reset', {credentials: 'same-origin'});
  })

  ;(omitSupported ? suite : suite.skip)('omit', function() {
    test('request credentials defaults to omit', function() {
      var request = new Request('')
      assert.equal(request.credentials, 'omit')
    })

    test('does not accept cookies with implicit omit credentials', function() {
      return fetch('/cookie?name=foo&value=bar').then(function() {
        return fetch('/cookie?name=foo', {credentials: 'same-origin'});
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, 'reset')
      })
    })

    test('does not accept cookies with omit credentials', function() {
      return fetch('/cookie?name=foo&value=bar', {credentials: 'omit'}).then(function() {
        return fetch('/cookie?name=foo', {credentials: 'same-origin'});
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, 'reset')
      })
    })

    test('does not send cookies with implicit omit credentials', function() {
      return fetch('/cookie?name=foo&value=bar', {credentials: 'same-origin'}).then(function() {
        return fetch('/cookie?name=foo');
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, '')
      })
    })

    test('does not send cookies with omit credentials', function() {
      return fetch('/cookie?name=foo&value=bar').then(function() {
        return fetch('/cookie?name=foo', {credentials: 'omit'})
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, '')
      })
    })
  })

  suite('same-origin', function() {
    test('request credentials uses inits member', function() {
      var request = new Request('', {credentials: 'same-origin'})
      assert.equal(request.credentials, 'same-origin')
    })

    test('send cookies with same-origin credentials', function() {
      return fetch('/cookie?name=foo&value=bar', {credentials: 'same-origin'}).then(function() {
        return fetch('/cookie?name=foo', {credentials: 'same-origin'})
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, 'bar')
      })
    })
  })

  suite('include', function() {
    test('send cookies with include credentials', function() {
      return fetch('/cookie?name=foo&value=bar', {credentials: 'include'}).then(function() {
        return fetch('/cookie?name=foo', {credentials: 'include'})
      }).then(function(response) {
        return response.text()
      }).then(function(data) {
        assert.equal(data, 'bar')
      })
    })
  })
})
