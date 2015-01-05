#!/usr/bin/env node

var port = Number(process.argv[2] || 3000)

var fs = require('fs')
var http = require('http');
var url = require('url');

var routes = {
  '/request': function(res, req) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var data = ''
    req.on('data', function(c) { data += c })
    req.on('end', function() {
      res.end(JSON.stringify({
        method: req.method,
        url: req.url,
        headers: req.headers,
        data: data
      }));
    })
  },
  '/hello': function(res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hi');
  },
  '/redirect/301': function(res) {
    res.writeHead(301, {'Location': '/hello'});
    res.end();
  },
  '/redirect/302': function(res) {
    res.writeHead(302, {'Location': '/hello'});
    res.end();
  },
  '/redirect/303': function(res) {
    res.writeHead(303, {'Location': '/hello'});
    res.end();
  },
  '/redirect/307': function(res) {
    res.writeHead(307, {'Location': '/hello'});
    res.end();
  },
  '/redirect/308': function(res) {
    res.writeHead(308, {'Location': '/hello'});
    res.end();
  },
  '/boom': function(res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('boom');
  },
  '/empty': function(res) {
    res.writeHead(204);
    res.end();
  },
  '/error': function(res) {
    res.destroy();
  },
  '/form': function(res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('number=1&space=one+two&empty=&encoded=a%2Bb&');
  },
  '/json': function(res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name: 'Hubot', login: 'hubot'}));
  },
  '/json-error': function(res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('not json {');
  },
  '/headers': function(res) {
    res.writeHead(200, {
      'Date': 'Mon, 13 Oct 2014 21:02:27 GMT',
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end();
  }
};

var types = {
  js: 'application/javascript',
  css: 'text/css',
  html: 'text/html',
  txt: 'text/plain'
};

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  var route = routes[pathname];
  if (route) {
    route(res, req);
  } else {
    fs.readFile(__dirname + '/..' + pathname, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': types.txt});
        res.end('Not Found');
      } else {
        var ext = (pathname.match(/\.([^\/]+)$/) || [])[1]
        res.writeHead(200, {'Content-Type': types[ext] || types.txt});
        res.end(data);
      }
    });
  }
}).listen(port);
