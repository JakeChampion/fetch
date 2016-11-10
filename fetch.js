(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  var parseResponse = testResType('moz-chunked-arraybuffer') ? mozParser : defaultParser

  function mozParser(xhr, controller) {
    xhr.responseType = 'moz-chunked-arraybuffer'
    xhr.onprogress = function () {
      controller.enqueue(new Uint8Array(xhr.response))
    }
  }

  /* Don't have IE
  function msParser(xhr, controller) {
    // only avalible on stage 3?
    var msstream = xhr.response // MSStream object
    var stream = msstream.msDetachStream() // IInputStreamObject

    var reader = new MSStreamReader()
    reader.onprogress = function () {
      // enqueue chunk (Uint8Array) to ReadableStream
      controller.enqueue(new Uint8Array(reader.result))
    }

    reader.readAsArrayBuffer(msstream) // or
    reader.readAsArrayBuffer(stream)
  }
  */

  function asciiToBytes(str) {
    var len = str.length
    var byteArray = new Uint8Array(len)
    for (var i = 0; i < len; i++) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray[i] = str.charCodeAt(i) & 0xFF
    }
    return byteArray
  }

  function defaultParser(xhr, controller) {
    var encoder = new TextEncoder()
    var offset = 0

    xhr.responseType = 'text'
    // Don't let browser modify the response text
    xhr.overrideMimeType('text/plain; charset=x-user-defined')
    xhr.onprogress = function () {
      var chunk = xhr.response.substr(offset)
      var buffer = asciiToBytes(chunk)
      offset = xhr.response.length
      controller.enqueue(new Uint8Array(buffer))
    }
    xhr.onload = function() {
      xhr.onprogress()
      controller.close()
    }
  }

  function testResType(type) {
    /* IE throws on setting responseType to an unsupported value */
    try {
      var xhr = new XMLHttpRequest()
      return 'responseType' in xhr && (xhr.responseType = type) === xhr.responseType
    } catch (err) {
      return false
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function formData2blob(fd) {
    var boundary = "----FormData" + Math.random()
    var chunks = []

    fd.forEach(function(key, value){
      chunks.push('--' + boundary + '\r\n')

      if (value instanceof File) {
        chunks.push(
          'Content-Disposition: form-data; name="' + name + '"; filename="' + value.name + '"\r\n',
          'Content-Type: ' + value.type + '\r\n\r\n',
          value,
          '\r\n'
        )
      } else {
        chunks.push(
          'Content-Disposition: form-data; name="' + name + '"\r\n\r\n${value}\r\n'
        )
      }
    }

    chunks.push('--' + boundary + '--')

    return new Blob(chunks, {type: 'multipart/form-data; boundary=' + boundary})
  }

  function streamBlob(blob){
    var position = 0
    var fr = new FileReader()

    return new ReadableStream({
      pull: function (controller) {
        var chunk = blob.slice(position, position += 524288)

        return new Promise(function(resolve) {
          fr.onload = function(){
            controller.enqueue(new Uint8Array(fr.result))
            if(position => blob.size)
              controller.close()
            resolve()
          }

          fr.readAsArrayBuffer(chunk)
        })
      }
    })
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function concatenate(arrays) {
    var size = arrays.reduce(function(a,b) {
      return  a + b.byteLength
    }, 0)

    var result = new Uint8Array(size)

    var offset = 0
    arrays.forEach(function(arr) {
      result.set(arr, offset)
      offset += arr.byteLength
    })

    return result
  }

  function concatStream(res) {
    if (res.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }

    if (res.body && res.body.locked) {
      return Promise.reject(new TypeError('Body is locked to a reader'))
    }

    if (!res.body) return Promise.resolve(new Uint8Array())

    var chunks = []
    var reader = res.body.getReader()
    var pump = function() {
      return reader.read().then(function(result) {
        if (!result.done) {
          chunks.push(result.value)
          return pump()
        }
      })
    }

    res.bodyUsed = true

    return pump().then(function() {
      return concatenate(chunks)
    })
  }

  function initBody(klass, body) {
    var content = !klass.headers.get('content-type')
    var bytes

    // Don't use strict equal. undefined and null should result in null
    if (body == null) {
      return klass.body = null
    }

    if (body instanceof Blob) {
      content && body.type && klass.headers.set('content-type', body.type)
      klass.body = streamBlob(body.slice(), klass)
    } else if (body instanceof FormData) {
      body = formData2blob(body)
      content && klass.headers.set('content-type', body.type)
      klass.body = streamBlob(body.slice(), klass)
    } else if (body instanceof URLSearchParams) {
      content && klass.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      bytes = new TextEncoder('UTF-8').encode(body)
    } else if (body.getReader) {
      klass.body = body
    } else if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
      bytes = new Uint8Array(body.slice())
    } else {
      // Rest is converted to a string
      content && klass.headers.set('content-type', 'text/plain;charset=UTF-8')
      bytes = new TextEncoder('UTF-8').encode(body)
    }

    if (bytes) {
      klass.body = new ReadableStream({
        start: function(controller) {
          controller.enqueue(bytes)
          controller.close()
        },
        pull: function() {
          klass.bodyUsed = true
        }
      })
    }
  }

  function Body() {
    this.bodyUsed = false

    this.blob = function() {
      return concatStream(this).then(function(buffer) {
        return new Blob([buffer])
      })
    }

    this.arrayBuffer = function() {
      return concatStream(this).then(function(buffer) {
        return buffer.buffer
      })
    }

    this.text = function() {
      return concatStream(this).then(function(buffer) {
        return new TextDecoder('UTF-8').decode(buffer)
      })
    }

    this.formData = function() {
      return this.text().then(decode)
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return ~methods.indexOf(upcased) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input.body) {
        var dummyStream = new ReadableStream()
        var reader = dummyStream.getReader()
        reader.read()
        body = input.body
        input.body = dummyStream
        input.bodyUsed = true
      }
    } else {
      this.url = input
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }

    initBody(this, body)
  }

  Request.prototype.clone = function() {
    var body = null

    if (this.body) {
      var tee = this.body.tee()
      this.body = tee[0]
      body = tee[1]
    }

    return new Request(this, {body: body})
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status
    this.ok = options.status >= 200 && options.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
    initBody(this, bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    var body = null

    if (this.body) {
      var tee = this.body.tee()
      this.body = tee[0]
      body = tee[1]
    }

    return new Response(body, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = input instanceof Request && !init
        ? input
        : new Request(input, init)

      var xhr = new XMLHttpRequest()
      var rs = new ReadableStream({
        start: function(controller) {
          parseResponse(xhr, controller)
        },
        cancel: function() {
          xhr.abort()
        }
      })

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/mi.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.HEADERS_RECEIVED) {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          }
          resolve(new Response(rs, options))
        }
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      request.body
        ? request.blob().then(function (blob){ xhr.send(blob) })
        : xhr.send()
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);
