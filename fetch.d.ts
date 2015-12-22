interface IInput {
  bodyUsed: boolean
  url: string
  credentials: string
  method: string
  mode: string
  _bodyInit: boolean
}

interface IRequestOptions {
  body?: string
  headers?: Headers
  credentials?: string
  mode?: string
}

interface IResponseOptions {
  type?: string
  status?: number
  statusText?: string
  headers?: Headers
  url?: string
}

declare class Headers {
  constructor(header: any)
  append(name: string, value: any): void
  delete(name: string): void
  get(name: string): any
  getAll(name: string): any[]
  has(name): boolean
  set(name: string): void
  forEach(callback: (thisArg: any, value: any, name: string, context: any) => any, thisArg: any): void
}

declare class Request {
  constructor(input: IInput, options?: IRequestOptions)
  clone(): Request
}

declare class Response {
  constructor(bodyInit: any, options?: IResponseOptions)
  clone(): Response
  static error(): Request
  static redirect(): Request
}

declare class ResponseBody {
  bodyUsed: boolean
  _initBody(body: any): void
  _bodyText: string
  _bodyBlob: Blob
  _bodyFormData: FormData
  blob(): Promise<Blob>
  arrayBuffer(): Promise<Blob>
  text(): Promise<string>
  formData(): Promise<FormData>
  json(): Promise<any>
}

interface IteratorResult<T> {
  done: boolean
  value?: T
}

interface SymbolConstructor {
  prototype: Symbol

  (description?: string|number): symbol

  for(key: string): symbol

  keyFor(sym: symbol): string

  hasInstance: symbol

  isConcatSpreadable: symbol

  iterator: symbol

  match: symbol

  replace: symbol

  search: symbol

  species: symbol

  split: symbol

  toPrimitive: symbol

  toStringTag: symbol

  unscopables: symbol
}

declare var Symbol: SymbolConstructor

interface Symbol {
  toString(): string

  valueOf(): Object

  [Symbol.toStringTag]: string
}

interface Iterator<T> {
  next(value?: any): IteratorResult<T>
  return?(value?: any): IteratorResult<T>
  throw?(e?: any): IteratorResult<T>
}

interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>
}

interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator](): IterableIterator<T>
}

interface PromiseLike<T> {
  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): PromiseLike<TResult>
  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): PromiseLike<TResult>
}

interface Promise<T> {

  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>
  then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>

  catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>
  catch(onrejected?: (reason: any) => void): Promise<T>

  [Symbol.toStringTag]: string
}

interface PromiseConstructor {
  prototype: Promise<any>

  new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>

  all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>

  race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>

  reject(reason: any): Promise<void>

  reject<T>(reason: any): Promise<T>

  resolve<T>(value: T | PromiseLike<T>): Promise<T>

  resolve(): Promise<void>

  [Symbol.species]: Function
}

declare var fetch: (input: any, init?: IRequestOptions) => Promise<ResponseBody>

export default fetch
