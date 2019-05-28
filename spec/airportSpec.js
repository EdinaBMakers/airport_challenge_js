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

      expect(function() { airport.land(new Plane()); })
        .toThrowError('Cannot land in stormy weather');
    });

    it('can land planes up to capacity', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);

      for(var i = 0; i < airport.CAPACITY; i++) {
        airport.land(new Plane());
      }

      expect(airport.planes.length).toEqual(airport.CAPACITY);
    });

    it('raises an error when a plane tries to land and airport is at max capacity',
       function() {
         spyOn(weather, 'isStormy').and.returnValue(false);

         for(var i = 0; i < airport.CAPACITY; i++) {
           airport.land(new Plane());
         }

         expect(function() { airport.land(new Plane()); })
          .toThrowError('Cannot land: Airport is full');
      });
  });
});
