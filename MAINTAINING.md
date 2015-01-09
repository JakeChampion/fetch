# Maintaining

## Releasing a new version

This project follows [semver](http://semver.org/). So if you are making a bug
fix, only increment the patch level "1.0.x". If any new files are added, a
minor version "1.x.x" bump is in order.

### Make a release

To prepare the release:

1. Make a single empty commit with the description as "Fetch 1.x.x".
2. Tag the commit with `v1.x.x`.

```
$ git pull
$ git commit --allow-empty -m "Fetch 1.x.x"
$ git tag v1.x.x
$ git push --tags
```
