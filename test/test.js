MockXHR.responses = {
  '/hello': function(xhr) {
    xhr.respond(200, 'hi')
  },
  '/boom': function(xhr) {
    xhr.respond(500, 'boom')
  },
  '/json': function(xhr) {
    xhr.respond(200, JSON.stringify({name: 'Hubot', login: 'hubot'}))
  },
  '/json-error': function(xhr) {
    xhr.respond(200, 'not json {')
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

asyncTest('sends headers', 2, function() {
  fetch('/hello', {
    headers: {
      'Accept': 'application/json',
      'X-Test': '42'
    }
  }).then(function(response) {
    var request = MockXHR.last()
    equal(request.headers['Accept'], 'application/json')
    equal(request.headers['X-Test'], '42')
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

asyncTest('sends encoded post body', 2, function() {
  fetch('/hello', {
    method: 'post',
    body: {
      name: 'Hubot',
      title: 'Hubot Robawt',
      undef: undefined,
      nil: null
    }
  }).then(function(response) {
    var request = MockXHR.last()
    equal(request.method, 'post')
    equal(request.data, 'name=Hubot&title=Hubot+Robawt&nil=')
    start()
  })
})
