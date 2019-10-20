build: node_modules/ bower_components/

test: node_modules/ build lint
	./script/test

lint: node_modules/
	./node_modules/.bin/jshint *.js test/*.js

bower_components/: node_modules/
	./node_modules/.bin/bower install

node_modules/:
	npm install

clean:
	rm -rf ./bower_components ./node_modules

.PHONY: build clean lint test saucelabs travis
