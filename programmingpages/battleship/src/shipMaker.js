export class Ship {
  constructor() {
    this.hitbox = [];
  }

  placeShip(startSquare, length, direction) {
    for (let i = 0; i < length; i++) { // add ship squares to array
      if (direction == 0) {
        this.hitbox.push(startSquare + i);
      } else {
        this.hitbox.push(startSquare + (i * 10));
      }
    }
    return this.hitbox
  }

}
