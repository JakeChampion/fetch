build: node_modules/

test: node_modules/ build lint
	./test/run.sh

lint: node_modules/
	./node_modules/.bin/jshint *.js test/*.js

node_modules/:
	npm install

clean:
	rm -rf ./node_modules

.PHONY: build clean lint test
