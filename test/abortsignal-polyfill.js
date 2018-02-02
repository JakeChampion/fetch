// Simple AbortSignal polyfill used for testing.
(function(self) {
  'use strict';

  if (self.AbortSignal) {
    return
  }

  // Polyfill EventTarget if not available.
  self.EventTarget = self.EventTarget || (function () {
    function EventTarget () {
      this.listeners = {}
    }
    EventTarget.prototype.listeners = null;
    EventTarget.prototype.addEventListener = function(type, callback) {
      if (!(type in this.listeners)) {
        this.listeners[type] = []
      }
      this.listeners[type].push(callback)
    }
    EventTarget.prototype.removeEventListener = function(type, callback) {
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
    EventTarget.prototype.dispatchEvent = function(event) {
      if (!(event.type in this.listeners)) {
        return
      }
      function debounce (fn) {
        setTimeout(function () {
          fn.call(this, event)
        }, 0)
      }
      var stack = this.listeners[event.type]
      for (var i = 0, l = stack.length; i < l; i++) {
        debounce(stack[i])
      }
      return !event.defaultPrevented
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