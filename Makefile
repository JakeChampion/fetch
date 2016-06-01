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

.PHONY: build clean lint test saucelabs travis
