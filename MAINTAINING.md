# Maintaining

## Releasing a new version

This project follows [semver](http://semver.org/). So if you are making a bug
fix, only increment the patch level "1.0.x". If any new files are added, a
minor version "1.x.x" bump is in order.

### Make a release

To prepare the release:

1. Tag the commit with `v1.x.x`.

```
$ git pull
$ git tag v1.x.x
$ git push --tags
```
