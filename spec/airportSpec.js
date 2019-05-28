'use strict';

describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#new', function() {
    it('creates an empty airport', function() {
      expect(airport.planes()).toEqual([]);
    });
  });
});
