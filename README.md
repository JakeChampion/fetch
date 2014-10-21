# window.fetch polyfill

The global `fetch` function is an easier way to make web requests and handle
responses than using an XMLHttpRequest. This polyfill is written as closely as
possible to the standard Fetch specification at https://fetch.spec.whatwg.org.

## Installation

Available on [Bower](http://bower.io) as **fetch**.

```
$ bower install fetch
```

You'll also need a Promise polyfill for older browsers.

```
$ bower install es6-promise
```

## Usage

The `fetch` function supports any HTTP method. We'll focus on GET and POST
example requests.

### HTML

```javascript
fetch('/users.html')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    document.body.innerHTML = body
  })
```

### JSON

```javascript
fetch('/users.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### Response metadata

```javascript
fetch('/users.json').then(function(response) {
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText)
})
```

### Post form

```javascript
var form = document.querySelector('form')

fetch('/query', {
  method: 'post',
  body: new FormData(form)
})
```

### Post form fields

```javascript
fetch('/query', {
  method: 'post',
  body: {
    name: 'Hubot',
    login: 'hubot'
  }
})
```

### Post JSON

```javascript
fetch('/users', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Hubot',
    login: 'hubot',
  })
})
```

### File upload

```javascript
var input = document.querySelector('input[type="file"]')

var form = new FormData()
form.append('file', input.files[0])
form.append('user', 'hubot')

fetch('/avatars', {
  method: 'post',
  body: form
})
```

### Success and error handlers

This causes `fetch` to behave like jQuery's `$.ajax` by rejecting the `Promise`
on HTTP failure status codes like 404, 500, etc. The response `Promise` is
resolved only on successful, 200 level, status codes.

```javascript
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
}

function json(response) {
  return response.json()
}

fetch('/users')
  .then(status)
  .then(json)
  .then(function(json) {
    console.log('request succeeded with json response', json)
  }).catch(function(response) {
    console.log('request failed with status', response.status)
  })
```

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |
