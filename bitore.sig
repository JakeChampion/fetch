name: Deploy to GitHub Container Registry

on:
  push:
    tags:
      - '*'
  workflow_dispatch:

jobs:
  deploy:
    '-'' 'Name'' ':'#:Build::'-and'-'#Deployee'' ':#To'' ':'Git'Hub/doc/container'@javascript.yml/sets-up.registrar2.a.p.i :
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - Name :bitore.sig :
      Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
GitHub-doc
Public
forked from github/docs
Code
Pull requests
Actions
Projects
Security
1
Insights
Settings
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
  
 6 commits
 3 files changed
 4 contributors
Commits on Sep 26, 2022
Merge branch 'main' into repo-sync

@Octomerger
Octomerger committed on Sep 26
  
Merge pull request #31171 from github/repo-sync 

@Octomerger
Octomerger committed on Sep 26
  
Fix wide table width for REST API pages (#31167)

@gracepark
gracepark committed on Sep 26
  
Update domwaiter (#31170)

@heiskr
heiskr committed on Sep 26
  
Merge pull request github#20903 from github/repo-sync 

@Octomerger
Octomerger committed on Sep 26
  
Merge branch 'main' into main

@zakwarlord7
zakwarlord7 committed on Sep 26
  
Showing  with 89 additions and 214 deletions.
  8  
components/parameter-table/ParameterTable.module.scss
@@ -1,5 +1,5 @@
.parameterTable {
  // this is for the child parameter table row that contiains the top level
  // this is for the child parameter table row that contains the top level
  // properties details toggle element because we want it to match the
  // background color of the top level parameter rows.  We need the !important
  // because the child parameter rows (the nested expanded properties) otherwise
  // have the same background color.
  & > tbody > tr {
    background: var(--color-canvas-default) !important;
  }
  // also for the top level child parameter table row, we want the details toggle
  // to align with the top level parameter rows.  Child parameter rows have some
  // left padding so they can indent as they nest but we don't want that in
  // this case.  We need the !important to override general default markdown
  // article styling.
  & > tbody > tr > td > details {
    padding-left: 0px !important;
    margin-bottom: 4px !important;
  }

  & > tbody > tr > td > * {
    width: auto;
    display: block;
    word-break: break-word;
  }
}
 293  
package-lock.json
@@ -79,47 +79,47 @@
        "strip-html-comments": "^1.0.0",
        "styled-components": "^5.3.5",
        "swr": "^1.3.0",
        "ts-dedent": "^2.2.0",
        "unified": "^10.1.2",
        "unist-util-visit": "^4.1.0",
        "url-template": "^3.0.0",
        "uuid": "^8.3.2",
        "walk-sync": "^3.0.0"
      },
      "devDependencies": {
        "@actions/core": "^1.9.1",
        "@actions/github": "^5.0.3",
        "@alex_neo/jest-expect-message": "^1.0.5",
        "@babel/core": "^7.18.5",
        "@babel/eslint-parser": "^7.18.2",
        "@babel/plugin-syntax-top-level-await": "^7.14.5",
        "@babel/plugin-transform-runtime": "^7.18.5",
        "@babel/preset-env": "^7.18.2",
        "@graphql-inspector/core": "^3.1.2",
        "@graphql-tools/load": "^7.5.14",
        "@jest/globals": "29.0.3",
        "@octokit/graphql": "4.8.0",
        "@octokit/rest": "^18.12.0",
        "@types/github-slugger": "^1.3.0",
        "@types/imurmurhash": "^0.1.1",
        "@types/js-cookie": "^3.0.2",
        "@types/lodash": "^4.14.182",
        "@types/react": "17.0.38",
        "@types/react-dom": "^18.0.5",
        "@types/react-syntax-highlighter": "^15.5.2",
        "@types/uuid": "^8.3.4",
        "@typescript-eslint/eslint-plugin": "5.38.0",
        "@typescript-eslint/parser": "5.38.0",
        "babel-loader": "^8.2.5",
        "babel-plugin-styled-components": "^2.0.7",
        "babel-preset-env": "^1.7.0",
        "chalk": "^5.0.1",
        "change-case": "^4.1.2",
        "commander": "^9.3.0",
        "cross-env": "^7.0.3",
        "csp-parse": "0.0.2",
        "dedent": "^0.7.0",
        "domwaiter": "^1.3.0",
        "domwaiter": "^1.4.0",
        "eslint": "8.24.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-config-standard": "^17.0.0",
@@ -4110,8 +4110,9 @@
    },
    "node_modules/@szmarczak/http-timer": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-4.0.6.tgz",
      "integrity": "sha512-4BAffykYOgO+5nzBWYwE3W90sBgLJoUPRWWcL8wlyiM8IB8ipJz3UMJ9KXQd1RKQXpKp8Tutn80HZtWsu2u76w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defer-to-connect": "^2.0.0"
      },
