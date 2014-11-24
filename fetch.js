(function() {
  'use strict';

  if (window.fetch) {
    return
  }

  function Headers(headers) {
    this.map = {}

    var self = this
    if (headers instanceof Headers) {
      headers.forEach(function(name, values) {
        values.forEach(function(value) {
          self.append(name, value)
        })
      })

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        self.append(name, headers[name])
      })
    }
  }

  Headers.prototype.append = function(name, value) {
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[name]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[name]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[name] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(name)
  }

  Headers.prototype.set = function(name, value) {
    this.map[name] = [value]
  }

  // Instead of iterable for now.
  Headers.prototype.forEach = function(callback) {
    var self = this
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      callback(name, self.map[name])
    })
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Body already consumed'))
    }
    body.bodyUsed = true
  }

  function Body() {
    this._body = null
    this.bodyUsed = false

    this.arrayBuffer = function() {
      throw new Error('Not implemented yet')
    }

    this.blob = function() {
      var rejected = consumed(this)
      return rejected ? rejected : Promise.resolve(new Blob([this._body]))
    }

    this.formData = function() {
      var rejected = consumed(this)
      return rejected ? rejected : Promise.resolve(decode(this._body))
    }

    this.json = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      var body = this._body
      return new Promise(function(resolve, reject) {
        try {
          resolve(JSON.parse(body))
        } catch (ex) {
          reject(ex)
        }
      })
    }

    this.text = function() {
      var rejected = consumed(this)
      return rejected ? rejected : Promise.resolve(this._body)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url
    this._body = options.body
    this.credentials = options.credentials || null
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null
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
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Request.prototype.fetch = function() {
    var self = this

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr)
        }
        resolve(new Response(xhr.responseText, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(self.method, self.url)

      self.headers.forEach(function(name, values) {
        values.forEach(function(value) {
          xhr.setRequestHeader(name, value)
        })
      })

      xhr.send((self._body === undefined) ? null : self._body)
    })
  }

  Body.call(Request.prototype)

  function Response(body, options) {
    this._body = body
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.statusText = options.statusText
    this.headers = options.headers
  }

  Body.call(Response.prototype)

  window.fetch = function (url, options) {
    return new Request(url, options).fetch()
  }
})();
