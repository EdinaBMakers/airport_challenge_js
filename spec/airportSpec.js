'use strict';

describe('Airport', function() {
  var weather;
  var airport;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('#new', function() {
    it('creates an empty airport', function() {
      expect(airport.planes).toEqual([]);
    });
  });

  describe('#land', function() {
    it('can land a plane if weather is not stormy', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      var plane = new Plane();
      airport.land(plane);

      expect(airport.planes).toEqual([plane]);
    });

    it('throws an error when a plane tries to land in stormy weather',
       function() {
      spyOn(weather, 'isStormy').and.returnValue(true);

      expect(function() { airport.land(new Plane()) })
        .toThrowError('Cannot land in stormy weather');
    });
  });
});