@@ -6515,37 +6516,26 @@
        "camelcase": "^6.2.0",
        "map-obj": "^4.1.0",
        "quick-lru": "^5.1.1",
        "type-fest": "^1.2.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/camelcase": {
      "version": "6.3.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/quick-lru": {
      "version": "5.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/type-fest": {
      "version": "1.4.0",
      "dev": true,
@@ -7584,96 +7574,61 @@
      }
    },
    "node_modules/domwaiter": {
      "version": "1.3.0",
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/domwaiter/-/domwaiter-1.4.0.tgz",
      "integrity": "sha512-k7dIRmg5/wMsET8FFZvrlZ2A81WOjc9D5DcVVoZxkwvo2hMPklYXPiS23h3Ez7zqyp25pmEn3Hzjq8agPiRxiw==",
      "dev": true,
      "dependencies": {
        "bottleneck": "^2.19.5",
        "cheerio": "^1.0.0-rc.3",
        "got": "^10.6.0"
      }
    },
    "node_modules/domwaiter/node_modules/@sindresorhus/is": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/is?sponsor=1"
        "got": "^11.8.5"
      }
    },
    "node_modules/domwaiter/node_modules/cacheable-lookup": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/keyv": "^3.1.1",
        "keyv": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/domwaiter/node_modules/decompress-response": {
      "version": "5.0.0",
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-5.0.4.tgz",
      "integrity": "sha512-2/kNscPhpcxrOigMZzbiWF7dz8ilhb/nIHU3EyZiXWXpeq/au8qJ8VhdftMkty3n7Gj6HIGalQG8oiBNB3AJgA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
        "node": ">=10.6.0"
      }
    },
    "node_modules/domwaiter/node_modules/got": {
      "version": "10.7.0",
      "version": "11.8.5",
      "resolved": "https://registry.npmjs.org/got/-/got-11.8.5.tgz",
      "integrity": "sha512-o0Je4NvQObAuZPHLFoRSkdG2lTgtcynqymzg2Vupdx6PorhaT5MCbIyXG6d4D94kk8ZG57QeosgdiqfJWhEhlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sindresorhus/is": "^2.0.0",
        "@szmarczak/http-timer": "^4.0.0",
        "@sindresorhus/is": "^4.0.0",
        "@szmarczak/http-timer": "^4.0.5",
        "@types/cacheable-request": "^6.0.1",
        "cacheable-lookup": "^2.0.0",
        "cacheable-request": "^7.0.1",
        "decompress-response": "^5.0.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^5.0.0",
        "@types/responselike": "^1.0.0",
        "cacheable-lookup": "^5.0.3",
        "cacheable-request": "^7.0.2",
        "decompress-response": "^6.0.0",
        "http2-wrapper": "^1.0.0-beta.5.2",
        "lowercase-keys": "^2.0.0",
        "mimic-response": "^2.1.0",
        "p-cancelable": "^2.0.0",
        "p-event": "^4.0.0",
        "responselike": "^2.0.0",
        "to-readable-stream": "^2.0.0",
        "type-fest": "^0.10.0"
        "responselike": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
        "node": ">=10.19.0"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/got?sponsor=1"
      }
    },
    "node_modules/domwaiter/node_modules/mimic-response": {
      "version": "2.1.0",
    "node_modules/domwaiter/node_modules/http2-wrapper": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-1.0.3.tgz",
      "integrity": "sha512-V+23sDMr12Wnz7iTcDeJr3O6AIxlnvT/bmaAAAP/Xda35C90p9599p0F1eHR/N1KILWSoWVAiOMFjBBXaXSMxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      "dependencies": {
        "quick-lru": "^5.1.1",
        "resolve-alpn": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/domwaiter/node_modules/type-fest": {
      "version": "0.10.0",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
        "node": ">=10.19.0"
      }
    },
    "node_modules/dot-case": {
@@ -7713,11 +7668,6 @@
      "dev": true,
      "license": "MIT"
    },
    "node_modules/duplexer3": {
      "version": "0.1.4",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
@@ -10423,17 +10373,6 @@
        "node": ">=10.19.0"
      }
    },
    "node_modules/http2-wrapper/node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.0",
      "devOptional": true,
@@ -15786,45 +15725,13 @@
    },
    "node_modules/p-cancelable": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-2.1.1.tgz",
      "integrity": "sha512-BZOr3nRQHOntUjTrH8+Lh54smKHoHyur8We1V8DSMVrl5A2malOOwuJRnKRDjSnkoeBh4at6BwEnb5I7Jl31wg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-event": {
      "version": "4.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-timeout": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-event/node_modules/p-timeout": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-finally": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "dev": true,
@@ -16522,6 +16429,17 @@
        }
      ]
    },
    "node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
@@ -19245,14 +19163,6 @@
        "node": ">=4"
      }
    },
    "node_modules/to-readable-stream": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "devOptional": true,
