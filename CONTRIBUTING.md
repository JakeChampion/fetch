# Contributing

Thank you for your interest in contributing to our `fetch` polyfill!

Note that we only accept features that are also described in the official [fetch
specification][]. However, the aim of this project is not to implement the
complete specification; just the parts that are possible to emulate using
XMLHttpRequest.

Contributions to this project are [released][tos] to the public under the
[project's open source license](LICENSE).

## Running tests

Running `npm test` will:

1. Build the `dist/` files;
1. Run the test suite in headless Chrome & Firefox;
1. Run the same test suite in Web Worker mode.

When editing tests or implementation, keep `npm run karma` running:

- You can connect additional browsers by navigating to `http://localhost:9876/`;
- Changes to [test.js](test/test.js) will automatically re-run the tests in all
  connected browsers;
- When changing [fetch.js](fetch.js), re-run tests by executing `make`;
- Re-run specific tests with `./node_modules/.bin/karma run -- --grep=<PATTERN>`.

## Submitting a pull request

1. [Fork][fork] and clone the repository;
1. Create a new branch: `git checkout -b my-branch-name`;
1. Make your change, push to your fork and [submit a pull request][pr];
1. Pat your self on the back and wait for your pull request to be reviewed.

Here are a few things you can do that will increase the likelihood of your pull
request being accepted:

- Keep your change as focused as possible. If there are multiple changes you
  would like to make that are not dependent upon each other, consider submitting
  them as separate pull requests.
- Write a [good commit message][].

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)


  [fetch specification]: https://fetch.spec.whatwg.org
  [tos]: https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license
  [fork]: https://github.com/github/fetch/fork
  [pr]: https://github.com/github/fetch/compare
  [good commit message]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
