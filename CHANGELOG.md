# Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

## [3.6.20](https://github.com/JakeChampion/fetch/compare/v3.6.19...v3.6.20) (2023-12-13)


### Bug Fixes

* Response.error().ok === false ([#1412](https://github.com/JakeChampion/fetch/issues/1412)) ([27e1c75](https://github.com/JakeChampion/fetch/commit/27e1c75f830f0b70a40b511e03652776951aca75))

## [3.6.19](https://github.com/JakeChampion/fetch/compare/v3.6.18...v3.6.19) (2023-09-11)


### Bug Fixes

* Have unique error messages for xhr timeouts and errors ([#1380](https://github.com/JakeChampion/fetch/issues/1380)) ([7170f0b](https://github.com/JakeChampion/fetch/commit/7170f0b127d16c5895aba61c9168482834809046))


## [v3.6.18](https://github.com/JakeChampion/fetch/compare/v3.6.17...v3.6.18)

- Fix - File fetching broken since commit 0c1d2b9 [`#1375`](https://github.com/JakeChampion/fetch/pull/1375)
- Remove broken links [`1dc07c6`](https://github.com/JakeChampion/fetch/commit/1dc07c6064a32e989306fb2324204c56c93140fe)
- automatically generate a changelog [`0e7d1dd`](https://github.com/JakeChampion/fetch/commit/0e7d1dd95826b3b76510f0832784207f2609145e)

## [v3.6.17](https://github.com/JakeChampion/fetch/compare/v3.6.16...v3.6.17)

> 20 July 2023

- Revert "Resolves https://github.com/JakeChampion/fetch/issues/928" [`#928`](https://github.com/JakeChampion/fetch/issues/928)

## [v3.6.16](https://github.com/JakeChampion/fetch/compare/v3.6.15...v3.6.16)

> 18 July 2023

- Resolves https://github.com/JakeChampion/fetch/issues/928 [`#928`](https://github.com/JakeChampion/fetch/issues/928)

## [v3.6.15](https://github.com/JakeChampion/fetch/compare/v3.6.14...v3.6.15)

> 18 July 2023

- fix https://github.com/JakeChampion/fetch/issues/997 [`#997`](https://github.com/JakeChampion/fetch/issues/997)

## [v3.6.14](https://github.com/JakeChampion/fetch/compare/v3.6.13...v3.6.14)

> 18 July 2023

- Fix https://github.com/JakeChampion/fetch/issues/1076 [`#1076`](https://github.com/JakeChampion/fetch/issues/1076)

## [v3.6.13](https://github.com/JakeChampion/fetch/compare/v3.6.12...v3.6.13)

> 18 July 2023

- respect charset within readBlobAsText [`#1059`](https://github.com/JakeChampion/fetch/issues/1059)

## [v3.6.12](https://github.com/JakeChampion/fetch/compare/v3.6.11...v3.6.12)

> 18 July 2023

- fix: Headers only accepts array which have nested array of length 2 [`#1235`](https://github.com/JakeChampion/fetch/issues/1235)

## [v3.6.11](https://github.com/JakeChampion/fetch/compare/v3.6.10...v3.6.11)

> 18 July 2023

- Define Body.arrayBuffer even if support.blob is false [`#992`](https://github.com/JakeChampion/fetch/issues/992)

## [v3.6.10](https://github.com/JakeChampion/fetch/compare/v3.6.9...v3.6.10)

> 18 July 2023

- use globals if they exist [`dffc542`](https://github.com/JakeChampion/fetch/commit/dffc542fe7140f35ee7fec29e3da67f3bf080910)

## [v3.6.9](https://github.com/JakeChampion/fetch/compare/v3.6.8...v3.6.9)

> 18 July 2023

- fix: when no body supplied, do not set bodyUsed to true [`7d92dff`](https://github.com/JakeChampion/fetch/commit/7d92dff12d7c4058b57c7e77adeb0a76ffab639f)

## [v3.6.8](https://github.com/JakeChampion/fetch/compare/v3.6.7...v3.6.8)

> 18 July 2023

- validate status is in range [`#1213`](https://github.com/JakeChampion/fetch/issues/1213)

## [v3.6.7](https://github.com/JakeChampion/fetch/compare/v3.6.6...v3.6.7)

> 18 July 2023

- dont shadow `global` [`#1026`](https://github.com/JakeChampion/fetch/issues/1026)
- dont use github  eslint [`408d3b6`](https://github.com/JakeChampion/fetch/commit/408d3b60e27abef325dd898d899430c46a0012b2)
- remove invalid-headers test [`e3f6590`](https://github.com/JakeChampion/fetch/commit/e3f65907924b7692af7c08cd92044456bc92ad8b)
- Update lock.yml permissions [`e97321b`](https://github.com/JakeChampion/fetch/commit/e97321bc081e80275397fc4c7a990791aa8b3524)

## [v3.6.6](https://github.com/JakeChampion/fetch/compare/v3.6.5...v3.6.6)

> 18 July 2023

- fix: ignore not throw on invalid response headers [`#930`](https://github.com/JakeChampion/fetch/issues/930)

## [v3.6.5](https://github.com/JakeChampion/fetch/compare/v3.6.4...v3.6.5)

> 18 July 2023

- Add some missed methods which should be normalized as uppercase [`a43b628`](https://github.com/JakeChampion/fetch/commit/a43b6283833c403230bb1a5238e2d7ac435c52da)
- Update caniuse link to use HTTPS and new pattern [`fb5b0cf`](https://github.com/JakeChampion/fetch/commit/fb5b0cf42b470faf8c5448ab461d561f34380a30)

## [v3.6.4](https://github.com/JakeChampion/fetch/compare/v3.6.3...v3.6.4)

> 18 July 2023

- always set a signal on Request [`d1d09fb`](https://github.com/JakeChampion/fetch/commit/d1d09fb8039b4b8c7f2f5d6c844ea72d8a3cefe6)

## [v3.6.3](https://github.com/JakeChampion/fetch/compare/v3.6.2...v3.6.3)

> 18 July 2023

- Compatible global equals to the false [`7727e50`](https://github.com/JakeChampion/fetch/commit/7727e50493eafae9a7005f10f18f81e5bbcbfdd3)

## [v3.6.2](https://github.com/JakeChampion/fetch/compare/v3.6.1...v3.6.2)

> 27 February 2021

- Revert "Represent non-stringified JSON request body as an [object Object] string" [`e42f201`](https://github.com/JakeChampion/fetch/commit/e42f201b8b0af8b3f2615abe8161c8087f52f1b2)

## [v3.6.1](https://github.com/JakeChampion/fetch/compare/v3.6.0...v3.6.1)

> 18 February 2021

- Fix MSIE compatibility [`da97bdb`](https://github.com/JakeChampion/fetch/commit/da97bdb462632288b21eeca67fc6b93c7077ebae)
- use var instead of const [`5d3952d`](https://github.com/JakeChampion/fetch/commit/5d3952d10736a98a550043b933c50800643e2756)
- Restore package.json [`6b4bd97`](https://github.com/JakeChampion/fetch/commit/6b4bd971b1e415a347cf20db4b925d1b845669a9)

## [v3.6.0](https://github.com/JakeChampion/fetch/compare/v3.5.0...v3.6.0)

> 18 February 2021

- Fix statusText: undefined should give '' and null should give 'null' [`b5c8bd0`](https://github.com/JakeChampion/fetch/commit/b5c8bd0fee1530f1c204cc5c68b427a3498dbdad)
- Represent non-stringified JSON request body as an [object Object] string [`5c6b055`](https://github.com/JakeChampion/fetch/commit/5c6b055e6ae6f718f416c94bfcdc89693d0abdcb)
- Fix eslint and eslint-plugin-github dependency conflicts [`190e698`](https://github.com/JakeChampion/fetch/commit/190e698f8e737ad751a11de60f6b8b3301fa557b)

## [v3.5.0](https://github.com/JakeChampion/fetch/compare/v3.4.1...v3.5.0)

> 6 November 2020

- Fixes #748 [`#748`](https://github.com/JakeChampion/fetch/issues/748)
- Create lock.yml [`8767781`](https://github.com/JakeChampion/fetch/commit/87677811d543cfb44b124e026b50f710e95017ec)

## [v3.4.1](https://github.com/JakeChampion/fetch/compare/v3.4.0...v3.4.1)

> 7 September 2020

- Add npmignore file to ensure we always publish the dist directory [`7ca02eb`](https://github.com/JakeChampion/fetch/commit/7ca02eb0234b0a61fd711d922b2e69d3c5390516)
- Make the clean task remove the dist directory and the default task create it [`fd23745`](https://github.com/JakeChampion/fetch/commit/fd23745f3474cd23d88e5128d8bc74813be1aff0)

## [v3.4.0](https://github.com/JakeChampion/fetch/compare/v3.3.1...v3.4.0)

> 7 August 2020

- Use globalThis as the global object if it exists [`96c2651`](https://github.com/JakeChampion/fetch/commit/96c26512608a0081d493df4fc17da4394bd1b410)

## [v3.3.1](https://github.com/JakeChampion/fetch/compare/v3.3.0...v3.3.1)

> 4 August 2020

- rename variable to no longer shadow over function of same name [`c5db762`](https://github.com/JakeChampion/fetch/commit/c5db7621c3b1530683b8f706388d4ac210a2db02)
- remove semicolon to pass linting [`f264aa5`](https://github.com/JakeChampion/fetch/commit/f264aa5704f7431c429ec16e6fdd3c7034c7f2d9)

## [v3.3.0](https://github.com/JakeChampion/fetch/compare/v3.2.0...v3.3.0)

> 4 August 2020

- Make Response.arrayBuffer() always resolve with a `ArrayBuffer` [`#801`](https://github.com/github/fetch/issues/801)
- Stop using top-level `this` to stop rollup warning [`#802`](https://github.com/github/fetch/issues/802)
- Recommend an AbortController polyfill which is fully synchronous [`#800`](https://github.com/github/fetch/issues/800)
- Add keepalive caveat [`#780`](https://github.com/github/fetch/issues/780)
- Throw a TypeError if Request or Response functions are called without `new` [`5ef028d`](https://github.com/JakeChampion/fetch/commit/5ef028d61f6c1543603cdacbe0f8a0f00d5957c0)
- If headers are passed in via a Record then do not normalise the header names as part of the request [`b65ed60`](https://github.com/JakeChampion/fetch/commit/b65ed608604492d605df2d62cd4c5050e2a8d508)
- Update fetch.js [`37b55c2`](https://github.com/JakeChampion/fetch/commit/37b55c27413b902cef4e629892424ae469fb1ea2)

## [v3.2.0](https://github.com/JakeChampion/fetch/compare/v3.1.1...v3.2.0)

> 9 July 2020

- Detect if DOMException exists via typeof instead of trying to call it and catching the exception which may get thrown [`#724`](https://github.com/github/fetch/issues/724)
- use `this` if `self` is not defined [`#657`](https://github.com/github/fetch/issues/657)
- create variable called `global` which is either `self` or `this` [`a0783a5`](https://github.com/JakeChampion/fetch/commit/a0783a5571018191578cc08d5b3bac61a0b64562)
- Add support for no-cache and no-store via a cache-busting querystring parameter [`a0dcd85`](https://github.com/JakeChampion/fetch/commit/a0dcd853f8ed29d06a022f92c87c303bd0e1f1bf)
- make global `this` correct when using rollup [`6e9fc0e`](https://github.com/JakeChampion/fetch/commit/6e9fc0ee026dd89d864c3d176c57789ee5615114)

## [v3.1.1](https://github.com/JakeChampion/fetch/compare/v3.1.0...v3.1.1)

> 8 July 2020

- check if Content-Type header exists prior to  examining the value [`#792`](https://github.com/JakeChampion/fetch/pull/792)
- Move from Travis to GitHub Actions [`#793`](https://github.com/JakeChampion/fetch/pull/793)

## [v3.1.0](https://github.com/JakeChampion/fetch/compare/v3.0.1...v3.1.0)

> 29 June 2020

## [v3.0.1](https://github.com/JakeChampion/fetch/compare/v3.0.0...v3.0.1)

> 8 July 2020

- check if Content-Type header exists prior to  examining the value [`#792`](https://github.com/JakeChampion/fetch/pull/792)
- Move from Travis to GitHub Actions [`#793`](https://github.com/JakeChampion/fetch/pull/793)
- Co-authored-by: Jake Champion &lt;me@jakechampion.name&gt; [`#575`](https://github.com/JakeChampion/fetch/pull/575)
- work around IE XHR bug with '' URL Fixes #618 [`#619`](https://github.com/JakeChampion/fetch/pull/619)
- Allow exclamation mark as valid header character [`#745`](https://github.com/JakeChampion/fetch/pull/745)
- Avoid blob conversion for specific requests [`#752`](https://github.com/JakeChampion/fetch/pull/752)
- Compatibility for fetch-mock using proxy-pollyfill [`#736`](https://github.com/JakeChampion/fetch/pull/736)
- Change default statusText for Response [`#698`](https://github.com/JakeChampion/fetch/pull/698)
- Document more common pitfalls in the README [`#734`](https://github.com/JakeChampion/fetch/pull/734)
- field name can not by empty [`#684`](https://github.com/JakeChampion/fetch/pull/684)
- work around IE XHR bug with '' URL Fixes #618 (#619) [`#618`](https://github.com/JakeChampion/fetch/issues/618)
- Clarify what parts of the standard we don't want to implement [`#661`](https://github.com/JakeChampion/fetch/issues/661)
- Document more caveats [`9a0bce2`](https://github.com/JakeChampion/fetch/commit/9a0bce23454cdd5beefd9d4c599664003573e581)
- Fix issue #533 [`7f030fa`](https://github.com/JakeChampion/fetch/commit/7f030fab4d79433204331cefe365f5fbbab9e992)
- Compatibility with newer eslint-plugin-github [`1821b74`](https://github.com/JakeChampion/fetch/commit/1821b74b808152d4d6e787c21165f2d569c2a7c4)


### [v3.0.0](https://github.com/JakeChampion/fetch/compare/v2.0.4...v3.0.0)

> 7 September 2018

- Add flow definitions [`#654`](https://github.com/JakeChampion/fetch/pull/654)
- Match spec behavior re: unsupported body type [`#651`](https://github.com/JakeChampion/fetch/pull/651)
- Update Karma and detect available browsers when testing [`#652`](https://github.com/JakeChampion/fetch/pull/652)
- Adopt Contributor Covenant Code of Conduct [`#649`](https://github.com/JakeChampion/fetch/pull/649)
- Change `credentials` default value to `same-origin` [`#640`](https://github.com/JakeChampion/fetch/pull/640)
- Switch test suite from PhantomJS to Karma [`#626`](https://github.com/JakeChampion/fetch/pull/626)
- Support abort API [`#592`](https://github.com/JakeChampion/fetch/pull/592)
- build/distribute as UMD [`#616`](https://github.com/JakeChampion/fetch/pull/616)
- Test signal reuse. Add AbortSignal polyfill. [`#2`](https://github.com/JakeChampion/fetch/pull/2)
- Clear abort event listener for all xhr completion states. [`#1`](https://github.com/JakeChampion/fetch/pull/1)
- Expand install & importing documentation [`#569`](https://github.com/JakeChampion/fetch/issues/569)
- Match spec behavior re: unsupported body type [`#576`](https://github.com/JakeChampion/fetch/issues/576)
- Run test files through prettier [`0a57487`](https://github.com/JakeChampion/fetch/commit/0a5748775d99f882172375693f56761383f8faf3)
- Unwrap `fetch.js` to be a clean module file [`8aec47c`](https://github.com/JakeChampion/fetch/commit/8aec47cb6c67a9a321f1eb07457f70fc46235610)
- Switch from PhantomJS to Karma + Chrome/Firefox for testing [`b539589`](https://github.com/JakeChampion/fetch/commit/b53958904649bfeb784083b9b7e0b89902c7d30e)

## [v2.0.4](https://github.com/JakeChampion/fetch/compare/v2.0.3...v2.0.4)

> 29 March 2018

- Create CONTRIBUTING.md [`#604`](https://github.com/JakeChampion/fetch/pull/604)
- Tweak the wording of the “Read this first” section [`#553`](https://github.com/JakeChampion/fetch/pull/553)
- Allow undefined Response status [`#534`](https://github.com/JakeChampion/fetch/pull/534)
- Ensure cookies aren't sent if `credentials: omit` [`#526`](https://github.com/JakeChampion/fetch/pull/526)
- Added yarn command as option to installation [`#492`](https://github.com/JakeChampion/fetch/pull/492)
- Add global replace for processing raw headers [`#496`](https://github.com/JakeChampion/fetch/pull/496)
- Added safari to native fetch browser support. [`#469`](https://github.com/JakeChampion/fetch/pull/469)
- Support obs-fold as header delimiter [`#491`](https://github.com/JakeChampion/fetch/pull/491)
- Tweak the wording of "Read this first" [`54dc3f8`](https://github.com/JakeChampion/fetch/commit/54dc3f823fe3e6452da8d19bf7aad7eda4cd1dd8)
- Add test for undefined Response status [`0ecdd40`](https://github.com/JakeChampion/fetch/commit/0ecdd40c50d4bcdfd4d2a09448a6d01089dc182a)
- Fix cookie test with newer versions of Node [`7831671`](https://github.com/JakeChampion/fetch/commit/7831671b172435c52064f588cf7145236fecf5f2)

## [v2.0.3](https://github.com/JakeChampion/fetch/compare/v2.0.2...v2.0.3)

> 2 March 2017

- Accept array in Headers constructor [`#485`](https://github.com/JakeChampion/fetch/pull/485)
- Improve README language [`#483`](https://github.com/JakeChampion/fetch/pull/483)
- Fix grammar mistake in README [`#468`](https://github.com/JakeChampion/fetch/pull/468)
- Remove bower version from release instructions [`5cc72dd`](https://github.com/JakeChampion/fetch/commit/5cc72dd734bfd459a61a61e472c90654d71afc91)
- Remove extra punctuation [`eebaa2a`](https://github.com/JakeChampion/fetch/commit/eebaa2a1bc21eeba98ee00c9f94a0a4c2007cff1)
- Fetch 2.0.3 [`d4ed806`](https://github.com/JakeChampion/fetch/commit/d4ed806fdcbdeaef707d27f6c88943f0336a647d)

## [v2.0.2](https://github.com/JakeChampion/fetch/compare/v2.0.1...v2.0.2)

> 19 January 2017

- Treat any non-Request arg to `new Request()` as string url [`#465`](https://github.com/JakeChampion/fetch/pull/465)
- Support Tolerance Provision when parsing headers [`#449`](https://github.com/JakeChampion/fetch/pull/449)
- Add test for cloning GET request [`#440`](https://github.com/JakeChampion/fetch/issues/440)
- Detect broken URL support in PhantomJS and skip test [`b285e61`](https://github.com/JakeChampion/fetch/commit/b285e61fbc4dc21d4b5f7a498046bdff585abf1b)
- Remove secrets [`9240ef4`](https://github.com/JakeChampion/fetch/commit/9240ef453a1ebc3670b8377f9deb771d684e7f68)
- fetch 2.0.2 [`b337f95`](https://github.com/JakeChampion/fetch/commit/b337f9578fa8e21fa5c9fe8d6eb74baaa43a1c02)

## [v2.0.1](https://github.com/JakeChampion/fetch/compare/v2.0.0...v2.0.1)

> 17 November 2016

- Fix misspelling of [ae]ffect [`#432`](https://github.com/JakeChampion/fetch/pull/432)
- Fix reading ArrayBuffer into string on older browsers [`6f8529e`](https://github.com/JakeChampion/fetch/commit/6f8529e4c5ceacc92c97f58a9bc6538879978f3c)
- Only define `arrayBuffer()` if Blob is also supported [`3d3bb0c`](https://github.com/JakeChampion/fetch/commit/3d3bb0ca72172b224e8101c0a5264adc41f53929)
- Display uncaught errors on the test results page [`54ec096`](https://github.com/JakeChampion/fetch/commit/54ec0965c25a9889e5ba597421faf7b0790de026)

### [v2.0.0](https://github.com/JakeChampion/fetch/compare/v1.1.1...v2.0.0)

> 14 November 2016

- Change Headers multiple value handling for spec compatibility [`#429`](https://github.com/JakeChampion/fetch/pull/429)
- Firefox now implements `Headers.forEach` natively [`468f877`](https://github.com/JakeChampion/fetch/commit/468f877e4447a2b267236f2f8fa4f1492c0dd20b)
- fetch 2.0.0 [`c576d61`](https://github.com/JakeChampion/fetch/commit/c576d61fee39bb34699bbe870460b6120011150a)

## [v1.1.1](https://github.com/JakeChampion/fetch/compare/v1.1.0...v1.1.1)

> 17 November 2016

- Fix reading ArrayBuffer into string on older browsers [`1ddcadb`](https://github.com/JakeChampion/fetch/commit/1ddcadb2418c4cf0b206857f424a9af58c0ed57f)
- Only define `arrayBuffer()` if Blob is also supported [`c2556f3`](https://github.com/JakeChampion/fetch/commit/c2556f3ed41a238df4ee384fd8e4c404f3971e64)
- fetch 1.1.1 [`f7a5148`](https://github.com/JakeChampion/fetch/commit/f7a514829820fc77c0f884c74cf2d36356a781c0)

## [v1.1.0](https://github.com/JakeChampion/fetch/compare/v1.0.0...v1.1.0)

> 14 November 2016

- Support ArrayBufferView types as POST body [`#430`](https://github.com/JakeChampion/fetch/pull/430)
- Spec compatibility for Request/Response constructors and cloning [`#428`](https://github.com/JakeChampion/fetch/pull/428)
- Improve Readme [`#427`](https://github.com/JakeChampion/fetch/pull/427)
- Fix grammar [`#408`](https://github.com/JakeChampion/fetch/pull/408)
- Fixed typo in README.md [`#403`](https://github.com/JakeChampion/fetch/pull/403)
- make X-Request-URL header case-insensitive [`#384`](https://github.com/JakeChampion/fetch/pull/384)
- Better error handling with Saucelabs [`#354`](https://github.com/JakeChampion/fetch/pull/354)
- Update Webpack section in README [`#331`](https://github.com/JakeChampion/fetch/pull/331)
- Attach FileReader event handlers before calling its `read*` method [`#353`](https://github.com/JakeChampion/fetch/issues/353)
- Default Response status is 200 OK [`#376`](https://github.com/JakeChampion/fetch/issues/376)
- Support ArrayBuffer in BodyInit [`#350`](https://github.com/JakeChampion/fetch/issues/350)
- Avoid consuming body when cloning [`#308`](https://github.com/JakeChampion/fetch/issues/308) [`#335`](https://github.com/JakeChampion/fetch/issues/335)
- Rework parsing of raw response HTTP headers [`#422`](https://github.com/JakeChampion/fetch/issues/422)
- Allow reusing the same GET Request instance multiple times [`#411`](https://github.com/JakeChampion/fetch/issues/411)
- Always construct a new Headers instance in Response [`#416`](https://github.com/JakeChampion/fetch/issues/416)
- Rework the Installation section [`#415`](https://github.com/JakeChampion/fetch/issues/415)
- More information about cookies [`#393`](https://github.com/JakeChampion/fetch/issues/393)
- It looks like Safari 10 didn't ship with native fetch [`#401`](https://github.com/JakeChampion/fetch/issues/401)
- Reorganize tests with the new "fetch method" suite [`ba7ffda`](https://github.com/JakeChampion/fetch/commit/ba7ffda7b2bf6b9183fbca04120c042babd17f00)
- Share identical tests between Request & Response [`9a04a06`](https://github.com/JakeChampion/fetch/commit/9a04a0667b92dba567746b26b553ab9a329fa94d)
- ArrayBuffer can now be consumed through `blob()`/`text()` [`9a703ba`](https://github.com/JakeChampion/fetch/commit/9a703ba38ff3bddc94c8929c1e8fae5d766462cd)

### [v1.0.0](https://github.com/JakeChampion/fetch/compare/v0.11.1...v1.0.0)

> 28 April 2016

- refactor Header iterator methods [`#317`](https://github.com/JakeChampion/fetch/pull/317)
- Add ES2015+ example [`#287`](https://github.com/JakeChampion/fetch/pull/287)
- Switch to `mocha-phantomjs-core` and system PhantomJS [`#314`](https://github.com/JakeChampion/fetch/pull/314)
- Reject promise on request timeout [`#306`](https://github.com/JakeChampion/fetch/pull/306)
- Use uppercase methods in README [`#272`](https://github.com/JakeChampion/fetch/pull/272)
- Guard against `xhr.getAllResponseHeaders()` being `null` [`#289`](https://github.com/JakeChampion/fetch/pull/289)
- Add support for URLSearchParams POST body [`#304`](https://github.com/JakeChampion/fetch/pull/304)
- Add Headers iterators [`#295`](https://github.com/JakeChampion/fetch/pull/295)
- fix example [`#282`](https://github.com/JakeChampion/fetch/pull/282)
- Drop IE-specific status codes workarounds and require IE10+ [`#270`](https://github.com/JakeChampion/fetch/pull/270)
- Reject promise on request timeout [`#294`](https://github.com/JakeChampion/fetch/issues/294)
- Make Headers iterable if Symbol is available [`a1b7674`](https://github.com/JakeChampion/fetch/commit/a1b7674b6942d4265ea47b74760a486b2bf5e3da)
- Support URLSearchParams POST body [`d77810a`](https://github.com/JakeChampion/fetch/commit/d77810a15c78bbbaf2defd4ea3af6db21c8d117f)
- Fix formatting [`edb7c73`](https://github.com/JakeChampion/fetch/commit/edb7c7336f53b5c0e08ef0ccb37e43c8d9de778f)

## [v0.11.1](https://github.com/JakeChampion/fetch/compare/v0.11.0...v0.11.1)

> 5 May 2016

- Reject promise on request timeout [`#294`](https://github.com/JakeChampion/fetch/issues/294)
- Fix formatting [`3fc66ed`](https://github.com/JakeChampion/fetch/commit/3fc66edc4c0f61a60b2debfca276a7a8140aa2c9)
- Fetch 0.11.1 [`7d9a11d`](https://github.com/JakeChampion/fetch/commit/7d9a11deec5c0ea2d453390be647ba52695166f8)
- Guard against `xhr.getAllResponseHeaders()` being `null` [`8deb829`](https://github.com/JakeChampion/fetch/commit/8deb8296681f6ad0990e0af47b99d71f2a1d1701)

## [v0.11.0](https://github.com/JakeChampion/fetch/compare/v0.10.1...v0.11.0)

> 19 January 2016

- Handle cases where `self` isn't defined [`#253`](https://github.com/JakeChampion/fetch/pull/253)
- Exercise both polyfill and native `fetch` in test suite [`#258`](https://github.com/JakeChampion/fetch/pull/258)
- Make fetch add a `Content-Type` header based on the type of the body. [`1e4a615`](https://github.com/JakeChampion/fetch/commit/1e4a6151e6a1f4e2e792f7faa0a028498a7be973)
- Cleanup in determining implicit content-type [`3b5dc9c`](https://github.com/JakeChampion/fetch/commit/3b5dc9c17f2be9ca1a2e7030dd8209f0b150bc70)
- Render main test suite as root resource of test server [`b043384`](https://github.com/JakeChampion/fetch/commit/b043384e2d7b68b10172a64e5c5b00a593cd41c3)

## [v0.10.1](https://github.com/JakeChampion/fetch/compare/v0.10.0...v0.10.1)

> 2 November 2015

- Allow making a POST request with an ArrayBuffer body [`#227`](https://github.com/JakeChampion/fetch/pull/227)
- Run Sauce Labs CI for pull requests [`#220`](https://github.com/JakeChampion/fetch/pull/220)
- Streamline Sauce Labs API interactions [`07dc8ae`](https://github.com/JakeChampion/fetch/commit/07dc8ae4cc9a46ad4af35c99a8bdc0b83fbae28b)
- Download and start Sauce Connect manually [`b3885b4`](https://github.com/JakeChampion/fetch/commit/b3885b4eceb4a818e7f8d2d290f89f4d8eaeb0d3)
- Switch to my credentials for npm publish from CI [`e0a4851`](https://github.com/JakeChampion/fetch/commit/e0a48518734aac116f49962c825522ab99da8338)

## [v0.10.0](https://github.com/JakeChampion/fetch/compare/v0.9.0...v0.10.0)

> 12 October 2015

- Remove moot `version` property from bower.json [`#159`](https://github.com/JakeChampion/fetch/pull/159)
- Use absolute URL in Response.redirect test [`#219`](https://github.com/JakeChampion/fetch/pull/219)
- Support Response.error() and Response.redirect() [`#212`](https://github.com/JakeChampion/fetch/pull/212)
- Reject the Promise returned by fetch() when Request ctor throws [`#217`](https://github.com/JakeChampion/fetch/pull/217)
- Fix incorrect assertion [`#216`](https://github.com/JakeChampion/fetch/pull/216)
- Remove superfluous assignment [`#213`](https://github.com/JakeChampion/fetch/pull/213)
- Add webpack usage link. [`#195`](https://github.com/JakeChampion/fetch/pull/195)
- Allow passing a Request instance to Request constructor [`#179`](https://github.com/JakeChampion/fetch/pull/179)
- Properly convert undefined/null header values to strings. [`#156`](https://github.com/JakeChampion/fetch/pull/156)
- Code of Conduct [`#174`](https://github.com/JakeChampion/fetch/pull/174)
- Improve documentation for `fetch` caveats [`#164`](https://github.com/JakeChampion/fetch/pull/164)
- Opt into new Travis infrastructure [`#158`](https://github.com/JakeChampion/fetch/pull/158)
- Merge branch 'orphan-black' [`#209`](https://github.com/JakeChampion/fetch/issues/209) [`#185`](https://github.com/JakeChampion/fetch/issues/185)
- Add include credentials example. [`#205`](https://github.com/JakeChampion/fetch/issues/205)
- Add `Request.clone()` and `Response.clone()` methods [`46705f7`](https://github.com/JakeChampion/fetch/commit/46705f798e1c6e6c9ef03156a8ec8f64c9971d69)
- Fix and simplify `Request.clone()` [`fd362dd`](https://github.com/JakeChampion/fetch/commit/fd362ddb1dcb6918cf8203c99f40d7fed019afc4)
- Expand caveats with notes about cookies [`184b647`](https://github.com/JakeChampion/fetch/commit/184b64719f90ba0cc88c6eeb43c9a2a7ea5fb726)

## [v0.9.0](https://github.com/JakeChampion/fetch/compare/v0.8.2...v0.9.0)

> 29 May 2015

- Implement Headers#forEach correctly [`#150`](https://github.com/JakeChampion/fetch/pull/150)
- Test forEach. [`2f442ce`](https://github.com/JakeChampion/fetch/commit/2f442cebf84f3e7057e2d94408a1b9ec4643c783)
- Fix forEach parameters. [`0449483`](https://github.com/JakeChampion/fetch/commit/0449483b4ab1e9184e74302e1c6fb17e9cd44a75)
- Accept a thisArg forEach parameter. [`bd2fe03`](https://github.com/JakeChampion/fetch/commit/bd2fe03140cfdaf4bd38ca5b4798c775a58b6fd5)

## [v0.8.2](https://github.com/JakeChampion/fetch/compare/v0.8.1...v0.8.2)

> 19 May 2015

- Set xhr.withCredentials after xhr.open called. [`a847967`](https://github.com/JakeChampion/fetch/commit/a847967a0314a574dada2c31e1825f75ed6dc24a)
- Only support standard options. [`cc9f4b0`](https://github.com/JakeChampion/fetch/commit/cc9f4b0e3e2aaa8cf751dfc2098e58a94fc71e59)
- Fetch 0.8.2 [`0b3e1d7`](https://github.com/JakeChampion/fetch/commit/0b3e1d7c41c75359a3e0b771741ebc2a8823da38)

## [v0.8.1](https://github.com/JakeChampion/fetch/compare/v0.8.0...v0.8.1)

> 4 May 2015

- Fetch 0.8.1 [`09c316d`](https://github.com/JakeChampion/fetch/commit/09c316d2450c08fde129336438b3a44de4e8177c)
- Ignore script/ dir [`2e39db1`](https://github.com/JakeChampion/fetch/commit/2e39db1b02c5453ed9c3e156f5d68240f0e76907)

## [v0.8.0](https://github.com/JakeChampion/fetch/compare/v0.7.0...v0.8.0)

> 4 May 2015

- only define _initBody once [`#136`](https://github.com/JakeChampion/fetch/pull/136)
- remove un-needed promise allocations in example [`#120`](https://github.com/JakeChampion/fetch/pull/120)
- Headers constructor in Response constructor [`#107`](https://github.com/JakeChampion/fetch/pull/107)
- Sauce: IE9 [`#102`](https://github.com/JakeChampion/fetch/pull/102)
- Sauce Labs: IE 11 [`#101`](https://github.com/JakeChampion/fetch/pull/101)
- Sauce Labs [`#99`](https://github.com/JakeChampion/fetch/pull/99)
- Add a convenience `ok` getter on `Response` [`#82`](https://github.com/JakeChampion/fetch/pull/82)
- Follow spec on Headers to throw TypeError, add tests for Headers [`#85`](https://github.com/JakeChampion/fetch/pull/85)
- adds .npmignore [`#84`](https://github.com/JakeChampion/fetch/pull/84)
- node.js module link [`#81`](https://github.com/JakeChampion/fetch/pull/81)
- Add script runner for saucelabs [`47fc7d5`](https://github.com/JakeChampion/fetch/commit/47fc7d5a8431505af8dec8326e5d081219ad7d6a)
- Split app and server [`29cc5dc`](https://github.com/JakeChampion/fetch/commit/29cc5dc74441679c63e99145ba841f8abd29da17)
- More scripty [`ba1214a`](https://github.com/JakeChampion/fetch/commit/ba1214acaf766eba9e0a268de495d8b9c9e295c1)

## [v0.7.0](https://github.com/JakeChampion/fetch/compare/v0.6.1...v0.7.0)

> 24 January 2015

- Centralise the checks for blob and form data support [`#78`](https://github.com/JakeChampion/fetch/pull/78)
- If cors, with credentials [`#77`](https://github.com/JakeChampion/fetch/pull/77)
- Add metadata for repository, bugs and license [`#67`](https://github.com/JakeChampion/fetch/pull/67)
- Declare deliberate "async=true" on XMLHttpRequest open [`#74`](https://github.com/JakeChampion/fetch/pull/74)
- Fix typo in npm install instructions [`#71`](https://github.com/JakeChampion/fetch/pull/71)
- Improve Request/Response BodyInit consuming [`#70`](https://github.com/JakeChampion/fetch/pull/70)
- Fix up body consuming on request [`fbfa9e3`](https://github.com/JakeChampion/fetch/commit/fbfa9e332039d3d4e4e91da6038729d061455ef1)
- Throw TypeError if body is given for GET or HEAD [`5ce5677`](https://github.com/JakeChampion/fetch/commit/5ce56771da78d341561887df2bb65f78425333c4)
- A few more tests and typo fix. [`614b2aa`](https://github.com/JakeChampion/fetch/commit/614b2aab10525f8e2a55124fdb33b374b61a0c87)

## [v0.6.1](https://github.com/JakeChampion/fetch/compare/v0.6.0...v0.6.1)

> 15 January 2015

- Add charset content-type tests [`7474e42`](https://github.com/JakeChampion/fetch/commit/7474e42af467bcd843f97a3def92b0c7d63e4f48)
- Add additional body init and consume test coverage [`9d58648`](https://github.com/JakeChampion/fetch/commit/9d586486e50a79551b1d12178b3408d1fd57cb35)
- Fix X-Request-URL on CORS requests [`4525329`](https://github.com/JakeChampion/fetch/commit/4525329eb075da74fd7585d4ea8ddeabc97b17a4)

## [v0.6.0](https://github.com/JakeChampion/fetch/compare/v0.5.0...v0.6.0)

> 12 January 2015

- Suspect this api key was wrong [`#63`](https://github.com/JakeChampion/fetch/pull/63)
- Use responseText on IE9 which lacks XHR2 support [`eeb53d3`](https://github.com/JakeChampion/fetch/commit/eeb53d391dcb12a2d77765bf602fc45427112687)
- Tidy up binary file reader [`7436589`](https://github.com/JakeChampion/fetch/commit/74365897619b533fe7b9080568ad43e852130974)
- Use `xhr.responseType = 'blob'` to preserve binary data. [`080358d`](https://github.com/JakeChampion/fetch/commit/080358ddb26ff37cfd27caf730af9cd3c184bc42)

## [v0.5.0](https://github.com/JakeChampion/fetch/compare/v0.4.0...v0.5.0)

> 12 January 2015

- Enable travis to publish to npm. [`#57`](https://github.com/JakeChampion/fetch/pull/57)
- Make Headers case insensitive though lowercasing. [`#62`](https://github.com/JakeChampion/fetch/pull/62)
- Support credentials [`#56`](https://github.com/JakeChampion/fetch/pull/56)
- Switch to Mocha [`#59`](https://github.com/JakeChampion/fetch/pull/59)
- Test Atomic HTTP redirect handling [`#55`](https://github.com/JakeChampion/fetch/pull/55)
- Mark FormData support as optional [`#54`](https://github.com/JakeChampion/fetch/pull/54)
- Add promise test helper [`#53`](https://github.com/JakeChampion/fetch/pull/53)
- Test in web worker [`#51`](https://github.com/JakeChampion/fetch/issues/51)
- Group tests [`ecd8600`](https://github.com/JakeChampion/fetch/commit/ecd8600932b0d8495d646df0d6fa74874cd57713)
- Switch to mocha [`cbd6c66`](https://github.com/JakeChampion/fetch/commit/cbd6c66fe4bbda1b63cef54c299c2081c4b50955)
- Skip tests in phantomjs [`8a4b620`](https://github.com/JakeChampion/fetch/commit/8a4b62027ea7c590861364e853eccb5f52a8991b)

## [v0.4.0](https://github.com/JakeChampion/fetch/compare/v0.3.2...v0.4.0)

> 29 December 2014

- Assign to self [`#52`](https://github.com/JakeChampion/fetch/pull/52)
- Web Workers support [`#48`](https://github.com/JakeChampion/fetch/pull/48)
- Align used flag error message to Chrome's implementation [`#44`](https://github.com/JakeChampion/fetch/pull/44)
- Add missing quote. [`#40`](https://github.com/JakeChampion/fetch/issues/40)
- Align bodyUsed error message to Chrome's implementation [`e414284`](https://github.com/JakeChampion/fetch/commit/e4142843fab42705cc65d526bf86b1662da7f338)
- Avoid testing implementation specific error messages [`cc42153`](https://github.com/JakeChampion/fetch/commit/cc4215367d2298f779ee9a5ab3f8c9cb6207c8c5)
- Set esnext option [`3ebc441`](https://github.com/JakeChampion/fetch/commit/3ebc44129997dbc2e331450b6e876b8f6e36437b)

## [v0.3.2](https://github.com/JakeChampion/fetch/compare/v0.3.1...v0.3.2)

> 24 November 2014

- FormData should only able to consume once [`#38`](https://github.com/JakeChampion/fetch/pull/38)
- Test formData body consumption. [`4a7e655`](https://github.com/JakeChampion/fetch/commit/4a7e655b4f0361524d16adb16148c1fe0f2f1f0f)
- Fetch 0.3.2 [`830231e`](https://github.com/JakeChampion/fetch/commit/830231e5682175fe04088b291192f72c59aed998)

## [v0.3.1](https://github.com/JakeChampion/fetch/compare/v0.3.0...v0.3.1)

> 21 November 2014

- Reject promise with TypeError for network failures. [`#36`](https://github.com/JakeChampion/fetch/pull/36)
- Reject example promise with an Error. [`#35`](https://github.com/JakeChampion/fetch/issues/35)
- Fetch 0.3.1 [`eb3f9b2`](https://github.com/JakeChampion/fetch/commit/eb3f9b2b1fa7804883cbf853102944847d65e204)

## [v0.3.0](https://github.com/JakeChampion/fetch/compare/v0.2.1...v0.3.0)

> 13 November 2014

- IE 9+ fixes [`#28`](https://github.com/JakeChampion/fetch/pull/28)
- Move body to _body to prevent direct access [`#32`](https://github.com/JakeChampion/fetch/pull/32)
- Remove form encoded object body. [`#30`](https://github.com/JakeChampion/fetch/pull/30)
- Document how to use in Browserify… [`#29`](https://github.com/JakeChampion/fetch/pull/29)
- Auto-detect available port when running headless tests [`#27`](https://github.com/JakeChampion/fetch/pull/27)
- Shell highlight [`#24`](https://github.com/JakeChampion/fetch/pull/24)
- use shorthand npm installation [`#23`](https://github.com/JakeChampion/fetch/pull/23)
- Add name/version/main so it can be installed from npm. [`#22`](https://github.com/JakeChampion/fetch/pull/22)
- Add example of success and error handlers [`#18`](https://github.com/JakeChampion/fetch/pull/18)
- Test Server [`#13`](https://github.com/JakeChampion/fetch/pull/13)
- Travis [`#12`](https://github.com/JakeChampion/fetch/pull/12)
- Add test server [`3316bda`](https://github.com/JakeChampion/fetch/commit/3316bdaf03e4ef2eef35161913efca9a8bd31457)
- Uppercase the HTTP method name [`c71f1dd`](https://github.com/JakeChampion/fetch/commit/c71f1dd9bb0a84453ad2e14cb4a638cc735e1344)
- Skip blob tests on phantom [`c02cad2`](https://github.com/JakeChampion/fetch/commit/c02cad221e0d239dd79e42f2d91c9bb48501776c)

## [v0.2.1](https://github.com/JakeChampion/fetch/compare/v0.2.0...v0.2.1)

> 15 October 2014

- Use of `Promise.reject` as a constructor [`#10`](https://github.com/JakeChampion/fetch/pull/10)
- Fixed uncaught error when a body was consumed more than once. [`e428559`](https://github.com/JakeChampion/fetch/commit/e428559a68f5c9d445bf2fb5a91fb3f7e35b2f5d)
- Fetch 0.2.1 [`8160180`](https://github.com/JakeChampion/fetch/commit/81601803ec9fd1ffa29f4d527b12e586dd9840c1)

## [v0.2.0](https://github.com/JakeChampion/fetch/compare/v0.1.0...v0.2.0)

> 15 October 2014

- Parse form encoded response body [`#8`](https://github.com/JakeChampion/fetch/pull/8)
- Allow body to be consumed only once [`#7`](https://github.com/JakeChampion/fetch/pull/7)
- throw proper errors [`#5`](https://github.com/JakeChampion/fetch/pull/5)
- Allow body to be consumed a single time. [`c7a27dc`](https://github.com/JakeChampion/fetch/commit/c7a27dc12f43f398f8159db98f3745d8c3320515)
- Parse form encoded response body. [`60271ce`](https://github.com/JakeChampion/fetch/commit/60271cef8aa13641ba99c197f974fbb4a5f77c57)
- Extract consumed function. [`a709976`](https://github.com/JakeChampion/fetch/commit/a7099768059b9befbb656c6b1e3944bad8a97327)

## v0.1.0

> 13 October 2014

- 🐶 [`c1af6de`](https://github.com/JakeChampion/fetch/commit/c1af6de1e87d2753203f2e750e48b625fac2e24a)
- Start tests. [`44e796a`](https://github.com/JakeChampion/fetch/commit/44e796a874dd88bfd365cc6dcddfe973daeec08a)
- Add readme. [`7eee89d`](https://github.com/JakeChampion/fetch/commit/7eee89d15ee21e762a04b4c773fcc3d7d50a13f7)
