export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number' || !Number.isFinite(sqft)) throw new TypeError('Square foot must be a number');
    if (this.evacuationWarningMessage === undefined && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number' || !Number.isFinite(sqft)) throw new TypeError('Square foot must be a number');
    this._sqft = sqft;
  }
}
