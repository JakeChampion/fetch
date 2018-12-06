var mochaRun = mocha.run
mocha.run = function() {}

mocha.suite.suites.unshift(Mocha.Suite.create(mocha.suite, 'worker'))

var worker = new Worker('/base/test/worker.js')

worker.addEventListener('message', function(e) {
  switch (e.data.name) {
    case 'pass':
      test(e.data.title, function() {})
      break
    case 'pending':
      test(e.data.title)
      break
    case 'fail':
      test(e.data.title, function() {
        var err = new Error(e.data.message)
        err.stack = e.data.stack
        throw err
      })
      break
    case 'end':
      mochaRun()
      break
  }
})
