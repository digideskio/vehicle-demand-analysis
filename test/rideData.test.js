var should = require('chai').should()
  , assert = require('chai').assert
  , customUtils = require('../lib/customUtils')
  , config = require('../lib/config')
  , rideData = require('../lib/rideData')
  ;


describe('Ride data', function () {

  beforeEach(function () {
    config.database.should.equal('./data/test-workspace/');   // Having to do that is freaking stupid but npm leaves me no choice.
  });

  describe('Inserting one ride', function () {

    it('Can insert one ride if well formed', function (done) {
      done();
    });

  });

});
