import { fetch, Headers, Request, Response } from './polyfill'

export { fetch, Headers, Request, Response }

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}
