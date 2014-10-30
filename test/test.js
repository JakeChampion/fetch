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
    equal(response.body, 'hi')
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
    var headers = JSON.parse(response.body).headers
    equal(headers['accept'], 'application/json')
    equal(headers['x-test'], '42')
    start()
  })
})

asyncTest('parses response headers', 2, function() {
  fetch('/headers').then(function(response) {
    equal(response.headers.get('Date'), 'Mon, 13 Oct 2014 21:02:27 GMT')
    equal(response.headers.get('Content-Type'), 'text/html; charset=utf-8')
    start()
  })
})

asyncTest('resolves promise on 500 error', 2, function() {
  fetch('/boom').then(function(response) {
    equal(response.status, 500)
    equal(response.body, 'boom')
    start()
  })
})

asyncTest('rejects promise for network error', 1, function() {
  fetch('/error').catch(function() {
    ok(true)
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

asyncTest('post sends encoded body', 2, function() {
  fetch('/request', {
    method: 'post',
    body: {
      name: 'Hubot',
      title: 'Hubot Robawt',
      undef: undefined,
      nil: null
    }
  }).then(function(response) {
    var request = JSON.parse(response.body);
    equal(request.method, 'POST')
    equal(request.data, 'name=Hubot&title=Hubot+Robawt&nil=')
    start()
  })
})

asyncTest('post sets content-type header', 1, function() {
  fetch('/request', {
    method: 'post',
    body: {}
  }).then(function(response) {
    var request = JSON.parse(response.body);
    equal(request.headers['content-type'], 'application/x-www-form-urlencoded; charset=UTF-8')
    start()
  })
})

if (blobSupport) {
  asyncTest('rejects blob promise after body is consumed', 2, function() {
    fetch('/hello').then(function(response) {
      response.blob()
      return response.blob()
    }).catch(function(error) {
      ok(error instanceof TypeError, 'Promise rejected after body consumed')
      ok(error.message === 'Body already consumed', 'Promise rejected for incorrect reason')
      start()
    })
  })
}

asyncTest('rejects json promise after body is consumed', 2, function() {
  fetch('/json').then(function(response) {
    response.json()
    return response.json()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    ok(error.message === 'Body already consumed', 'Promise rejected for incorrect reason')
    start()
  })
})

asyncTest('rejects text promise after body is consumed', 2, function() {
  fetch('/hello').then(function(response) {
    response.text()
    return response.text()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    ok(error.message === 'Body already consumed', 'Promise rejected for incorrect reason')
    start()
  })
})

asyncTest('supports HTTP PUT', 2, function() {
  fetch('/request', {
    method: 'put',
    body: {
      name: 'Hubot',
      title: 'Hubot Robawt',
    }
  }).then(function(response) {
    var request = JSON.parse(response.body);
    equal(request.method, 'PUT')
    equal(request.data, 'name=Hubot&title=Hubot+Robawt')
    start()
  })
})

asyncTest('supports HTTP PATCH', 2, function() {
  fetch('/request', {
    method: 'PATCH',
    body: {
      name: 'Hubot',
      title: 'Hubot Robawt',
    }
  }).then(function(response) {
    var request = JSON.parse(response.body);
    equal(request.method, 'PATCH')
    if (/PhantomJS/.test(navigator.userAgent)) {
      equal(request.data, '')
    } else {
      equal(request.data, 'name=Hubot&title=Hubot+Robawt')
    }
    start()
  })
})

asyncTest('supports HTTP DELETE', 2, function() {
  fetch('/request', {
    method: 'delete',
  }).then(function(response) {
    var request = JSON.parse(response.body);
    equal(request.method, 'DELETE')
    equal(request.data, '')
    start()
  })
})
