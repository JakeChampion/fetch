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

asyncTest('populates response body', 2, function() {
  fetch('/hello').then(function(response) {
    equal(response.status, 200)
    equal(response.body, 'hi')
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
