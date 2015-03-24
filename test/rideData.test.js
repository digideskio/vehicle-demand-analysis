var should = require('chai').should()
  , assert = require('chai').assert
  , customUtils = require('../lib/customUtils')
  , config = require('../lib/config')
  , rideData = require('../lib/rideData')
  ;


describe('Ride data', function () {

  beforeEach(function (done) {
    config.database.should.equal('./data/test-workspace/');   // Having to do that is freaking stupid but npm leaves me no choice.
    rideData.removeAll(function (err) {
      assert.iNull(err);
      db.find({}, function (err, docs) {
        assert.isNull(err);
        docs.length.should.equal(0);
        return done();
      });
    });
  });

  describe('Inserting one ride', function () {

    it('Can insert one ride if well formed', function (done) {
      done();
    });

  });

});
