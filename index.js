var rideData = require('./lib/rideData')
  , fs = require('fs')
  , customUtils = require('./lib/customUtils');
  ;


var data = fs.readFileSync('./data/example.csv', 'utf8');


customUtils.parseCSVData(data);






