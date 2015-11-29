importScripts('../node_modules/chai/chai.js')
importScripts('../node_modules/mocha/mocha.js')

mocha.setup('tdd')
window.assert = chai.assert

importScripts('../bower_components/es6-promise/promise.js')
importScripts('../fetch.js')

importScripts('test.js')

function title(test) {
  return test.fullTitle().replace(/#/g, '');
}

function reporter(runner) {
  runner.on('pending', function(test){
    window.postMessage({name: 'pending', title: title(test)});
  });

  runner.on('pass', function(test){
    window.postMessage({name: 'pass', title: title(test)});
  });

  runner.on('fail', function(test, err){
    window.postMessage({
      name: 'fail',
      title: title(test),
      message: err.message,
      stack: err.stack
    });
  });

  runner.on('end', function(){
    window.postMessage({name: 'end'});
  });
}

mocha.reporter(reporter).run()