@@ -23510,6 +23420,8 @@
    },
    "@szmarczak/http-timer": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-4.0.6.tgz",
      "integrity": "sha512-4BAffykYOgO+5nzBWYwE3W90sBgLJoUPRWWcL8wlyiM8IB8ipJz3UMJ9KXQd1RKQXpKp8Tutn80HZtWsu2u76w==",
      "dev": true,
      "requires": {
        "defer-to-connect": "^2.0.0"
@@ -25367,10 +25279,6 @@
          "version": "6.3.0",
          "dev": true
        },
        "quick-lru": {
          "version": "5.1.1",
          "dev": true
        },
        "type-fest": {
          "version": "1.4.0",
          "dev": true
@@ -26043,61 +25951,50 @@
      }
    },
    "domwaiter": {
      "version": "1.3.0",
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/domwaiter/-/domwaiter-1.4.0.tgz",
      "integrity": "sha512-k7dIRmg5/wMsET8FFZvrlZ2A81WOjc9D5DcVVoZxkwvo2hMPklYXPiS23h3Ez7zqyp25pmEn3Hzjq8agPiRxiw==",
      "dev": true,
      "requires": {
        "bottleneck": "^2.19.5",
        "cheerio": "^1.0.0-rc.3",
        "got": "^10.6.0"
        "got": "^11.8.5"
      },
      "dependencies": {
        "@sindresorhus/is": {
          "version": "2.1.1",
          "dev": true
        },
        "cacheable-lookup": {
          "version": "2.0.1",
          "dev": true,
          "requires": {
            "@types/keyv": "^3.1.1",
            "keyv": "^4.0.0"
          }
        },
        "decompress-response": {
          "version": "5.0.0",
          "dev": true,
          "requires": {
            "mimic-response": "^2.0.0"
          }
          "version": "5.0.4",
          "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-5.0.4.tgz",
          "integrity": "sha512-2/kNscPhpcxrOigMZzbiWF7dz8ilhb/nIHU3EyZiXWXpeq/au8qJ8VhdftMkty3n7Gj6HIGalQG8oiBNB3AJgA==",
          "dev": true
        },
        "got": {
          "version": "10.7.0",
          "version": "11.8.5",
          "resolved": "https://registry.npmjs.org/got/-/got-11.8.5.tgz",
          "integrity": "sha512-o0Je4NvQObAuZPHLFoRSkdG2lTgtcynqymzg2Vupdx6PorhaT5MCbIyXG6d4D94kk8ZG57QeosgdiqfJWhEhlQ==",
          "dev": true,
          "requires": {
            "@sindresorhus/is": "^2.0.0",
            "@szmarczak/http-timer": "^4.0.0",
            "@sindresorhus/is": "^4.0.0",
            "@szmarczak/http-timer": "^4.0.5",
            "@types/cacheable-request": "^6.0.1",
            "cacheable-lookup": "^2.0.0",
            "cacheable-request": "^7.0.1",
            "decompress-response": "^5.0.0",
            "duplexer3": "^0.1.4",
            "get-stream": "^5.0.0",
            "@types/responselike": "^1.0.0",
            "cacheable-lookup": "^5.0.3",
            "cacheable-request": "^7.0.2",
            "decompress-response": "^6.0.0",
            "http2-wrapper": "^1.0.0-beta.5.2",
            "lowercase-keys": "^2.0.0",
            "mimic-response": "^2.1.0",
            "p-cancelable": "^2.0.0",
            "p-event": "^4.0.0",
            "responselike": "^2.0.0",
            "to-readable-stream": "^2.0.0",
            "type-fest": "^0.10.0"
            "responselike": "^2.0.0"
          }
        },
        "mimic-response": {
          "version": "2.1.0",
          "dev": true
        },
        "type-fest": {
          "version": "0.10.0",
          "dev": true
        "http2-wrapper": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-1.0.3.tgz",
          "integrity": "sha512-V+23sDMr12Wnz7iTcDeJr3O6AIxlnvT/bmaAAAP/Xda35C90p9599p0F1eHR/N1KILWSoWVAiOMFjBBXaXSMxg==",
          "dev": true,
          "requires": {
            "quick-lru": "^5.1.1",
            "resolve-alpn": "^1.0.0"
          }
        }
      }
    },
@@ -26127,10 +26024,6 @@
      "version": "0.1.2",
      "dev": true
    },
    "duplexer3": {
      "version": "0.1.4",
      "dev": true
    },
    "eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
