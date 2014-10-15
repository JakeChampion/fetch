MockXHR.responses = {
  '/hello': function(xhr) {
    xhr.respond(200, 'hi')
  },
  '/boom': function(xhr) {
    xhr.respond(500, 'boom')
  },
  '/error': function(xhr) {
    xhr.error()
  },
  '/json': function(xhr) {
    xhr.respond(200, JSON.stringify({name: 'Hubot', login: 'hubot'}))
  },
  '/json-error': function(xhr) {
    xhr.respond(200, 'not json {')
  },
  '/headers': function(xhr) {
    var headers = [
      'Date: Mon, 13 Oct 2014 21:02:27 GMT',
      'Content-Type: text/html; charset=utf-8'
    ].join('\r\n')
    xhr.respond(200, 'hi', headers + '\r\n')
  }
}

window.XMLHttpRequest = MockXHR

asyncTest('populates response body', 3, function() {
  fetch('/hello').then(function(response) {
    equal(MockXHR.last().method, 'GET')
    equal(response.status, 200)
    equal(response.body, 'hi')
    start()
  })
})

asyncTest('sends request headers', 2, function() {
  fetch('/hello', {
    headers: {
      'Accept': 'application/json',
      'X-Test': '42'
    }
  }).then(function() {
    var request = MockXHR.last()
    equal(request.headers['Accept'], 'application/json')
    equal(request.headers['X-Test'], '42')
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

asyncTest('resolves blob promise', 2, function() {
  fetch('/hello').then(function(response) {
    return response.blob()
  }).then(function(blob) {
    ok(blob instanceof Blob, 'blob is a Blob instance')
    equal(blob.size, 2)
    start()
  })
})

asyncTest('post sends encoded body', 2, function() {
  fetch('/hello', {
    method: 'post',
    body: {
      name: 'Hubot',
      title: 'Hubot Robawt',
      undef: undefined,
      nil: null
    }
  }).then(function() {
    var request = MockXHR.last()
    equal(request.method, 'post')
    equal(request.data, 'name=Hubot&title=Hubot+Robawt&nil=')
    start()
  })
})

asyncTest('post sets content-type header', 1, function() {
  fetch('/hello', {
    method: 'post',
    body: {}
  }).then(function() {
    var request = MockXHR.last()
    equal(request.headers['Content-Type'], 'application/x-www-form-urlencoded; charset=UTF-8')
    start()
  })
})

asyncTest('rejects blob promise after body is consumed', 1, function() {
  fetch('/hello').then(function(response) {
    response.blob()
    return response.blob()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    start()
  })
})

asyncTest('rejects json promise after body is consumed', 1, function() {
  fetch('/json').then(function(response) {
    response.json()
    return response.json()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    start()
  })
})

asyncTest('rejects text promise after body is consumed', 1, function() {
  fetch('/hello').then(function(response) {
    response.text()
    return response.text()
  }).catch(function(error) {
    ok(error instanceof TypeError, 'Promise rejected after body consumed')
    start()
  })
})
