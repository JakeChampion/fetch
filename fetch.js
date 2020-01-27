import {fetch, Headers, Request, Response, DOMException} from './polyfill'

export {fetch, Headers, Request, Response, DOMException}

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}