@@ -27988,13 +27881,6 @@
      "requires": {
        "quick-lru": "^5.1.1",
        "resolve-alpn": "^1.2.0"
      },
      "dependencies": {
        "quick-lru": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
          "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
        }
      }
    },
    "https-proxy-agent": {
@@ -31679,26 +31565,8 @@
    },
    "p-cancelable": {
      "version": "2.1.1",
      "dev": true
    },
    "p-event": {
      "version": "4.2.0",
      "dev": true,
      "requires": {
        "p-timeout": "^3.1.0"
      },
      "dependencies": {
        "p-timeout": {
          "version": "3.2.0",
          "dev": true,
          "requires": {
            "p-finally": "^1.0.0"
          }
        }
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-2.1.1.tgz",
      "integrity": "sha512-BZOr3nRQHOntUjTrH8+Lh54smKHoHyur8We1V8DSMVrl5A2malOOwuJRnKRDjSnkoeBh4at6BwEnb5I7Jl31wg==",
      "dev": true
    },
    "p-limit": {
@@ -32146,6 +32014,11 @@
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true
    },
    "quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
@@ -33994,10 +33867,6 @@
    "to-fast-properties": {
      "version": "2.0.0"
    },
    "to-readable-stream": {
      "version": "2.1.0",
      "dev": true
    },
    "to-regex-range": {
      "version": "5.0.1",
      "devOptional": true,
  2  
package.json
@@ -121,7 +121,7 @@
    "cross-env": "^7.0.3",
    "csp-parse": "0.0.2",
    "dedent": "^0.7.0",
    "domwaiter": "^1.3.0",
    "domwaiter": "^1.4.0",
    "eslint": "8.24.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-standard": "^17.0.0",
Bump version to 5.0.8 to 6.0.0 :
 master
 v10.0.0
@richardm-stripe
richardm-stripe committed 13 days ago 
1 parent eeaa9bf commit a895466e5208cc7974bc3bed80abe825418ce0b0
Show file tree Hide file tree
Showing 3 changed files with 31 additions and 2 deletions.
 29  
CHANGELOG.md
@@ -1,5 +1,34 @@
# Changelog

## 10.0.0 - 2022-11-16
* [#1392](https://github.com/stripe/stripe-php/pull/1392) Next major release changes

Breaking changes that arose during code generation of the library that we postponed for the next major version. For changes to the Stripe products, read more at https://stripe.com/docs/upgrades#2022-11-15.

"⚠️" symbol highlights breaking changes.

### Deprecated
* [#1382](https://github.com/stripe/stripe-php/pull/1382) Mark `resource.save` as deprecated. Prefer the static update method that doesn't require retrieval of the resource to update it.
```PHP
// before
$resource = Price::retrieve(self::TEST_RESOURCE_ID);
$resource->metadata['key'] = 'value';
$resource->save();
// after
$resource = Price::update('price_123', [
    'metadata' => ['key' => 'value'],
]);
```

### ⚠️ Removed
- [#1377](https://github.com/stripe/stripe-php/pull/1377) Removed deprecated `Sku` resource and service 
- [#1375](https://github.com/stripe/stripe-php/pull/1375) Removed deprecated `Orders` resource and service 
- [#1375](https://github.com/stripe/stripe-php/pull/1375) Removed deprecated `Product` field from the `LineItem` 
- [#1388](https://github.com/stripe/stripe-php/pull/1388) Removed deprecated `AlipayAccount` resource 
- [#1396](https://github.com/stripe/stripe-php/pull/1396) Removed `charges` field on `PaymentIntent` and replace it with `latest_charge`. 


## 9.9.0 - 2022-11-08
* [#1394](https://github.com/stripe/stripe-php/pull/1394) API Updates
  * Add support for new values `eg_tin`, `ph_tin`, and `tr_tin` on enum `TaxId.type`
* [#1389](https://github.com/stripe/stripe-php/pull/1389) API Updates
  * Add support for `on_behalf_of` on `Subscription`
* [#1379](https://github.com/stripe/stripe-php/pull/1379) Do not run Coveralls in PR-s
## 9.8.0 - 2022-10-20
* [#1383](https://github.com/stripe/stripe-php/pull/1383) API Updates
  * Add support for new values `jp_trn` and `ke_pin` on enum `TaxId.type`
* [#1293](https://github.com/stripe/stripe-php/pull/1293) Install deps in the install step of CI
* [#1291](https://github.com/stripe/stripe-php/pull/1291) Fix: Configure finder for `friendsofphp/php-cs-fixer`
## 9.7.0 - 2022-10-13
* [#1376](https://github.com/stripe/stripe-php/pull/1376) API Updates
  * Add support for `network_data` on `Issuing.Authorization`
* [#1374](https://github.com/stripe/stripe-php/pull/1374) Add request_log_url on ErrorObject
* [#1370](https://github.com/stripe/stripe-php/pull/1370) API Updates
  * Add support for `created` on `Checkout.Session`
## 9.6.0 - 2022-09-15
* [#1365](https://github.com/stripe/stripe-php/pull/1365) API Updates
  * Add support for `from_invoice` and `latest_revision` on `Invoice`
  * Add support for new value `pix` on enum `PaymentLink.payment_method_types[]`
  * Add support for `pix` on `PaymentMethod`
  * Add support for new value `pix` on enum `PaymentMethod.type`
  * Add support for `created` on `Treasury.CreditReversal` and `Treasury.DebitReversal`
## 9.5.0 - 2022-09-06
* [#1364](https://github.com/stripe/stripe-php/pull/1364) API Updates
  * Add support for new value `terminal_reader_splashscreen` on enum `File.purpose`
* [#1363](https://github.com/stripe/stripe-php/pull/1363) chore: Update PHP tests to handle search methods.
## 9.4.0 - 2022-08-26
* [#1362](https://github.com/stripe/stripe-php/pull/1362) API Updates
  * Add support for `login_page` on `BillingPortal.Configuration`
* [#1360](https://github.com/stripe/stripe-php/pull/1360) Add test coverage using Coveralls
* [#1361](https://github.com/stripe/stripe-php/pull/1361) fix: Fix type hints for error objects.
  * Update `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error` and `SetupIntent.setup_error` type to be `StripeObject`.
    * Addresses https://github.com/stripe/stripe-php/issues/1353. The library today does not actually return a `ErrorObject` for these fields, so the type annotation was incorrect.  
* [#1356](https://github.com/stripe/stripe-php/pull/1356) Add beta readme.md section
## 9.3.0 - 2022-08-23
* [#1355](https://github.com/stripe/stripe-php/pull/1355) API Updates
  * Change type of `Treasury.OutboundTransfer.destination_payment_method` from `string` to `string | null`
  * Change the return type of `CustomerService.fundCashBalance` test helper from `CustomerBalanceTransaction` to `CustomerCashBalanceTransaction`.
    * This would generally be considered a breaking change, but we've worked with all existing users to migrate and are comfortable releasing this as a minor as it is solely a test helper method. This was essentially broken prior to this change. 
## 9.2.0 - 2022-08-19
* [#1352](https://github.com/stripe/stripe-php/pull/1352) API Updates
  * Add support for new resource `CustomerCashBalanceTransaction`
  * Add support for `currency` on `PaymentLink`
  * Add constant for `customer_cash_balance_transaction.created` webhook event.
* [#1351](https://github.com/stripe/stripe-php/pull/1351) Add a support section to the readme
* [#1304](https://github.com/stripe/stripe-php/pull/1304) Allow passing PSR-3 loggers to setLogger as they are compatible
## 9.1.0 - 2022-08-11
* [#1348](https://github.com/stripe/stripe-php/pull/1348) API Updates
  * Add support for `payment_method_collection` on `Checkout.Session` and `PaymentLink`
  
* [#1346](https://github.com/stripe/stripe-php/pull/1346) API Updates
  * Add support for `expires_at` on `Apps.Secret`
## 9.0.0 - 2022-08-02
Breaking changes that arose during code generation of the library that we postponed for the next major version. For changes to the SDK, read more detailed description at https://github.com/stripe/stripe-php/wiki/Migration-guide-for-v9. For changes to the Stripe products, read more at https://stripe.com/docs/upgrades#2022-08-01.
"⚠️" symbol highlights breaking changes.
* [#1344](https://github.com/stripe/stripe-php/pull/1344) API Updates
* [#1337](https://github.com/stripe/stripe-php/pull/1337) API Updates
* [#1273](https://github.com/stripe/stripe-php/pull/1273) Add some PHPDoc return types and fixes
* [#1341](https://github.com/stripe/stripe-php/pull/1341) Next major release changes
### Added
* Add `alternate_statement_descriptors`, `authorization_code`, and `level3` properties to `Charge` resource.
* Add `previewLines` method to `CreditNote` resource.
* Add `transfer_data` property to `Subscription` resource.
* Add `SOURCE_TYPE_FPX` constant to `Transfer` resource.
* Add new error code constants to `ErrorObject`.
* Add support for `shipping_cost` and `shipping_details` on `Checkout.Session`
### ⚠️ Changed
* Updated certificate bundle ([#1314](https://github.com/stripe/stripe-php/pull/1314))
* Add `params` parameter to `close` method in `Dispute` resource.
### ⚠️ Removed
* Remove deprecated `AlipayAccount`, `BitcoinReceiver`, `BitcoinTransaction`, `Recipient`, `RecipientTransfer`, and `ThreeDSecure` resources.
* Remove `CAPABILITY_CARD_PAYMENTS`, `CAPABILITY_LEGACY_PAYMENTS`, `CAPABILITY_PLATFORM_PAYMENTS`, `CAPABILITY_TRANSFERS`, `CAPABILITY_STATUS_ACTIVE`, `CAPABILITY_STATUS_INACTIVE`, and `CAPABILITY_STATUS_PENDING` constants from `Account` resource. Please use up-to-date values from https://stripe.com/docs/connect/account-capabilities.
* Remove `AssociatedObjects` array property from `EphemeralKey` resource. The field was undocumented and unsupported.
* Remove `details` method from `Card` resource. The endpoint was deprecated and no longer exists.
* Remove `recipient` property from `Card` resource. The property was deprecated.
* Remove ability to list `Card` resources for a particular `Recipient`.
* Remove `sources` property from `Card` resource. The property was deprecated.
* Remove `FAILURE_REASON` constant from `Refund` resource. The value was deprecated.
* Remove `Recipient` resource. The resource was deprecated.
* Remove `OrderItem` resource. The resource was deprecated.
* Remove `all` method from `LineItem`.
* Remove `cancel` method from `Transfer` and `TransferService`. This method is deprecated.
* Remove `allTransactions` method from `SourceService` service. Please use `allSourceTransactions` method instead.
* Remove `persons` method from `Account` resource. Please use `allPersons` method instead.
* Remove `sourceTransactions` method from `Source` resource. Please use `allSourceTransactions` method instead.
* Remove `usageRecordSummaries` method from `SubscriptionItem` resource. Please use `allUsageRecordSummaries` method instead.
 2  
VERSION
@@ -1 +1 @@
9.9.0
10.0.0
  2  
lib/Stripe.php
@@ -58,7 +58,7 @@ class Stripe
    /** @var float Initial delay between retries, in seconds */
    private static $initialNetworkRetryDelay = 0.5;

    const VERSION = '9.9.0';
    const VERSION = '10.0.0';

    /**
     * @return string the API key used for requests
0 comments on commit a895466
@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue, pull request, or discussion
Add saved reply
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with roadmap is supported
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
GitHub-doc
Public
forked from github/docs
Code
Pull requests
Actions
Projects
Security
1
Insights
Settings
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
  
 6 commits
 3 files changed
 4 contributors
Commits on Sep 26, 2022
Merge branch 'main' into repo-sync

@Octomerger
Octomerger committed on Sep 26
  
Merge pull request #31171 from github/repo-sync 

@Octomerger
Octomerger committed on Sep 26
  
Fix wide table width for REST API pages (#31167)

@gracepark
gracepark committed on Sep 26
  
Update domwaiter (#31170)

@heiskr
heiskr committed on Sep 26
  
Merge pull request github#20903 from github/repo-sync 

@Octomerger
Octomerger committed on Sep 26
  
Merge branch 'main' into main

@zakwarlord7
zakwarlord7 committed on Sep 26
  
Showing  with 89 additions and 214 deletions.
  8  
components/parameter-table/ParameterTable.module.scss
@@ -1,5 +1,5 @@
.parameterTable {
  // this is for the child parameter table row that contiains the top level
  // this is for the child parameter table row that contains the top level
  // properties details toggle element because we want it to match the
  // background color of the top level parameter rows.  We need the !important
  // because the child parameter rows (the nested expanded properties) otherwise
  // have the same background color.
  & > tbody > tr {
    background: var(--color-canvas-default) !important;
  }
  // also for the top level child parameter table row, we want the details toggle
  // to align with the top level parameter rows.  Child parameter rows have some
  // left padding so they can indent as they nest but we don't want that in
  // this case.  We need the !important to override general default markdown
  // article styling.
  & > tbody > tr > td > details {
    padding-left: 0px !important;
    margin-bottom: 4px !important;
  }

  & > tbody > tr > td > * {
    width: auto;
    display: block;
    word-break: break-word;
  }
}
 293  
package-lock.json
@@ -79,47 +79,47 @@
        "strip-html-comments": "^1.0.0",
        "styled-components": "^5.3.5",
        "swr": "^1.3.0",
        "ts-dedent": "^2.2.0",
        "unified": "^10.1.2",
        "unist-util-visit": "^4.1.0",
        "url-template": "^3.0.0",
        "uuid": "^8.3.2",
        "walk-sync": "^3.0.0"
      },
      "devDependencies": {
        "@actions/core": "^1.9.1",
        "@actions/github": "^5.0.3",
        "@alex_neo/jest-expect-message": "^1.0.5",
        "@babel/core": "^7.18.5",
        "@babel/eslint-parser": "^7.18.2",
        "@babel/plugin-syntax-top-level-await": "^7.14.5",
        "@babel/plugin-transform-runtime": "^7.18.5",
        "@babel/preset-env": "^7.18.2",
        "@graphql-inspector/core": "^3.1.2",
        "@graphql-tools/load": "^7.5.14",
        "@jest/globals": "29.0.3",
        "@octokit/graphql": "4.8.0",
        "@octokit/rest": "^18.12.0",
        "@types/github-slugger": "^1.3.0",
        "@types/imurmurhash": "^0.1.1",
        "@types/js-cookie": "^3.0.2",
        "@types/lodash": "^4.14.182",
        "@types/react": "17.0.38",
        "@types/react-dom": "^18.0.5",
        "@types/react-syntax-highlighter": "^15.5.2",
        "@types/uuid": "^8.3.4",
        "@typescript-eslint/eslint-plugin": "5.38.0",
        "@typescript-eslint/parser": "5.38.0",
        "babel-loader": "^8.2.5",
        "babel-plugin-styled-components": "^2.0.7",
        "babel-preset-env": "^1.7.0",
        "chalk": "^5.0.1",
        "change-case": "^4.1.2",
        "commander": "^9.3.0",
        "cross-env": "^7.0.3",
        "csp-parse": "0.0.2",
        "dedent": "^0.7.0",
        "domwaiter": "^1.3.0",
        "domwaiter": "^1.4.0",
        "eslint": "8.24.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-config-standard": "^17.0.0",
@@ -4110,8 +4110,9 @@
    },
    "node_modules/@szmarczak/http-timer": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-4.0.6.tgz",
      "integrity": "sha512-4BAffykYOgO+5nzBWYwE3W90sBgLJoUPRWWcL8wlyiM8IB8ipJz3UMJ9KXQd1RKQXpKp8Tutn80HZtWsu2u76w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defer-to-connect": "^2.0.0"
      },
@@ -6515,37 +6516,26 @@
        "camelcase": "^6.2.0",
        "map-obj": "^4.1.0",
        "quick-lru": "^5.1.1",
        "type-fest": "^1.2.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/camelcase": {
      "version": "6.3.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/quick-lru": {
      "version": "5.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/camelcase-keys/node_modules/type-fest": {
      "version": "1.4.0",
      "dev": true,
@@ -7584,96 +7574,61 @@
      }
    },
    "node_modules/domwaiter": {
      "version": "1.3.0",
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/domwaiter/-/domwaiter-1.4.0.tgz",
      "integrity": "sha512-k7dIRmg5/wMsET8FFZvrlZ2A81WOjc9D5DcVVoZxkwvo2hMPklYXPiS23h3Ez7zqyp25pmEn3Hzjq8agPiRxiw==",
      "dev": true,
      "dependencies": {
        "bottleneck": "^2.19.5",
        "cheerio": "^1.0.0-rc.3",
        "got": "^10.6.0"
      }
    },
    "node_modules/domwaiter/node_modules/@sindresorhus/is": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/is?sponsor=1"
        "got": "^11.8.5"
      }
    },
    "node_modules/domwaiter/node_modules/cacheable-lookup": {
      "version": "2.0.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/keyv": "^3.1.1",
        "keyv": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/domwaiter/node_modules/decompress-response": {
      "version": "5.0.0",
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-5.0.4.tgz",
      "integrity": "sha512-2/kNscPhpcxrOigMZzbiWF7dz8ilhb/nIHU3EyZiXWXpeq/au8qJ8VhdftMkty3n7Gj6HIGalQG8oiBNB3AJgA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
        "node": ">=10.6.0"
      }
    },
    "node_modules/domwaiter/node_modules/got": {
      "version": "10.7.0",
      "version": "11.8.5",
      "resolved": "https://registry.npmjs.org/got/-/got-11.8.5.tgz",
      "integrity": "sha512-o0Je4NvQObAuZPHLFoRSkdG2lTgtcynqymzg2Vupdx6PorhaT5MCbIyXG6d4D94kk8ZG57QeosgdiqfJWhEhlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sindresorhus/is": "^2.0.0",
        "@szmarczak/http-timer": "^4.0.0",
        "@sindresorhus/is": "^4.0.0",
        "@szmarczak/http-timer": "^4.0.5",
        "@types/cacheable-request": "^6.0.1",
        "cacheable-lookup": "^2.0.0",
        "cacheable-request": "^7.0.1",
        "decompress-response": "^5.0.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^5.0.0",
        "@types/responselike": "^1.0.0",
        "cacheable-lookup": "^5.0.3",
        "cacheable-request": "^7.0.2",
        "decompress-response": "^6.0.0",
        "http2-wrapper": "^1.0.0-beta.5.2",
        "lowercase-keys": "^2.0.0",
        "mimic-response": "^2.1.0",
        "p-cancelable": "^2.0.0",
        "p-event": "^4.0.0",
        "responselike": "^2.0.0",
        "to-readable-stream": "^2.0.0",
        "type-fest": "^0.10.0"
        "responselike": "^2.0.0"
      },
      "engines": {
        "node": ">=10"
        "node": ">=10.19.0"
      },
      "funding": {
        "url": "https://github.com/sindresorhus/got?sponsor=1"
      }
    },
    "node_modules/domwaiter/node_modules/mimic-response": {
      "version": "2.1.0",
    "node_modules/domwaiter/node_modules/http2-wrapper": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-1.0.3.tgz",
      "integrity": "sha512-V+23sDMr12Wnz7iTcDeJr3O6AIxlnvT/bmaAAAP/Xda35C90p9599p0F1eHR/N1KILWSoWVAiOMFjBBXaXSMxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      "dependencies": {
        "quick-lru": "^5.1.1",
        "resolve-alpn": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/domwaiter/node_modules/type-fest": {
      "version": "0.10.0",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
        "node": ">=10.19.0"
      }
    },
    "node_modules/dot-case": {
@@ -7713,11 +7668,6 @@
      "dev": true,
      "license": "MIT"
    },
    "node_modules/duplexer3": {
      "version": "0.1.4",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
@@ -10423,17 +10373,6 @@
        "node": ">=10.19.0"
      }
    },
    "node_modules/http2-wrapper/node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.0",
      "devOptional": true,
@@ -15786,45 +15725,13 @@
    },
    "node_modules/p-cancelable": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-2.1.1.tgz",
      "integrity": "sha512-BZOr3nRQHOntUjTrH8+Lh54smKHoHyur8We1V8DSMVrl5A2malOOwuJRnKRDjSnkoeBh4at6BwEnb5I7Jl31wg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-event": {
      "version": "4.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-timeout": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-event/node_modules/p-timeout": {
      "version": "3.2.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-finally": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "dev": true,
@@ -16522,6 +16429,17 @@
        }
      ]
    },
    "node_modules/quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
@@ -19245,14 +19163,6 @@
        "node": ">=4"
      }
    },
    "node_modules/to-readable-stream": {
      "version": "2.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "devOptional": true,
@@ -23510,6 +23420,8 @@
    },
    "@szmarczak/http-timer": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-4.0.6.tgz",
      "integrity": "sha512-4BAffykYOgO+5nzBWYwE3W90sBgLJoUPRWWcL8wlyiM8IB8ipJz3UMJ9KXQd1RKQXpKp8Tutn80HZtWsu2u76w==",
      "dev": true,
      "requires": {
        "defer-to-connect": "^2.0.0"
@@ -25367,10 +25279,6 @@
          "version": "6.3.0",
          "dev": true
        },
        "quick-lru": {
          "version": "5.1.1",
          "dev": true
        },
        "type-fest": {
          "version": "1.4.0",
          "dev": true
@@ -26043,61 +25951,50 @@
      }
    },
    "domwaiter": {
      "version": "1.3.0",
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/domwaiter/-/domwaiter-1.4.0.tgz",
      "integrity": "sha512-k7dIRmg5/wMsET8FFZvrlZ2A81WOjc9D5DcVVoZxkwvo2hMPklYXPiS23h3Ez7zqyp25pmEn3Hzjq8agPiRxiw==",
      "dev": true,
      "requires": {
        "bottleneck": "^2.19.5",
        "cheerio": "^1.0.0-rc.3",
        "got": "^10.6.0"
        "got": "^11.8.5"
      },
      "dependencies": {
        "@sindresorhus/is": {
          "version": "2.1.1",
          "dev": true
        },
        "cacheable-lookup": {
          "version": "2.0.1",
          "dev": true,
          "requires": {
            "@types/keyv": "^3.1.1",
            "keyv": "^4.0.0"
          }
        },
        "decompress-response": {
          "version": "5.0.0",
          "dev": true,
          "requires": {
            "mimic-response": "^2.0.0"
          }
          "version": "5.0.4",
          "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-5.0.4.tgz",
          "integrity": "sha512-2/kNscPhpcxrOigMZzbiWF7dz8ilhb/nIHU3EyZiXWXpeq/au8qJ8VhdftMkty3n7Gj6HIGalQG8oiBNB3AJgA==",
          "dev": true
        },
        "got": {
          "version": "10.7.0",
          "version": "11.8.5",
          "resolved": "https://registry.npmjs.org/got/-/got-11.8.5.tgz",
          "integrity": "sha512-o0Je4NvQObAuZPHLFoRSkdG2lTgtcynqymzg2Vupdx6PorhaT5MCbIyXG6d4D94kk8ZG57QeosgdiqfJWhEhlQ==",
          "dev": true,
          "requires": {
            "@sindresorhus/is": "^2.0.0",
            "@szmarczak/http-timer": "^4.0.0",
            "@sindresorhus/is": "^4.0.0",
            "@szmarczak/http-timer": "^4.0.5",
            "@types/cacheable-request": "^6.0.1",
            "cacheable-lookup": "^2.0.0",
            "cacheable-request": "^7.0.1",
            "decompress-response": "^5.0.0",
            "duplexer3": "^0.1.4",
            "get-stream": "^5.0.0",
            "@types/responselike": "^1.0.0",
            "cacheable-lookup": "^5.0.3",
            "cacheable-request": "^7.0.2",
            "decompress-response": "^6.0.0",
            "http2-wrapper": "^1.0.0-beta.5.2",
            "lowercase-keys": "^2.0.0",
            "mimic-response": "^2.1.0",
            "p-cancelable": "^2.0.0",
            "p-event": "^4.0.0",
            "responselike": "^2.0.0",
            "to-readable-stream": "^2.0.0",
            "type-fest": "^0.10.0"
            "responselike": "^2.0.0"
          }
        },
        "mimic-response": {
          "version": "2.1.0",
          "dev": true
        },
        "type-fest": {
          "version": "0.10.0",
          "dev": true
        "http2-wrapper": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-1.0.3.tgz",
          "integrity": "sha512-V+23sDMr12Wnz7iTcDeJr3O6AIxlnvT/bmaAAAP/Xda35C90p9599p0F1eHR/N1KILWSoWVAiOMFjBBXaXSMxg==",
          "dev": true,
          "requires": {
            "quick-lru": "^5.1.1",
            "resolve-alpn": "^1.0.0"
          }
        }
      }
    },
@@ -26127,10 +26024,6 @@
      "version": "0.1.2",
      "dev": true
    },
    "duplexer3": {
      "version": "0.1.4",
      "dev": true
    },
    "eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
@@ -27988,13 +27881,6 @@
      "requires": {
        "quick-lru": "^5.1.1",
        "resolve-alpn": "^1.2.0"
      },
      "dependencies": {
        "quick-lru": {
          "version": "5.1.1",
          "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
          "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
        }
      }
    },
    "https-proxy-agent": {
@@ -31679,26 +31565,8 @@
    },
    "p-cancelable": {
      "version": "2.1.1",
      "dev": true
    },
    "p-event": {
      "version": "4.2.0",
      "dev": true,
      "requires": {
        "p-timeout": "^3.1.0"
      },
      "dependencies": {
        "p-timeout": {
          "version": "3.2.0",
          "dev": true,
          "requires": {
            "p-finally": "^1.0.0"
          }
        }
      }
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-2.1.1.tgz",
      "integrity": "sha512-BZOr3nRQHOntUjTrH8+Lh54smKHoHyur8We1V8DSMVrl5A2malOOwuJRnKRDjSnkoeBh4at6BwEnb5I7Jl31wg==",
      "dev": true
    },
    "p-limit": {
@@ -32146,6 +32014,11 @@
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true
    },
    "quick-lru": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
      "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA=="
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
    "to-fast-properties": {
      "version": "2.0.0"
    "to-readable-stream": {
      "version": "2.1.0",
      "dev": 'tests'@travis'
    "to-regex-range": {
      "version": "5.0.1",
      "devOptional": true,
    "cross-env": "^7.0.3",
    "csp-parse": "0.0.2",
    "dedent": "^0.7.0",
    "domwaiter": "^1.3.0",
    "domwaiter": "^1.4.0",
    "eslint": "8.24.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-config-standard": "^17.0.0",
Comparing..., :d72728197'@zakwarlord7/GitHub/doc/javascript/package.yam :
