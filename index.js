var rideData = require('./lib/rideData')
  , fs = require('fs')
  , customUtils = require('./lib/customUtils');
  ;


var data = fs.readFileSync('./data/example.csv', 'utf8');


data = customUtils.parseCSVData(data, {
  begin: function (d) { return new Date(d).getTime(); }
, end: function (d) { return new Date(d).getTime(); }
}, function (d) { d.duration = d.end - d.begin; return d; });

console.log(data);




