MockXHR.responses = {
  '/hello': function(xhr) {
    xhr.respond(200, 'hi')
  },
  '/boom': function(xhr) {
    xhr.respond(500, 'boom')
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
