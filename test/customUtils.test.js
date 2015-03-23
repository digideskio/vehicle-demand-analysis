var should = require('chai').should()
  , assert = require('chai').assert
  , customUtils = require('../lib/customUtils')
  ;


describe('customUtils', function () {

  describe('parseCSVData', function () {

    it('Able to understand how to split data according to newlines whatever the OS', function () {
      var datan = "header\ndata1\ndata2"
        , datar = "header\rdata1\rdata2"
        , datarn = "header\r\ndata1\r\ndata2"
        , parsedDatan = customUtils.parseCSVData(datan)
        , parsedDatar = customUtils.parseCSVData(datar)
        , parsedDatarn = customUtils.parseCSVData(datarn)
        ;

      // Parsed data should not contain any \r or \n

      parsedDatan.length.should.equal(2);
      parsedDatan[0].header.indexOf('\r').should.equal(-1);
      parsedDatan[0].header.indexOf('\n').should.equal(-1);
      parsedDatan[1].header.indexOf('\r').should.equal(-1);
      parsedDatan[1].header.indexOf('\n').should.equal(-1);

      parsedDatar.length.should.equal(2);
      parsedDatar[0].header.indexOf('\r').should.equal(-1);
      parsedDatar[0].header.indexOf('\n').should.equal(-1);
      parsedDatar[1].header.indexOf('\r').should.equal(-1);
      parsedDatar[1].header.indexOf('\n').should.equal(-1);

      parsedDatarn.length.should.equal(2);
      parsedDatarn[0].header.indexOf('\r').should.equal(-1);
      parsedDatarn[0].header.indexOf('\n').should.equal(-1);
      parsedDatarn[1].header.indexOf('\r').should.equal(-1);
      parsedDatarn[1].header.indexOf('\n').should.equal(-1);
    });


    it('No data yields empty array', function () {
      customUtils.parseCSVData(undefined).length.should.equal(0);
      customUtils.parseCSVData(null).length.should.equal(0);
      customUtils.parseCSVData('').length.should.equal(0);
      customUtils.parseCSVData('header').length.should.equal(0);   // Just a header means no data
    });

    it('Correctly parses CSV data', function () {
      var data = "firstName;lastName;age\nLouis;Chatriot;30\nAnother;One;47"
        , parsedData = customUtils.parseCSVData(data)
        ;

      parsedData.length.should.equal(2);
      assert.deepEqual(parsedData[0], { firstName: 'Louis', lastName: 'Chatriot', age: '30' });
      assert.deepEqual(parsedData[1], { firstName: 'Another', lastName: 'One', age: '47' });

    });

    it('No or empty field will yield an empty datum', function () {
      var data = "firstName;lastName;age\nLouis;Chatriot\nAnother;;47"
        , parsedData = customUtils.parseCSVData(data)
        ;

      parsedData.length.should.equal(2);
      assert.deepEqual(parsedData[0], { firstName: 'Louis', lastName: 'Chatriot' });
      assert.deepEqual(parsedData[1], { firstName: 'Another', lastName: '', age: '47' });

    });


  });

});

