test: lint dist/fetch.umd.js

lint: node_modules/
	./node_modules/.bin/eslint --report-unused-disable-directives *.js test/*.js

dist/fetch.umd.js: fetch.js rollup.config.js node_modules/
	./node_modules/.bin/rollup -c

node_modules/:
	npm install

clean:
	rm -rf ./bower_components ./node_modules

ifeq ($(shell uname -s),Darwin)
sauce_connect/bin/sc:
	wget https://saucelabs.com/downloads/sc-4.3.16-osx.zip
	unzip sc-4.3.16-osx.zip
	mv sc-4.3.16-osx sauce_connect
	rm sc-4.3.16-osx.zip
else
sauce_connect/bin/sc:
	mkdir -p sauce_connect
	curl -fsSL http://saucelabs.com/downloads/sc-4.3.16-linux.tar.gz | tar xz -C sauce_connect --strip-components 1
endif

phantomjs/bin/phantomjs:
	mkdir -p phantomjs
	wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2 -O- | tar xj -C phantomjs --strip-components 1

.PHONY: clean lint test
