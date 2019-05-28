'use strict';

function Airport(weather) {
  this.planes = [];
  this._weather = weather;
}

Airport.prototype.land = function(plane) {
  if (this._weather.isStormy()) {
    throw new Error('Cannot land in stormy weather');
  }

  this.planes.push(plane);
};
