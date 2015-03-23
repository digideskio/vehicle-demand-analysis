var fs = require('fs')
  , Nedb = require('nedb')
  , db = new Nedb({ filename: './data/rideData.nedb', autoload: true })
  , rideData = {}
  ;

// "Schema" definition
// _id will be used to store ride id gotten from server
// Fields are: * _id - The ride Id in LM's database
//             * carPlate - License plate of the driven car
//             * begin - Begin timestamp (ms since Epoch) in the community's timezone
//             * end
//             * distance - In the community's unit (km or miles)
//             * duration - In ms
//             * hub - The hub the car is affected to
// Nothing programmatically enforced for now

/*
 * Insert one ride if not already in the database
 */
rideData.insert = function (data, callback) {
  console.log(data);
};


/*
 * Import data from a CSV file
 * Headers are rideId, carId, begin, end, 
 */
rideData.bulkImport = function (data) {
  console.log("==============");


};



// Interface
module.exports = rideData;
