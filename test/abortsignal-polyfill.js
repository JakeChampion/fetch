// AbortSignal polyfill
(function(self) {
  'use strict';

  if (self.AbortSignal) {
    return
  }

  function Emitter () {
    this.listeners = {}
  }
  Emitter.prototype.listeners = null;
  Emitter.prototype.addEventListener = function(type, callback) {
    if (!(type in this.listeners)) {
      this.listeners[type] = []
    }
    this.listeners[type].push(callback)
  }
  Emitter.prototype.removeEventListener = function(type, callback) {
    if (!(type in this.listeners)) {
      return
    }
    var stack = this.listeners[type]
    for (var i = 0, l = stack.length; i < l; i++) {
      if (stack[i] === callback){
        stack.splice(i, 1)
        return
      }
    }
  }
  Emitter.prototype.dispatchEvent = function(event) {
    if (!(event.type in this.listeners)) {
      return
    }
    var self = this
    function debounce (fn) {
      setTimeout(function () {
        fn.call(self, event)
      }, 0)
    }
    var stack = this.listeners[event.type]
    for (var i = 0, l = stack.length; i < l; i++) {
      debounce(stack[i])
    }
    return !event.defaultPrevented
  }

  function AbortSignal () {
    Emitter.call(this)
    this.aborted = false
  }
  AbortSignal.prototype = Object.create(Emitter.prototype)
  AbortSignal.prototype.constructor = AbortSignal

  AbortSignal.prototype.dispatchEvent = function(event) {
    if (event.type === 'abort'){
      this.aborted = true
      if (typeof this.onabort === 'function') {
        this.onabort.call(this, event)
      }
    }
    Emitter.prototype.dispatchEvent.call(this, event)
  }

  self.AbortSignal = AbortSignal
})(typeof self !== 'undefined' ? self : this);