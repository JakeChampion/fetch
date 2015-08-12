/* jslint node: true */
(function() {
  'use strict';

  var hasSelf = typeof self !== 'undefined';

  var support = {
    blob: hasSelf && 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: hasSelf && 'FormData' in self
  }

  module.exports = support;
})();
