'use strict';

function Airport(weather) {
  this.CAPACITY = 5;
  this.planes = [];
  this._weather = weather;
}

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error('Cannot land in stormy weather');
  }

  if (this.planes.length === this.CAPACITY) {
    throw new Error('Cannot land: Airport is full');
  }

  this.planes.push(plane);
};
