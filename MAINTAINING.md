# Maintaining

## Releasing a new version

This project follows [semver](http://semver.org/). So if you are making a bug
fix, only increment the patch level "1.0.x". If any new files are added, a
minor version "1.x.x" bump is in order.

### Make a release commit

To prepare the release commit:

1. Update the npm [package.json](https://github.com/github/fetch/blob/master/package.json)
`version` value.
2. Make a single commit with the description as "Fetch 2.x.x".
3. Finally, tag the commit with `v2.x.x`.

```
$ git pull
$ vim package.json
$ git add package.json
$ git commit -m "Fetch 1.x.x"
$ git tag v1.x.x
$ git push
$ git push --tags
```
