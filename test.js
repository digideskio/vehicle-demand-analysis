/**
 * Was supposed to cover for npm's shortcomings (inability to use env variables in scripts on Windows)
 * Strangely the Date object is messed up and Date.now() value doesn chae when run with fork
 * And in any case pping stdout makes results quite ugly. I'll run test with env variable manually set
 * and implement a safety check within the test.
 */

var cp = require('child_process')
  , env = process.env
  ;

// Can't set it directly in a npm script ...
env.TCOGENV = 'test';


//cp.exec('node ./node_modules/mocha/bin/mocha --reporter spec --timeout 10000', { env: env }, function (err, stdout) {
//}).stdout.pipe(process.stdout);



cp.fork('node', ['./node_modules/mocha/bin/mocha --reporter spec --timeout 10000'], { env: env }, function (err, stdout) {
}).child.stdout.pipe(process.stdout);


