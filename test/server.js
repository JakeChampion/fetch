#!/usr/bin/env node

var http = require('http');
var app = require('./app');

var port = parseInt(process.argv[2], 10) || 3000;
http.createServer(app).listen(port);
