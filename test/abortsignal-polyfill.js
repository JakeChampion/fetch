// Simple AbortSignal polyfill used for testing.
(function(self) {
  'use strict';

  if (self.AbortSignal) {
    return
  }

  // Polyfill EventTarget if not available.
  self.EventTarget = self.EventTarget || (function () {
    function EventTarget () {
      this._listeners = {}
    }
    EventTarget.prototype.addEventListener = function(name, fn) {
      if (!(name in this._listeners)) {
        this._listeners[name] = []
      }
      this._listeners[name].push(fn)
    }
    EventTarget.prototype.removeEventListener = function(name, fn) {
      if (!(name in this._listeners)) {
        return
      }
      var stack = this._listeners[name]
      for (var i = 0; i < stack.length; i++) {
        if (stack[i] === fn){
          stack.splice(i, 1)
          return
        }
      }
    }
    EventTarget.prototype.dispatchEvent = function(event) {
      if (!(event.type in this._listeners)) {
        return
      }
      function debounce (fn) {
        setTimeout(function () {
          fn.call(this, event)
        }, 0)
      }
      var stack = this._listeners[event.type]
      for (var i = 0; i < stack.length; i++) {
        debounce(stack[i])
      }
    }

    return EventTarget
  })();

  function AbortSignal () {
    self.EventTarget.call(this)
    this.aborted = false
  }
  AbortSignal.prototype = Object.create(self.EventTarget.prototype)
  AbortSignal.prototype.constructor = AbortSignal

  AbortSignal.prototype.dispatchEvent = function(event) {
    if (event.type === 'abort'){
      this.aborted = true
      if (typeof this.onabort === 'function') {
        this.onabort.call(this, event)
      }
    }
    self.EventTarget.prototype.dispatchEvent.call(this, event)
  }

  self.AbortSignal = AbortSignal
})(typeof self !== 'undefined' ? self : this);