var fs = require('fs')
  , Nedb = require('nedb')
  , config = require('./config')
  , db = new Nedb({ filename: config.database + 'rideData.nedb', autoload: true })
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

// Give direct access to database
rideData.db = db;


/*
 * Insert one ride if not already in the database
 * @param{Object} data - Data for one ride, see schema above
 * @param{Functio} callback - Signature: err
 */
rideData.insert = function (data, callback) {
  if (data.id) { data._id = data.id; delete data.id; }
  
  if (!data._id || !data.carPlate || !data.begin || !data.end || !data.duration) {
    return callback("Incomplete ride");
  }

  db.update({ _id: data._id }, data, { upsert: true }, function (err) { return callback(err); });
};


/*
 * Import data from CSV data in string fot
 * @param {String} data - CSV data
 * @param {Function} callback - Signature: err, nInserted, nFailed
 */
rideData.bulkImport = function (data, callback) {



};



// Interface
module.exports = rideData;
