var blobSupport = (function() {
  try {
    new Blob();
    return true
  } catch(e) {
    return false
  }
})();

promiseTest('populates response body', 2, function() {
  return fetch('/hello').then(function(response) {
    equal(response.status, 200)
    return response.text()
  }).then(function(body) {
    equal(body, 'hi')
  })
})

promiseTest('sends request headers', 2, function() {
  return fetch('/request', {
    headers: {
      'Accept': 'application/json',
      'X-Test': '42'
    }
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.headers['accept'], 'application/json')
    equal(json.headers['x-test'], '42')
  })
})

promiseTest('parses response headers', 2, function() {
  return fetch('/headers?' + new Date().getTime()).then(function(response) {
    equal(response.headers.get('Date'), 'Mon, 13 Oct 2014 21:02:27 GMT')
    equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8')
  })
})

promiseTest('resolves promise on 500 error', 2, function() {
  return fetch('/boom').then(function(response) {
    equal(response.status, 500)
    return response.text()
  }).then(function(body) {
    equal(body, 'boom')
  })
})

promiseTest('rejects promise for network error', 1, function() {
  return fetch('/error').then(function(response) {
    ok(false, 'HTTP status ' + response.status + ' was treated as success')
    start()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Rejected with Error')
  })
})

promiseTest('handles 204 No Content response', 2, function() {
  return fetch('/empty').then(function(response) {
    equal(response.status, 204)
    return response.text()
  }).then(function(body) {
    equal(body, '')
  })
})

promiseTest('resolves text promise', 1, function() {
  return fetch('/hello').then(function(response) {
    return response.text()
  }).then(function(text) {
    equal(text, 'hi')
  })
})

promiseTest('parses form encoded response', 1, function() {
  return fetch('/form').then(function(response) {
    return response.formData()
  }).then(function(form) {
    ok(form instanceof FormData, 'Parsed a FormData object')
  })
})

promiseTest('parses json response', 2, function() {
  return fetch('/json').then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.name, 'Hubot')
    equal(json.login, 'hubot')
  })
})

promiseTest('handles json parse error', 2, function() {
  return fetch('/json-error').then(function(response) {
    return response.json()
  }).catch(function(error) {
    ok(error instanceof Error, 'JSON exception is an Error instance')
    ok(error.message, 'JSON exception has an error message')
  })
})

if (blobSupport) {
  promiseTest('resolves blob promise', 2, function() {
    return fetch('/hello').then(function(response) {
      return response.blob()
    }).then(function(blob) {
      ok(blob instanceof Blob, 'blob is a Blob instance')
      equal(blob.size, 2)
    })
  })
}

promiseTest('post sets content-type header', 2, function() {
  return fetch('/request', {
    method: 'post',
    body: new FormData()
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.method, 'POST')
    ok(/^multipart\/form-data;/.test(json.headers['content-type']))
  })
})

if (blobSupport) {
  promiseTest('rejects blob promise after body is consumed', 2, function() {
    return fetch('/hello').then(function(response) {
      ok(response.blob, 'Body does not implement blob')
      response.blob()
      return response.blob()
    }).catch(function(error) {
      ok(error instanceof TypeError, 'Promise rejected after body consumed')
    })
  })
}

promiseTest('rejects json promise after body is consumed', 2, function() {
  return fetch('/json').then(function(response) {
    ok(response.json, 'Body does not implement json')
    response.json()
    return response.json()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
  })
})

promiseTest('rejects text promise after body is consumed', 2, function() {
  return fetch('/hello').then(function(response) {
    ok(response.text, 'Body does not implement text')
    response.text()
    return response.text()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
  })
})

promiseTest('rejects formData promise after body is consumed', 2, function() {
  return fetch('/json').then(function(response) {
    ok(response.formData, 'Body does not implement formData')
    response.formData()
    return response.formData()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
  })
})

promiseTest('supports HTTP PUT', 2, function() {
  return fetch('/request', {
    method: 'put',
    body: 'name=Hubot'
  }).then(function(response) {
    return response.json()
  }).then(function(request) {
    equal(request.method, 'PUT')
    equal(request.data, 'name=Hubot')
  })
})

promiseTest('supports HTTP PATCH', 2, function() {
  return fetch('/request', {
    method: 'PATCH',
    body: 'name=Hubot'
  }).then(function(response) {
    return response.json()
  }).then(function(request) {
    equal(request.method, 'PATCH')
    if (/PhantomJS/.test(navigator.userAgent)) {
      equal(request.data, '')
    } else {
      equal(request.data, 'name=Hubot')
    }
  })
})

promiseTest('supports HTTP DELETE', 2, function() {
  return fetch('/request', {
    method: 'delete',
  }).then(function(response) {
    return response.json()
  }).then(function(request) {
    equal(request.method, 'DELETE')
    equal(request.data, '')
  })
})
