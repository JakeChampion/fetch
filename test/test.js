var blobSupport = (function() {
  try {
    new Blob();
    return true
  } catch(e) {
    return false
  }
})();

asyncTest('populates response body', 2, function() {
  fetch('/hello').then(function(response) {
    equal(response.status, 200)
    return response.text()
  }).then(function(body) {
    equal(body, 'hi')
    start()
  })
})

asyncTest('sends request headers', 2, function() {
  fetch('/request', {
    headers: {
      'Accept': 'application/json',
      'X-Test': '42'
    }
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.headers['accept'], 'application/json')
    equal(json.headers['x-test'], '42')
    start()
  })
})

asyncTest('parses response headers', 2, function() {
  fetch('/headers?' + new Date().getTime()).then(function(response) {
    equal(response.headers.get('Date'), 'Mon, 13 Oct 2014 21:02:27 GMT')
    equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8')
    start()
  })
})

asyncTest('resolves promise on 500 error', 2, function() {
  fetch('/boom').then(function(response) {
    equal(response.status, 500)
    return response.text()
  }).then(function(body) {
    equal(body, 'boom')
    start()
  })
})

asyncTest('rejects promise for network error', 1, function() {
  fetch('/error').then(function(response) {
    ok(false, 'HTTP status ' + response.status + ' was treated as success')
    start()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Rejected with Error')
    start()
  })
})

asyncTest('handles 204 No Content response', 2, function() {
  fetch('/empty').then(function(response) {
    equal(response.status, 204)
    return response.text()
  }).then(function(body) {
    equal(body, '')
    start()
  })
})

asyncTest('resolves text promise', 1, function() {
  fetch('/hello').then(function(response) {
    return response.text()
  }).then(function(text) {
    equal(text, 'hi')
    start()
  })
})

asyncTest('parses form encoded response', 1, function() {
  fetch('/form').then(function(response) {
    return response.formData()
  }).then(function(form) {
    ok(form instanceof FormData, 'Parsed a FormData object')
    start()
  })
})

asyncTest('parses json response', 2, function() {
  fetch('/json').then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.name, 'Hubot')
    equal(json.login, 'hubot')
    start()
  })
})

asyncTest('handles json parse error', 2, function() {
  fetch('/json-error').then(function(response) {
    return response.json()
  }).catch(function(error) {
    ok(error instanceof Error, 'JSON exception is an Error instance')
    ok(error.message, 'JSON exception has an error message')
    start()
  })
})

if (blobSupport) {
  asyncTest('resolves blob promise', 2, function() {
    fetch('/hello').then(function(response) {
      return response.blob()
    }).then(function(blob) {
      ok(blob instanceof Blob, 'blob is a Blob instance')
      equal(blob.size, 2)
      start()
    })
  })
}

asyncTest('post sets content-type header', 2, function() {
  fetch('/request', {
    method: 'post',
    body: new FormData()
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    equal(json.method, 'POST')
    ok(/^multipart\/form-data;/.test(json.headers['content-type']))
    start()
  })
})

if (blobSupport) {
  asyncTest('rejects blob promise after body is consumed', 3, function() {
    fetch('/hello').then(function(response) {
      ok(response.blob, 'Body does not implement blob')
      response.blob()
      return response.blob()
    }).catch(function(error) {
      ok(error instanceof TypeError, 'Promise rejected after body consumed')
      equal(error.message, 'Already read', 'Promise rejected for incorrect reason')
      start()
    })
  })
}

asyncTest('rejects json promise after body is consumed', 3, function() {
  fetch('/json').then(function(response) {
    ok(response.json, 'Body does not implement json')
    response.json()
    return response.json()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    equal(error.message, 'Already read', 'Promise rejected for incorrect reason')
    start()
  })
})

asyncTest('rejects text promise after body is consumed', 3, function() {
  fetch('/hello').then(function(response) {
    ok(response.text, 'Body does not implement text')
    response.text()
    return response.text()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    equal(error.message, 'Already read', 'Promise rejected for incorrect reason')
    start()
  })
})

asyncTest('rejects formData promise after body is consumed', 3, function() {
  fetch('/json').then(function(response) {
    ok(response.formData, 'Body does not implement formData')
    response.formData()
    return response.formData()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    equal(error.message, 'Already read', 'Promise rejected for incorrect reason')
    start()
  })
})

asyncTest('supports HTTP PUT', 2, function() {
  fetch('/request', {
    method: 'put',
    body: 'name=Hubot'
  }).then(function(response) {
    return response.json()
  }).then(function(request) {
    equal(request.method, 'PUT')
    equal(request.data, 'name=Hubot')
    start()
  })
})

asyncTest('supports HTTP PATCH', 2, function() {
  fetch('/request', {
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
    start()
  })
})

asyncTest('supports HTTP DELETE', 2, function() {
  fetch('/request', {
    method: 'delete',
  }).then(function(response) {
    return response.json()
  }).then(function(request) {
    equal(request.method, 'DELETE')
    equal(request.data, '')
    start()
  })
})
