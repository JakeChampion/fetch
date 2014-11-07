if (typeof fetch === 'undefined') {
  fetch = require('../fetch').fetch;
}

var result = fetch('http://y.ucs.ricoh.co.jp:3000');

result.then(function(response) {
  console.log('response', response)
  console.log('header', response.headers.get('Content-Type'))
  return response.text()
}).then(function(text) {
  console.log('got text', text)
}).catch(function(ex) {
  console.log('failed', ex)
})
