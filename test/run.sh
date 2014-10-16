#!/bin/bash

function stop() {
  kill -9 $(<test/server.pid)
  rm test/server.pid
}
trap stop EXIT

node ./test/server.js & echo "$!" > test/server.pid

node ./node_modules/.bin/node-qunit-phantomjs http://localhost:3000/test/test.html
