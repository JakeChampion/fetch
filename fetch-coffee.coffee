# we skip if fetch is already defined
return if self.fetch

###
#
# Body
#
###

class Body
  constructor: ->
    @bodyUsed = false

    @_initBody = (body) ->
      @_bodyInit = body

      if typeof body is 'string'
        @_bodyText = body
      else if support.blob and Blob::isPrototypeOf body
        @_bodyBlob = body
      else if support.formData and FormData::isPrototypeOf body
        @_bodyFormData = body
      else if !body
        @_bodyText = ''
      else
        throw new Error 'unsupported BodyInit type'

    if support.blob
      @blob = ->
        return true if consumed this

        if @_bodyBlob
          Promise.resolve @_bodyBlob
        else if @_bodyFormData
          throw new Error 'could not read FormData body as blob'
        else
          Promise.resolve( new Blob [@_bodyText])

      @arrayBuffer = ->
        @blob().then readBlobAsArrayBuffer

    if support.formData
      @formData = -> @text().then decode

    @json = -> @text().then JSON.parse

    @text = ->
      return true if consumed this

      if @_bodyBlob
        readBlobAsText @_bodyBlob
      else if @_bodyFormData
        throw new Error 'could not read FormData body as text'
      else
        Promise.resolve @_bodyText


###
#
# Headers
#
###
class Headers
  constructor: (headers) ->
    @map = {}

    if headers instanceof Headers
      headers.forEach (name, values) ->
        values.forEach (value) ->
          @append name, value
    else if headers
      Object.getOwnPropertyNames(headers).forEach (name) =>
        @append name, headers[name]

  append: (name, value) ->
    name = normalizeName name
    value = normalizeValue value

    @map[name] = @map[name] ? []
    @map[name].push value if value not in @map[name]

  'delete': (name) -> delete @map[normalizeName name]

  get: (name) ->
    values = @map[normalizeName name]
    return if values then values[0] else null

  getAll: (name) -> @map[normalizeName name] || []

  has: (name) -> @map.hasOwnProperty(normalizeName name)

  set: (name, value) -> @map[normalizeName name] = [normalizeValue value]

  forEach: (callback) ->
    Object.getOwnPropertyNames(@map).forEach (name) =>
      callback name, @map[name]

###
#
# Request
# (extends Body)
#
###

class Request extends Body
  constructor: (url, options) ->

    # we call the constructor of Body
    super()

    options = options ? {}
    @url = url
    @credentials = options.credentials || 'omit'
    @headers = new Headers options.headers
    @method = normalizeMethod( options.method || 'GET' )
    @mode = options.mode || null
    @referrer = null

    if @method in ['GET', 'HEAD'] and options.body
      throw new TypeError 'Body not allowed for GET or HEAD requests'

    # here we call the function defined in the Body class
    @_initBody options.body

  fetch: ->
    new Promise (resolve, reject) => # the fat arrow binds this to this function
      xhr = new XMLHttpRequest()
      xhr.withCredentials = true if @credentials is 'cors'

      responseURL = ->

        return xhr.responseURL if 'responseURL' of xhr

        # Avoid security warnings on getResponseHeader
        # when not allowed by CORS
        isHeadersGetter = /^X-Request-URL:/m.test xhr.getAllResponseHeaders()
        return xhr.getResponseHeader 'X-Request-URL' if isHeadersGetter

      xhr.onload = ->
        status = if xhr.status is 1223 then 204 else xhr.status
        if status < 100 or status > 599
          reject new TypeError 'Network request failed'
          return

        options =
          status: status
          statusText: xhr.statustext
          headers: headers xhr
          url: responseURL()

        body = if 'response' of xhr then xhr.response else xhr.responseText
        resolve new Response body, options

      xhr.onerror = -> reject new TypeError 'Network request failed'

      xhr.open @method, @url, true

      xhr.responseType = 'blob' if 'responseType' of xhr and support.blob

      @headers.forEach (name, values) ->
        values.forEach (value) ->
          xhr.setRequestHeader name, value

      xhr.send if typeof @_bodyInit is 'undefined'
        null
      else
        @_bodyInit

###
#
# Response
# (extends Body)
#
###

class Response extends Body
  constructor: (bodyInit, options) ->
    super() # calls the Body constructor
    options = options ? {}
    @_initBody bodyInit
    @type = 'default'
    @url = null
    @status = options.status
    @ok = @status >= 200 and @status < 300
    @statusText = options.statusText
    @headers =
      if options.headers instanceof Headers
        options.headers
      else
        new Headers options.headers
    @url = options.url || ''



###
#
# Functions
#
###

# normalizeName
# -------------
normalizeName = (name) ->
  name = name.toString() if typeof name isnt 'string'

  if /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test name
    throw new TypeError('Invalid character in header field name')

  name.toLowerCase()

# normalizeValue
# --------------
normalizeValue = (value) ->
  value = if typeof value is 'string' then value else value.toString()

# consumed
# --------
consumed = (body) ->
  if body.bodyUsed
    return Promise.reject(new TypeError 'Already read')
  else
    body.bodyUsed = true
    return false


# file reader and blob handling
# -----------------------------
fileReaderReady = (reader) ->
  new Promise (resolve, reject) ->
    reader.onload = -> resolve reader.result
    reader.onerror = -> reject reader.error

readBlobAsArrayBuffer = (blob) ->
  reader = new FileReader()
  reader.readAsArrayBuffer blob
  fileReaderReady reader

readBlobAsText = (blob) ->
  reader = new FileReader()
  reader.readAsText blob
  fileReaderReady reader


# features support
# ----------------
support =
  blob: 'FileReader' of self and 'Blob' of self and try
    new Blob()
    true
  catch e
    false
  formData: 'FormData' of self


# HTTP methods whose capitalization should be normalized
# ------------------------------------------------------
methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

normalizeMethod = (method) ->
  upcased = method.toUpperCase()
  if upcased in methods then upcased else method

decode = (body) ->
  form = new FormData()
  for bytes in body.trim().split('&')
    do (bytes) ->
      if bytes
        split = bytes.split '='
        name = split.shift().replace(/\+/g, ' ')
        value = split.join('=').replace(/\+/g, ' ')
        form.append decodeURIComponent(name), decodeURIComponent(value)
  form

# headers
# -------
headers = (xhr) ->
  head = new Headers()
  pairs = xhr.getAllResponseHeaders().trim().split '\n'
  for header in pairs
    do (header) ->
      split = header.trim().split ':'
      key = split.shift().trim()
      value = split.join(':').trim()
      head.append key, value
  head

@Headers = Headers
@Request = Request
@Response = Response
@fetch = (url, options) ->
  new Request(url, options).fetch()
@fetch.polyfill = true
