/* globals exports */
exports.beforeStart = function(context) {
  var originalResourceError = context.page.onResourceError
  context.page.onResourceError = function(resErr) {
    if (!/\/boom$/.test(resErr.url)) {
      originalResourceError(resErr)
    }
  }
}
