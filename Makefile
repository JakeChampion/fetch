test: lint dist/fetch.umd.js

lint: node_modules/
	./node_modules/.bin/eslint --report-unused-disable-directives *.js test/*.js

dist/fetch.umd.js: fetch.js rollup.config.js node_modules/
	./node_modules/.bin/rollup -c

dist/fetch.umd.js.flow: fetch.js.flow
	cp $< $@

node_modules/:
	npm install

clean:
	rm -rf ./bower_components ./node_modules ./dist

.PHONY: clean lint test make dist/fetch.umd.js dist/fetch.umd.js.flow
