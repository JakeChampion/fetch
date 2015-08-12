build: node_modules/ bower_components/ compile/

test: node_modules/ build lint
	./script/test

lint: node_modules/
	./node_modules/.bin/jshint src/*.js test/*.js

bower_components/: node_modules/
	./node_modules/.bin/bower install

compile/: node_modules/
	./node_modules/.bin/webpack --output-library-target commonjs2 src/fetch.js library/index.js
	./node_modules/.bin/webpack -p src/index.js ./fetch.js

node_modules/:
	npm install

clean:
	rm -rf ./bower_components ./library ./node_modules

.PHONY: build clean lint test saucelabs travis
