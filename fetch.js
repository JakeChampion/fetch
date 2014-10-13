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

  Headers.prototype.delete = function(name) {
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

  function Body() {
    this.body = null
    this.bodyUsed = false

    this.arrayBuffer = function() {
      throw 'Not implemented yet'
    }

    this.blob = function() {
      return Promise.resolve(new Blob([this.body]))
    }

    this.formData = function() {
      throw 'Not implemented yet'
    }

    this.json = function() {
      var body = this.body
      return new Promise(function(resolve, reject) {
        try {
          resolve(JSON.parse(body))
        } catch (ex) {
          reject(ex)
        }
      })
    }

    this.text = function() {
      return Promise.resolve(this.body)
    }

    return this
  }

  function Request(url, options) {
    options = options || {}
    this.url = url
    this.body = options.body
    this.credentials = options.credentials || null
    this.headers = new Headers(options.headers)
    this.method = options.method || 'GET'
    this.mode = options.mode || null
    this.referrer = null
  }

  function encode(params) {
    return Object.getOwnPropertyNames(params).filter(function(name) {
      return params[name] !== undefined
    }).map(function(name) {
      var value = (params[name] === null) ? '' : params[name]
      return encodeURIComponent(name) + '=' + encodeURIComponent(value)
    }).join('&').replace(/%20/g, '+')
  }

  function isObject(value) {
    try {
      return Object.getPrototypeOf(value) === Object.prototype
    } catch (ex) {
      // Probably a string literal.
      return false
    }
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
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: headers(xhr)
        }
        resolve(new Response(xhr.responseText, options))
      }

      xhr.onerror = function() {
        reject()
      }

      xhr.open(self.method, self.url)

      self.headers.forEach(function(name, values) {
        values.forEach(function(value) {
          xhr.setRequestHeader(name, value)
        })
      })

      var body = self.body
      if (isObject(self.body)) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        body = encode(self.body)
      }
      xhr.send(body)
    })
  }

  Body.call(Request.prototype)

  function Response(body, options) {
    this.body = body
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
})()
